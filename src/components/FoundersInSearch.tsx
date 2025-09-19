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
      shortDescription: "Macro trading & VC experience",
      fullDescription:
        "Macro desk quant dev at UPP (FX, Equity TRS, Repo); ex-TMX Equity Markets quant; ex-VC at HCS (insurtech/fintech). Leads strategy, macro overlay, and LP relationships.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      shortDescription: "ML & systems engineering",
      fullDescription:
        "Founding ML Engineer at Boardy AI; built ML pipelines at UTEX; contributed to WATonomous perception and MIT-PITT-RW path planning. Leads real-time modeling, data pipelines, and execution reliability.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      shortDescription: "Trading & VC research",
      fullDescription:
        "BMO Capital Markets electronic cash equities quant; ex-VC at Render. Brings market microstructure and thematic research to inform signal design.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      shortDescription: "Capital formation & partnerships",
      fullDescription:
        "TMX Equity Markets quant. Leads LP relationships, strategic partnerships, and capital formation to scale strategies.",
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
                  <p className="text-muted-foreground font-medium mb-2 text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.shortDescription}</p>
                  
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
                      {expandedCard === index ? "Click to close" : "Click for details"}
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
