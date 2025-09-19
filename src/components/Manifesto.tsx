
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="what-we-do" className={cn('py-20 md:py-32 bg-card', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-foreground text-balance">
              What We Do
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-large text-center text-foreground/90 mb-12 text-balance font-medium">
              Our people are relentless in seeking a better way. Each day, we reimagine and refine our strategies, models and technology in pursuit of superior results and long-term performance.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={150}>
              <div className="card-interactive p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Multi-Agent AI Research</h3>
                <p className="text-readable flex-grow">
                  Specialized AI agents work in coordinated teams to systematically analyze global markets from macro economic conditions down to individual stock selection, eliminating human bias and cognitive limitations.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="card-interactive p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-bai-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-bai-accent rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Fully Automated Execution</h3>
                <p className="text-readable flex-grow">
                  Zero human intervention required. Our system automatically researches, analyzes, and executes trades 24/7, continuously learning and adapting to market conditions.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={250}>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-bai-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Macro Agent</h4>
                <p className="text-muted-foreground">Global regime analysis</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Signal Agent</h4>
                <p className="text-muted-foreground">Multi-lens analysis</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Portfolio Agent</h4>
                <p className="text-muted-foreground">Risk-adjusted allocation</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Learning Agent</h4>
                <p className="text-muted-foreground">Continuous improvement</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

