
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="what-we-do" className={cn('section-spacing bg-card relative z-10', className)}>
      {/* Mellow geometric background */}
      {/* Background chart is rendered globally in Index.tsx */}

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto content-spacing">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center text-foreground text-balance">
              Our Approach
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 text-balance font-normal">
              We combine rigorous quantitative research with cutting-edge AI technology to develop systematic strategies that adapt to evolving market conditions and deliver consistent alpha generation.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="card-interactive p-10 h-full flex flex-col hover-lift">
                <div className="w-16 h-16 bg-bai-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-primary rounded-full"></div>
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-foreground">Systematic Research</h3>
                <p className="text-lg leading-relaxed text-muted-foreground flex-grow">
                  Our multi-agent AI systems conduct comprehensive market analysis across all asset classes, from global macro regimes to individual securities, leveraging advanced machine learning to identify and exploit market inefficiencies.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="card-interactive p-10 h-full flex flex-col hover-lift">
                <div className="w-16 h-16 bg-bai-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-accent rounded-full"></div>
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-foreground">Automated Execution</h3>
                <p className="text-lg leading-relaxed text-muted-foreground flex-grow">
                  Our proprietary execution systems operate with institutional-grade infrastructure, seamlessly translating research insights into precise trading decisions across global markets with minimal latency and maximum efficiency.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={250}>
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div className="group hover-lift">
                <div className="w-20 h-20 bg-bai-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-bai-primary rounded-full"></div>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Macro Analysis</h4>
                <p className="text-lg text-muted-foreground">Global market regime identification</p>
              </div>
              <div className="group hover-lift">
                <div className="w-20 h-20 bg-bai-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Signal Generation</h4>
                <p className="text-lg text-muted-foreground">Multi-factor model development</p>
              </div>
              <div className="group hover-lift">
                <div className="w-20 h-20 bg-bai-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-bai-primary rounded-full"></div>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Portfolio Construction</h4>
                <p className="text-lg text-muted-foreground">Risk-optimized allocation</p>
              </div>
              <div className="group hover-lift">
                <div className="w-20 h-20 bg-bai-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Adaptive Learning</h4>
                <p className="text-lg text-muted-foreground">Continuous model refinement</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

