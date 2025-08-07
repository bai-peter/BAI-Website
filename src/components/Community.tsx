
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', email);
    alert('Thank you for your inquiry. We will be in touch.');
    setEmail('');
  };

  return (
    <section id="contact" className={cn('py-20 md:py-32 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center">Contact</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center text-muted-foreground mb-12">
              For institutional inquiries and investment opportunities
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-3 px-6 font-medium hover:bg-accent/90 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    BAI is a private investment fund. Investment opportunities are available only to qualified institutional investors and accredited individuals.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    This website does not constitute an offer to sell or a solicitation of an offer to buy securities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Community;
