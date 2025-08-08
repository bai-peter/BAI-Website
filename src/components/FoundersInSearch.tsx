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
      role: "CIO / LP Relations",
      description: "Macro overlay and institutional structuring. Expertise in portfolio construction and institutional capital management.",
      image: "/lovable-uploads/BAI Emblem.png"
    },
    {
      name: "Muhammad Awan", 
      role: "Head of Research / CTO",
      description: "ML, AI, and signal generation. Leading systematic strategy development and technology infrastructure.",
      image: "/lovable-uploads/BAI Emblem.png"
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
