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
      title: "Multi-Agent AI Research System",
      description: "Specialized AI agents working in coordinated teams, each focused on specific analysis domains from macro to stock selection",
      icon: "🤖"
    },
    {
      title: "Systematic Research Funnel",
      description: "Multi-layer analysis filtering opportunities from global macro regimes down to individual stock selection",
      icon: "🔍"
    },
    {
      title: "Multi-Lens Signal Integration",
      description: "Combines fundamental, technical, sentiment, and behavioral signals for comprehensive stock analysis",
      icon: "📊"
    },
    {
      title: "Continuous Learning & Adaptation",
      description: "AI agents that continuously learn from market feedback and adapt to changing market conditions",
      icon: "⚡"
    }
  ];

  const infrastructure = [
    {
      title: "Cloud-Native Architecture",
      description: "Modern React/TypeScript frontend with Node.js/TypeScript backend for scalability and reliability"
    },
    {
      title: "Real-Time Data Integration",
      description: "Market data APIs with intelligent caching and real-time price updates for US and Canadian equities"
    },
    {
      title: "Scalable Database Design", 
      description: "PostgreSQL with extensible schema designed for multiple asset classes and systematic data management"
    },
    {
      title: "Containerized Deployment",
      description: "Docker-based infrastructure ensuring consistent deployment and easy scaling across environments"
    }
  ];

  return (
    <section id="technology" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center text-foreground text-balance">
              BAI Tech Platform
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-large text-center text-foreground/90 mb-12 text-balance font-medium">
              Multi-agent AI research system that systematically analyzes global markets through specialized artificial intelligence agents
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
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Technical Infrastructure</h3>
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