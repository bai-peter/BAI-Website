import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Peter Bai",
      role: "Founder & Managing Partner",
      fullDescription:
        "Peter is an Ivey HBA student at Western University. He previously worked as a quant developer on the Macro Trading Desk at University Pension Plan Ontario (FX, Equity TRS, Repo) and as an Equity Markets quant at TMX Group. He also worked in venture capital at HCS Capital focusing on insurtech and fintech co-investments. At BAI Funds, Peter leads strategy, macro overlay, and LP relationships.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      fullDescription:
        "Muhammad studies Computer Science at the University of Waterloo. He is a Founding Machine Learning Engineer at Boardy AI, building production ML systems; previously he built ML pipelines at UTEX Scientific Instruments and contributed to perception and path-planning with WATonomous and MIT-PITT-RW. At BAI Funds, Muhammad leads real-time modeling, data pipelines, and execution reliability across the platform.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      fullDescription:
        "Josephina is a Schulich Leader Scholar pursuing a dual CS/BBA program at the University of Waterloo and Wilfrid Laurier University. She worked as a quantitative analyst on BMO Capital Markets’ Electronic Cash Equities desk and as a venture capital analyst at Render Capital. At BAI Funds, Josephina drives industry research, combining microstructure insight with thematic analysis to inform signal design.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      fullDescription:
        "Frank studies Business at Huron University (Western) with Ivey AEO status and is a varsity rower. He worked in Equity Markets at TMX Group as a quantitative analyst focused on product and market-structure research. At BAI Funds, Frank leads LP relationships, strategic partnerships, and capital formation to scale systematic strategies.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/fzou26/?originalSubdomain=ca",
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={150 + index * 100}>
              <Card 
                className={cn(
                  "border border-border bg-background cursor-pointer transition-all duration-300 hover:shadow-lg",
                  expandedCard === index ? "shadow-xl" : "hover:shadow-md"
                )}
                onClick={() => toggleExpanded(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 object-contain opacity-80"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground font-medium mb-4 text-sm">{member.role}</p>
                  
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-foreground/80 hover:text-foreground underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {expandedCard === index ? "Click to close" : "Learn More"}
                    </span>
                  </div>

                  {expandedCard === index && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.fullDescription}
                      </p>
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
