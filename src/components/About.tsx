
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-card', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center">About BAI</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-medium text-muted-foreground mb-2 inline-block">Our Mission</span>
                  <h3 className="text-2xl font-semibold mb-4">We generate alpha using behavioral insights in our investment process</h3>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  BAI combines cutting-edge artificial intelligence with deep behavioral finance expertise to systematically detect and exploit market inefficiencies.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  We model cognitive biases, emotional reactions, and sentiment shifts in real time—then execute fully automated strategies to capture excess returns.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-3">Our Philosophy</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Research-first approach to investment strategy</li>
                    <li>• Systematic methodology over discretionary decisions</li>
                    <li>• Technology-driven execution and risk management</li>
                    <li>• Continuous innovation in behavioral modeling</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-background border border-border p-8 space-y-6">
                <div className="text-center">
                  <img 
                    src="/BAI-Website/lovable-uploads/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
                    alt="BAI Logo"
                    className="w-20 h-auto mx-auto mb-4 opacity-80 object-contain"
                  />
                  <h4 className="text-xl font-semibold mb-2">Culture & Values</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground">Research Excellence</h5>
                    <p className="text-sm text-muted-foreground">Rigorous scientific approach to market analysis</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Systematic Innovation</h5>
                    <p className="text-sm text-muted-foreground">Continuous advancement in behavioral modeling</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Institutional Quality</h5>
                    <p className="text-sm text-muted-foreground">Professional risk management and compliance</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
