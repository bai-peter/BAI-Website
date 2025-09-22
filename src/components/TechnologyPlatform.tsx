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
    <section id="technology" className={cn('section-spacing bg-card relative z-10', className)}>
      {/* Mellow geometric background */}
      {/* Background chart is rendered globally in Index.tsx */}
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto content-spacing">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center text-foreground text-balance">
              Technology & Infrastructure
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 text-balance font-normal">
              We build and maintain sophisticated technology infrastructure that enables our research teams to develop, test, and deploy quantitative strategies at scale with institutional-grade reliability and performance.
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
						<div key={index} className="group p-6 bg-card border border-border rounded-lg transition-colors duration-300 hover:bg-card">
							<h4 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">{item.title}</h4>
							<p className="text-base md:text-lg text-foreground/90 leading-relaxed">{item.description}</p>
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