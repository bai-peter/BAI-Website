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
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center">
              Our Investment Approach
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Multi-agent AI research system with systematic signal integration and adaptive learning capabilities
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {strategies.map((strategy, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border border-border h-full bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{strategy.title}</h3>
                  <p className="text-muted-foreground mb-4">{strategy.description}</p>
                  <p className="text-sm text-muted-foreground/80">{strategy.details}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="bg-card border border-border p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Infrastructure</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {infrastructure.map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
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