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
      title: "Factor Alpha",
      description: "Long-term equity factor premiums leveraging value, quality, and momentum signals",
      details: "Systematic exposure to well-documented market factors with enhanced alpha generation"
    },
    {
      title: "Gap Mean-Reversion", 
      description: "Intraday gap-filling opportunities through systematic pattern recognition",
      details: "High-frequency strategies targeting price inefficiencies in opening gaps"
    },
    {
      title: "Behavioral Alpha",
      description: "Exploiting market inefficiencies through behavioral finance insights",
      details: "AI-driven detection of cognitive biases and sentiment-driven mispricings"
    }
  ];

  const infrastructure = [
    {
      title: "Colocated Smart Order Routers",
      icon: "⚡"
    },
    {
      title: "Web-scraped + Paid Feeds + Tick Data",
      icon: "📊"
    },
    {
      title: "GPU + Containerized ML Pipelines", 
      icon: "🔬"
    },
    {
      title: "Real-time VaR & Scenario Engines",
      icon: "🛡️"
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
              Three systematic strategies powered by behavioral insights and advanced infrastructure
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