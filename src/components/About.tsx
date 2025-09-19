
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-foreground text-balance">About BAI Funds</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={100}>
              <div className="space-y-6 h-full flex flex-col">
                <div>
                  <span className="text-sm font-semibold text-bai-primary mb-2 inline-block uppercase tracking-wide">Our Mission</span>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">We generate alpha using multi-agent AI research systems</h3>
                </div>
                
                <p className="text-readable mb-6">
                  BAI Funds employs specialized AI agents that work in coordinated teams to systematically analyze global markets, from macro economic conditions down to individual stock selection.
                </p>
                
                <p className="text-readable mb-8">
                  Our multi-agent system eliminates human bias and cognitive limitations while providing institutional-quality research capabilities with the agility of a focused team.
                </p>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-xl font-semibold mb-6 text-foreground">Our Philosophy</h4>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Multi-agent AI research methodology</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Systematic analysis from macro to stock level</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Technology-driven execution and risk management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Continuous learning and adaptation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-card border border-border p-8 space-y-8 rounded-lg h-full flex flex-col">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-bai-gold/20 to-bai-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img 
                      src="/assets/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
                      alt="BAI Logo"
                      className="w-16 h-auto opacity-90 object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2 text-foreground">Culture & Values</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-primary/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">AI Agent Specialization</h5>
                    <p className="text-small text-muted-foreground">Each agent focuses on specific analysis domains</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-accent/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-accent rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Systematic Research</h5>
                    <p className="text-small text-muted-foreground">Multi-layer analysis from global macro to stock selection</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-primary/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Institutional Quality</h5>
                    <p className="text-small text-muted-foreground">Professional risk management and compliance</p>
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
