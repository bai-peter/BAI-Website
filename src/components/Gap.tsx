import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {
  const strategies = [
    {
      title: "Multi-Agent Research",
      description: "Specialized AI agents analyze macro, sector, and stock-level opportunities systematically",
      details: "Coordinated team of AI agents each focused on specific analysis domains for comprehensive market coverage"
    },
    {
      title: "Systematic Signal Integration", 
      description: "Multi-lens analysis combining fundamental, technical, sentiment, and behavioral signals",
      details: "Advanced signal fusion algorithms that weight and combine diverse market signals for robust decision making"
    },
    {
      title: "Adaptive Learning",
      description: "Continuous model updates and performance feedback loops for evolving market conditions",
      details: "AI agents that learn from market feedback and adapt strategies as market regimes change"
    }
  ];

  const infrastructure = [
    {
      title: "Cloud-Native Architecture",
      icon: "☁️"
    },
    {
      title: "Real-Time Data Integration",
      icon: "📊"
    },
    {
      title: "Containerized AI Agents", 
      icon: "🤖"
    },
    {
      title: "Scalable Database Design",
      icon: "🗄️"
    }
  ];

  return (
    <section id="strategy" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center text-foreground text-balance">
              Our Investment Approach
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-large text-center text-foreground/90 mb-12 text-balance font-medium">
              Multi-agent AI research system with systematic signal integration and adaptive learning capabilities
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="card-interactive h-full relative z-20" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-bai-primary rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{strategy.title}</h3>
                  <p className="text-readable mb-4 flex-grow">{strategy.description}</p>
                  <p className="text-small text-muted-foreground">{strategy.details}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="bg-card border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Technical Infrastructure</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="group text-center p-6 bg-card rounded-lg transition-colors duration-300 h-full flex flex-col justify-center relative z-20">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <p className="text-sm text-muted-foreground font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Gap;