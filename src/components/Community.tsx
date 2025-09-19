
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center text-foreground text-balance">Contact</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="text-center">
              <div className="bg-card border border-border p-8 rounded-lg inline-block">
                <div className="w-16 h-16 bg-bai-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-bai-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Get In Touch</h3>
                <p className="text-large text-foreground/90 mb-6 text-balance font-medium">
                  Ready to learn more about our multi-agent AI research system?
                </p>
                <a 
                  href="mailto:team@baifunds.com"
                  className="btn-primary text-lg px-8 py-4 focus-visible"
                >
                  team@baifunds.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Community;
