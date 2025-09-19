
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
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center">
              Systematic Alpha Through Behavioral Infrastructure
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-center">
              BAI Funds (Bai Awan Investments) is a quantitative hedge fund with two internal arms:
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={150}>
              <div className="p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">BAI Funds</h3>
                <p className="text-muted-foreground">
                  The hedge fund entity that deploys capital and generates returns through systematic behavioral insights.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">BAI Tech (Behavioral Alpha Infrastructure)</h3>
                <p className="text-muted-foreground">
                  The proprietary AI-driven technology platform that powers investment decisions and systematic execution.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={250}>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">Systematic</h4>
                <p className="text-sm text-muted-foreground">Data-driven approach</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Behavioral</h4>
                <p className="text-sm text-muted-foreground">Cognitive bias insights</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Institutional</h4>
                <p className="text-sm text-muted-foreground">Risk management</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Scalable</h4>
                <p className="text-sm text-muted-foreground">Technology-driven</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

