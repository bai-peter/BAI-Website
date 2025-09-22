import React, { useEffect, useMemo, useRef, useState } from 'react';

interface BackgroundChartProps {
  className?: string;
}

// Multiple random upward-biased walks that grow left->right, each with a glowing head rendered above content
const BackgroundChart: React.FC<BackgroundChartProps> = () => {
  type LineState = {
    seed: number;
    x: number;
    y: number;
    d: string;
    rng: () => number;
    color: string;
    volatility: number;
    upwardBias: number;
    stepX: number;
    yOffset: number;
    opacity: number;
    isFading: boolean;
    spawnedNext: boolean;
  };

  const maxConcurrentLines = 10;
  const nextSpawnAtRef = useRef(0);
  const spawnLine = (indexHint: number = 0): LineState => {
    const seed = Math.floor(Math.random() * 1_000_000);
    let s = seed || 1;
    const rng = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    const yOffset = 40 * indexHint;
    return {
      seed,
      x: 0,
      y: 900 - yOffset,
      d: 'M 0 ' + (900 - yOffset).toString(),
      rng,
      color: indexHint % 2 === 0 ? '#666666' : '#333333',
      volatility: 15 + (indexHint % 3) * 2,
      upwardBias: 0.56,
      stepX: 4 + (indexHint % 3),
      yOffset,
      opacity: 1,
      isFading: false,
      spawnedNext: false,
    };
  };

  const [lines, setLines] = useState<LineState[]>(() => [spawnLine(0)]);

  const rafRef = useRef(0);
  const frameCounter = useRef(0);

  useEffect(() => {
    const maxX = 1000;
    const minY = 80;
    const maxY = 950;

    const update = () => {
      frameCounter.current += 1;
      // Slow the update rate a bit by skipping frames
      if (frameCounter.current % 2 === 0) {
        setLines(prevLines => {
          let activeCount = prevLines.length;
          const spawnThreshold = 0.6 * maxX;

          const now = performance.now();
          const nextLines = prevLines
            .map((line, idx) => {
              let { x, y, d, rng, upwardBias, volatility, stepX, isFading, opacity, spawnedNext } = line;

              if (!isFading) {
                x += stepX; // advance

                const r = rng();
                const direction = r < upwardBias ? -1 : 1;
                const magnitude = (rng() * 2 - 1) * volatility;
                y = Math.min(maxY, Math.max(minY, y + direction * Math.abs(magnitude)));

                const nextSeg = ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
                d = d + nextSeg;

                // Mark eligibility to schedule next spawn when crossing threshold
                if (x > spawnThreshold && !spawnedNext) {
                  spawnedNext = true;
                }

                // Start fade when reaching end
                if (x >= maxX) {
                  isFading = true;
                }
              } else {
                // fade out gradually (slower)
                opacity -= 0.01;
                if (opacity <= 0) {
                  // fully reset this line
                  const replacement = spawnLine(idx);
                  return replacement;
                }
              }

              return { ...line, x, y, d, isFading, opacity, spawnedNext };
            });

          // Sequential spawn: only add one new line after a randomized cooldown
          const eligible = nextLines.some(l => l.spawnedNext);
          if (eligible) {
            // clear flags but don't spawn immediately
            nextLines.forEach(l => { if (l.spawnedNext) l.spawnedNext = false; });
            if (now >= nextSpawnAtRef.current && nextLines.length < maxConcurrentLines) {
              nextLines.push(spawnLine(nextLines.length));
              // random cooldown 300..1200ms
              const cooldown = 300 + Math.random() * 900;
              nextSpawnAtRef.current = now + cooldown;
            }
          }

          return nextLines;
        });
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="pulse-layer">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          <linearGradient id="neonLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="60%" stopColor="#f5f5f5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map((line, idx) => (
          <g key={`line-${idx}`}>
            {/* Subtle trailing line with low opacity */}
            <path
              d={line.d}
              stroke={idx % 2 === 0 ? '#8a8a8a' : '#6e6e6e'}
              strokeOpacity={0.18 * line.opacity}
              strokeWidth="2"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            {/* Neon leading segment replacing dots */}
            <path
              d={`M ${Math.max(0, line.x - 70).toFixed(1)} ${line.y.toFixed(1)} L ${line.x.toFixed(1)} ${line.y.toFixed(1)}`}
              stroke={idx % 2 === 0 ? 'url(#neonLine)' : '#ffffff'}
              strokeOpacity={0.95 * line.opacity}
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundChart;


