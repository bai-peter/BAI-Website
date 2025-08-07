import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative min-h-screen flex items-center bg-background', className)}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-bai-navy/20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-5xl">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={100}>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
                alt="BAI" 
                className="w-20 h-20 mx-auto mb-6"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-foreground leading-tight mb-8">
              Structure Breeds Signal
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              We use artificial intelligence to systematically detect and trade against human behavioral errors in the market
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <button className="bg-accent text-accent-foreground px-8 py-4 text-lg font-medium hover:bg-accent/90 transition-colors">
              Learn More
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
