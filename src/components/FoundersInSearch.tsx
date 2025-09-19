import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const teamMembers = [
    {
      name: "Peter Bai",
      role: "Founder & Managing Partner",
      description: "Leads firm strategy, capital formation, and portfolio oversight. Experience across macro trading at a Canadian pension plan, equity markets at a national exchange, venture co-investments, and private buyout search—bringing institutional structuring and behavioral market insights to BAI Awan Investments.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedinUrl: "https://www.linkedin.com/in/peter-bai/"
    },
    {
      name: "Muhammad Awan", 
      role: "Head of Systems Engineering",
      description: "Architects the research and execution stack. Background includes founding ML engineering at a venture-backed AI startup, industrial ML systems for nondestructive testing, and autonomous systems research—building scalable, low-latency infrastructure for signal generation and execution.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedinUrl: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca"
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      description: "Drives sector research and microstructure insights. Experience across electronic trading (cash equities) and early-stage technology investing—translating domain context into systematic hypotheses, factor design, and risk-aware signal validation.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedinUrl: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca"
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      description: "Builds LP relationships and strategic partnerships. Background in equity markets and communications leadership—focused on transparent reporting, ecosystem partnerships, and long-horizon alignment with capital providers.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedinUrl: "https://www.linkedin.com/in/fzou26/?originalSubdomain=ca"
    }
  ];

  return (
    <section id="team" className={cn('py-20 md:py-32 bg-card', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 text-center">Our Team</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center text-muted-foreground">
              Research-first approach combining deep financial expertise with cutting-edge technology
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={150 + index * 100}>
              <Card className="border border-border h-full bg-background">
                <CardContent className="p-8 text-center">
                   <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                     <img 
                       src={member.image} 
                       alt={member.name}
                       className="w-24 h-24 object-contain opacity-80"
                     />
                   </div>
                   <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                  {"linkedinUrl" in member && (
                    <div className="mt-6">
                      <a
                        href={(member as any).linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline hover:text-foreground"
                      >
                        View LinkedIn
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
