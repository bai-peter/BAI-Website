
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
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center">Contact</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="text-center">
              <p className="text-xl text-muted-foreground">
                team@baifunds.com for inquiries
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Community;
