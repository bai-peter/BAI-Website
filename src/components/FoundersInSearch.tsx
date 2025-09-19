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
        "Experience across public and private markets. Worked on the Macro Trading Desk at University Pension Plan Ontario covering foreign exchange, equity total return swaps, and repurchase agreements within a multi‑billion dollar portfolio. Previously a quantitative analyst within Equity Markets at TMX Group focused on trading infrastructure and market operations. Also worked in venture capital at HCS Capital on financial technology and insurance technology investments. Leads strategy, macro overlay, and limited partner relationships.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      description:
        "Founding machine learning engineer at Boardy AI, building production systems for large‑scale artificial intelligence applications. Developed machine learning pipelines at UTEX Scientific Instruments. Contributed to perception and path‑planning systems with WATonomous and the MIT‑PITT‑RW autonomous racing program. Leads real‑time modeling, data pipelines, and execution reliability for the platform.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      description:
        "Quantitative analyst in Electronic Trading for cash equities at BMO Capital Markets. Previously a venture capital analyst at Render Capital evaluating early‑stage technology investments. Combines market microstructure research with thematic industry analysis to inform signal design and portfolio construction.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      description:
        "Quantitative analyst within Equity Markets at TMX Group with focus on Canadian market structure and product initiatives. Leads limited partner relationships, strategic partnerships, and capital formation to scale systematic strategies.",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto items-stretch">
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
