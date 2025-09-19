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
      description:
        "Former quant developer on the Macro desk at University Pension Plan (FX, Equity TRS, Repo), ex-Equity Markets quant at TMX Group, and prior venture investor at HCS Capital focusing on insurtech and fintech. Leads strategy, macro overlay, and institutional partnerships.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      description:
        "Systems, ML/AI, and signal engineering. Leads the design and reliability of our real-time modeling, data pipelines, and execution systems; background across applied ML, perception, and production-grade infrastructure.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      description:
        "Former quantitative analyst in Electronic Trading (Cash Equities) at BMO Capital Markets and prior venture investor at Render Capital. Brings industry microstructure insight and thematic research to inform signal development.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      description:
        "Former Equity Markets quant at TMX Group. Focused on limited partner relationships, strategic partnerships, and capital formation to scale systematic strategies.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/fzou26/?originalSubdomain=ca",
    },
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
                  {"linkedin" in member && (
                    <div className="mt-5">
                      <a
                        href={(member as any).linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-foreground/80 hover:text-foreground underline"
                      >
                        LinkedIn
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
