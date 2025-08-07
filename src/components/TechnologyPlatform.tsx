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
      title: "Real-time Behavioral Modeling",
      description: "Advanced AI algorithms that detect cognitive biases and emotional reactions in market movements",
      icon: "🧠"
    },
    {
      title: "Cognitive Bias Detection",
      description: "Systematic identification of anchoring, confirmation bias, and herding behaviors across market participants",
      icon: "🎯"
    },
    {
      title: "Sentiment Analysis & Prediction",
      description: "Natural language processing of news, social media, and earnings calls to predict sentiment shifts",
      icon: "📊"
    },
    {
      title: "Automated Signal Generation",
      description: "Machine learning pipelines that convert behavioral insights into actionable trading signals",
      icon: "⚡"
    }
  ];

  const infrastructure = [
    {
      title: "GPU-powered Backtesting",
      description: "High-performance computing infrastructure for rapid strategy validation and optimization"
    },
    {
      title: "Containerized ML Pipelines",
      description: "Scalable, modular architecture for deploying and managing machine learning models"
    },
    {
      title: "Colocated Execution Systems", 
      description: "Ultra-low latency order routing and execution infrastructure"
    },
    {
      title: "Low-latency Signal Ingestion",
      description: "Real-time data processing from multiple sources including market data, news, and alternative datasets"
    }
  ];

  return (
    <section id="technology" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center">
              BAI Tech Platform
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Proprietary technology infrastructure that powers our systematic investment strategies
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border border-border h-full bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{capability.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-bai-gold">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="bg-card border border-border p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Infrastructure Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="p-4 border border-border/50">
                  <h4 className="text-lg font-medium mb-2 text-bai-navy">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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