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
        "Peter is an Ivey HBA student at Western University and the architect of BAI's multi-agent AI research system. He has worked as a quant developer on the Macro Trading Desk at University Pension Plan Ontario, covering FX, equity TRS, and repo within a $13 billion AUM portfolio. Previously, he was an Equity Markets quant at TMX Group, focused on trading infrastructure and technology. He also worked in venture capital at HCS Capital, focusing on fintech and insurtech co-investments.",
      image: "/assets/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      fullDescription:
        "Muhammad is a Computer Science student at the University of Waterloo and leads the technical implementation of BAI's multi-agent AI platform. He is a Founding Machine Learning Engineer at Boardy AI, where he builds production machine learning systems for digital human interaction. He has previously built machine learning pipelines at UTEX Scientific Instruments and contributed to autonomous vehicle perception at WATonomous and path planning at MIT-PITT-RW.",
      image: "/assets/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      fullDescription:
        "Josephina is pursuing a dual Computer Science and Business Administration program at the University of Waterloo and Wilfrid Laurier University and is a Schulich Leader Scholar. She leads BAI's industry research and sector analysis, working as a quantitative analyst on BMO Capital Markets' Electronic Cash Equities desk, developing models for electronic trading. She also worked as a venture capital analyst at Render Capital, evaluating early-stage technology investments.",
      image: "/assets/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      fullDescription:
        "Frank is a Business student at Huron University (Western) with Ivey Advanced Entry Opportunity status and a varsity rower. He leads BAI's capital and partnerships strategy, having worked in Equity Markets at TMX Group as a quantitative analyst, conducting market structure research and focusing on product innovation and trading rules. He also helped lead communications and partnerships for student investment organizations at Western University.",
      image: "/assets/BAI Emblem.png",
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
              Multi-agent AI research team combining quantitative finance expertise with advanced machine learning systems
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
