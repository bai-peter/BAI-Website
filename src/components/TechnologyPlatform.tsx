import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface TechnologyPlatformProps {
  className?: string;
}

const TechnologyPlatform: React.FC<TechnologyPlatformProps> = ({ className }) => {
  const capabilities = [
    {
      title: "The Multi-Agent AI System",
      description: "Specialized AI agents working in coordinated teams, each becoming an expert in their domain while collaborating to provide complete market analysis from global macro regimes down to individual stock selection",
      icon: "🤖"
    },
    {
      title: "The Research Funnel",
      description: "Systematic multi-layer analysis that filters opportunities from global macro regimes through sector rotation, industry focus, and individual stock selection with zero human bias",
      icon: "🔍"
    },
    {
      title: "The Signal Engine",
      description: "Multi-lens analysis combining fundamental, technical, sentiment, behavioral, and structural signals for comprehensive stock evaluation and ranking",
      icon: "📊"
    },
    {
      title: "The Learning Machine",
      description: "AI agents that continuously learn from market feedback, adapt to changing regimes, and evolve their strategies to maintain competitive advantage",
      icon: "⚡"
    }
  ];

  const infrastructure = [
    {
      title: "BAI Data Lake",
      description: "Centralized data storage and processing infrastructure that ingests real-time market data, fundamentals, news, and alternative data sources"
    },
    {
      title: "BAI Alpha Engine",
      description: "Proprietary signal generation system that processes multi-lens analysis and produces actionable investment signals with institutional-quality risk management"
    },
    {
      title: "BAI Portfolio Optimizer", 
      description: "Dynamic portfolio allocation system that balances expected return, risk, transaction costs, and diversification requirements using advanced optimization techniques"
    },
    {
      title: "BAI Risk Manager",
      description: "Real-time risk monitoring and management system that ensures compliance with position limits, regulatory requirements, and investment mandates"
    }
  ];

  return (
    <section id="technology" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center text-foreground text-balance">
              Innovation at the Forefront of Finance
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-large text-center text-foreground/90 mb-12 text-balance font-medium">
              Our people are relentless in seeking a better way. Each day, we reimagine and refine our strategies, models and technology in pursuit of superior results and long-term performance.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="card-interactive h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-6 flex-grow">
                    <div className="w-16 h-16 bg-bai-primary/20 rounded-lg flex items-center justify-center text-2xl group-hover:bg-bai-primary/30 transition-colors duration-300 flex-shrink-0">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">{capability.title}</h3>
                      <p className="text-readable">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="bg-card border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Core Systems</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="group p-6 border border-border/50 hover:bg-muted/20 rounded-lg transition-colors duration-300">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TechnologyPlatform;