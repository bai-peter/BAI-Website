import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative w-full h-[100svh] hero-hide-background overflow-hidden z-[60]', className)}>
      <div className="absolute inset-0 -z-10 w-full h-[100svh]">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster="/og-image.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'none' }}
        >
          <source src="/BAI Logo Office.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        
        {/* Lighter overlay to show video better */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        {/* No animated nodes in hero to keep video layer clean */}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto container-padding py-16 md:py-24 max-w-6xl text-center">
          <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Logo removed from hero section */}
            
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-tight text-balance drop-shadow-lg">
                Advancing Quantitative<br />
                Strategies Through<br />
                AI Innovation
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto text-balance font-normal drop-shadow-md">
                We develop and deploy sophisticated multi-agent AI systems that systematically analyze markets, identify opportunities, and execute strategies with institutional-grade precision and scale.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <a 
                  href="#what-we-do"
                  className="bg-white text-bai-primary font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus-visible"
                >
                  Our Approach
                </a>
                <a 
                  href="#team"
                  className="border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-bai-primary transition-all duration-300 transform hover:scale-105 focus-visible"
                >
                  Our Team
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
