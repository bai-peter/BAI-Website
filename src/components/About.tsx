
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('section-spacing bg-background relative z-10', className)}>
      {/* Mellow geometric background */}
      {/* Background chart is rendered globally in Index.tsx */}
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto content-spacing">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center text-foreground text-balance">Our Firm</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={100}>
              <div className="space-y-6 h-full flex flex-col">
                <div>
                  <span className="text-sm font-semibold text-bai-primary mb-2 inline-block uppercase tracking-wide">Our Mission</span>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Advancing quantitative investing through innovative AI-driven research and systematic execution</h3>
                </div>
                
                <p className="text-readable mb-6">
                  We develop sophisticated quantitative strategies that leverage advanced machine learning and systematic research to identify market opportunities and generate alpha across global markets.
                </p>
                
                <p className="text-readable mb-8">
                  Our multi-agent AI systems operate with institutional-grade infrastructure, conducting comprehensive market analysis and executing strategies with precision, scalability, and continuous adaptation to evolving market conditions.
                </p>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-xl font-semibold mb-6 text-foreground">Core Capabilities</h4>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Advanced machine learning models for systematic market analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Multi-factor research across global macro and micro market dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Institutional-grade execution infrastructure with minimal latency</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-bai-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Continuous model refinement and adaptive strategy optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-card border border-border p-8 space-y-8 rounded-lg h-full flex flex-col">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-bai-gold to-bai-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <img 
                      src="/assets/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
                      alt="BAI Logo"
                      className="w-20 h-auto opacity-90 object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2 text-foreground">Key Metrics</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bai-primary mb-1">2025</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bai-primary mb-1">93.3%</div>
                    <div className="text-sm text-muted-foreground">Trade Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bai-primary mb-1">+5.30%</div>
                    <div className="text-sm text-muted-foreground">Avg Return per Trade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bai-primary mb-1">4 days</div>
                    <div className="text-sm text-muted-foreground">Avg Holding Period</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Multi-Agent AI System</h5>
                    <p className="text-small text-muted-foreground">Specialized agents for macro, sector, signal, and execution analysis</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-accent rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">Zero Human Intervention</h5>
                    <p className="text-small text-muted-foreground">Fully automated research, analysis, and execution</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-bai-primary rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
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
