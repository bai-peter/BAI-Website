
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="thesis" className={cn('py-20 md:py-32 bg-card', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-foreground text-balance">
              Systematic Alpha Through Multi-Agent AI Research
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-large text-center text-foreground/90 mb-12 text-balance font-medium">
              BAI Funds (Bai Awan Investments) is a quantitative hedge fund with two internal arms:
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={150}>
              <div className="card-interactive p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">BAI Funds (Bai Awan Investments)</h3>
                <p className="text-readable flex-grow">
                  The hedge fund entity that deploys capital and generates returns through systematic multi-agent AI research.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="card-interactive p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-bai-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-bai-accent rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">BAI Tech (Multi-Agent AI Platform)</h3>
                <p className="text-readable flex-grow">
                  The proprietary multi-agent AI research system that powers investment decisions through specialized artificial intelligence agents.
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
                <h4 className="text-xl font-semibold mb-3 text-foreground">Systematic</h4>
                <p className="text-muted-foreground">Multi-agent AI approach</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Specialized</h4>
                <p className="text-muted-foreground">Domain-focused agents</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Institutional</h4>
                <p className="text-muted-foreground">Risk management</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-bai-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bai-accent/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-bai-accent rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Adaptive</h4>
                <p className="text-muted-foreground">Continuous learning</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

