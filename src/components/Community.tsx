
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('section-spacing bg-card', className)}>
      {/* Mellow geometric background */}
      {/* Background chart is rendered globally in Index.tsx */}
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto content-spacing">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center text-foreground text-balance">Connect With Us</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="text-center">
              <div className="bg-card border border-border p-12 rounded-2xl inline-block shadow-lg hover-lift relative z-20" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="w-20 h-20 bg-bai-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-2xl text-muted-foreground mb-8 text-balance font-normal">
                  Interested in learning more about our quantitative research and technology capabilities?
                </p>
                <a 
                  href="mailto:team@baifunds.com"
                  className="btn-primary text-xl px-10 py-5 focus-visible hover-lift"
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
