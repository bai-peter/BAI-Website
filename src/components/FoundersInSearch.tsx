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
        "Worked on the Macro Trading Desk at University Pension Plan Ontario, covering FX, equity TRS, and repo within a ~$13B AUM portfolio. Previously in Equity Markets at TMX Group as an Automations Engineer (Quant Developer) within the Market Operations team, focused on trading infrastructure, technology, and equities product support. Also worked in Venture Capital at HCS Capital, focusing on fintech and insurtech co-investments.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      description:
        "Founding Machine Learning Engineer at Boardy AI, a Toronto startup backed by $11M in funding, where he built pipelines for digital human interaction and large-scale AI deployment. Previously developed ML systems at UTEX Scientific Instruments and contributed to autonomous vehicle perception at WATonomous. At BAI Funds, leads the design of the data and model infrastructure to support continuous research and trading automation.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Industry Research",
      description:
        "Worked as a Quantitative Analyst in Electronic Cash Equities at BMO Capital Markets, developing models for electronic trading. Also spent time in Venture Capital at Render Capital, evaluating early-stage technology investments. With dual CS/BBA training at Waterloo and Laurier as a Schulich Leader Scholar, bridges rigorous technical analysis with thematic industry insights, shaping BAI's sector and industry research agenda.",
      image: "/lovable-uploads/BAI Emblem.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital & Partnerships",
      description:
        "Worked in Equity Markets at TMX Group as part of the Equity Product Design team, conducting market structure research as a Quant Analyst. Focused on product innovation, trading rules, and structural impacts on Canadian equities. At Western University, also helped lead communications and partnerships for student investment organizations. At BAI Funds, manages capital formation, investor partnerships, and external relationships, pairing market structure expertise with a growing institutional network.",
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
