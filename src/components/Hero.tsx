import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative w-full h-screen', className)}>
      <div className="absolute inset-0 -z-10 w-full h-screen">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'none' }}
        >
          <source src="/BAI Logo Office.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 max-w-5xl text-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo removed from hero section */}
            
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-tight mb-8 text-balance">
                Multi-Agent AI Research
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12 max-w-3xl mx-auto text-balance font-medium">
                Specialized AI agents working in coordinated teams to systematically analyze global markets from macro conditions to individual stock selection
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#thesis"
                  className="btn-primary text-lg px-8 py-4 focus-visible"
                >
                  Learn More
                </a>
                <a 
                  href="#contact"
                  className="btn-secondary text-lg px-8 py-4 focus-visible"
                >
                  Get In Touch
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
