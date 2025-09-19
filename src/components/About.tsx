
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-card relative z-10', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-foreground text-balance">Who We Are</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={100}>
              <div className="space-y-6 h-full flex flex-col">
                <div>
                  <span className="text-sm font-semibold text-bai-primary mb-2 inline-block uppercase tracking-wide">Our Ambition</span>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">To be the most profitable hedge fund in Canada through AI-native automation</h3>
                </div>
                
                <p className="text-readable mb-6">
                  We strive to identify the highest and best uses of capital to generate superior long-term returns for the world's preeminent institutions through the world's first fully automated multi-agent AI research and trading system.
                </p>
                
                <p className="text-readable mb-8">
                  Our specialized AI agents work in coordinated teams, each becoming an expert in their domain while collaborating to provide complete market analysis from global macro regimes down to individual stock selection.
                </p>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-xl font-semibold mb-6 text-foreground">Innovation at the Forefront of Finance</h4>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Multi-agent AI research methodology that eliminates human bias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Systematic analysis from global macro to individual stock selection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Fully automated execution with zero human intervention</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Continuous learning and adaptation to market regimes</span>
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
                  <h4 className="text-2xl font-semibold mb-2 text-foreground">Key Metrics</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bai-primary mb-1">2025</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bai-primary mb-1">$50M+</div>
                    <div className="text-sm text-muted-foreground">Target AUM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bai-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">AI Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bai-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Automation</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-primary/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Multi-Agent AI System</h5>
                    <p className="text-small text-muted-foreground">Specialized agents for macro, sector, signal, and execution analysis</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-accent/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-accent rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Zero Human Intervention</h5>
                    <p className="text-small text-muted-foreground">Fully automated research, analysis, and execution</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bai-primary/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-bai-primary rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h5>
                    <p className="text-small text-muted-foreground">AI agents that adapt and improve with market feedback</p>
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
