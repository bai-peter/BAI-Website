import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const baseMembers = [
    {
      name: "Peter Bai",
      role: "Head of Investments",
      degree: "B.A., Honors Business Administration (HBA)",
      logoPrimary: "/assets/Ivey Logo.jpg",
      fullDescription:
        "Peter leads investment research at BAI: setting the research roadmap, designing model specifications, integrating signals across regimes, and owning portfolio construction and risk oversight. He is an Ivey HBA student at Western University and the architect of BAI's multi‑agent AI research system. He previously worked as a quant developer on the Macro Trading Desk at University Pension Plan Ontario, covering FX, equity TRS, and repo within a $13B AUM portfolio. Earlier, he was an Equity Markets quant at TMX Group focused on trading infrastructure and technology, and he spent time in venture capital at HCS Capital evaluating fintech and insurtech co‑investments.",
      image: "/assets/Peter HeadShot.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "Head of Systems Engineering",
      degree: "B.Sc., Computer Science",
      logoPrimary: "/assets/Waterloo Logo.jpeg",
      fullDescription:
        "Muhammad leads systems engineering at BAI, owning the research platform: data ingestion and pipelines, training/evaluation infrastructure, orchestration, and reliable deployment of agents into production. He is a Computer Science student at the University of Waterloo and a Founding Machine Learning Engineer at Boardy AI, building production ML systems for digital human interaction. He previously built ML pipelines at UTEX Scientific Instruments and contributed to autonomous vehicle perception at WATonomous and path planning at MIT‑PITT‑RW.",
      image: "/assets/Muhammad HeadShot.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0/?originalSubdomain=ca",
    },
    {
      name: "Josephina Kim",
      role: "Head of Partnerships",
      degree: "B.Sc., Computer Science & B.B.A., Business Administration",
      logoPrimary: "/assets/Waterloo Logo.jpeg",
      logoSecondary: "/assets/Laurier Logo.png",
      fullDescription:
        "Josephina leads research partnerships and operations at BAI, managing data/vendor relationships, university and industry outreach, events, and the day‑to‑day processes that keep research execution running smoothly. She is pursuing a dual Computer Science and Business Administration program at the University of Waterloo and Wilfrid Laurier University and is a Schulich Leader Scholar. She leads BAI's industry research and sector analysis, having worked as a quantitative analyst on BMO Capital Markets' Electronic Cash Equities desk developing models for electronic trading, and as a venture capital analyst at Render Capital evaluating early‑stage technology investments.",
      image: "/assets/Josephina HeadShot.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/?originalSubdomain=ca",
    },
    {
      name: "Frank Zou",
      role: "Head of Capital Markets",
      degree: "B.MOS, Finance (Advanced Entry Opportunity to Ivey Business School)",
      logoPrimary: "/assets/Huron Logo.png",
      fullDescription:
        "Frank leads capital markets and execution at BAI, LP outreach and diligence, fundraising pipeline management, and broker/venue interfaces that translate research into efficient trading. He is a Business student at Huron University (Western) with Ivey Advanced Entry Opportunity status and a varsity rower. He has worked in Equity Markets at TMX Group as a quantitative analyst conducting market structure research and focusing on product innovation and trading rules, and he helped lead communications and partnerships for student investment organizations at Western University.",
      image: "/assets/Frank HeadShot.png",
      linkedin: "https://www.linkedin.com/in/fzou26/?originalSubdomain=ca",
    },
  ];

  const teamMembers: Array<{
    name: string;
    role: string;
    degree: string;
    logoPrimary: string;
    logoSecondary?: string;
    logoTertiary?: string;
    fullDescription: string;
    image: string;
    linkedin: string;
  }> = baseMembers as any;

  const toggleExpanded = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="team" className={cn('section-spacing bg-background', className)}>
      {/* Mellow geometric background */}
      {/* Background chart is rendered globally in Index.tsx */}
      
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto content-spacing">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center text-foreground">Our Team</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-center text-muted-foreground font-normal mb-12">
              Our team combines deep quantitative expertise with cutting-edge technology development, bringing together researchers, engineers, and traders to advance the frontiers of systematic investing.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <div className="text-3xl font-bold text-bai-primary mb-2">$13B+</div>
                <div className="text-sm text-muted-foreground">Combined AUM Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bai-primary mb-2">10</div>
                <div className="text-sm text-muted-foreground">Sectors Worked (Collective)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bai-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Research Publications (YTD)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bai-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Universities Represented</div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mx-auto max-w-6xl px-4">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={150 + index * 100} className="relative z-20">
				<Card 
                className={cn(
                  "card-interactive relative z-20",
                  expandedIndex === index ? "shadow-2xl bg-card" : ""
                )}
                style={{ backgroundColor: 'hsl(var(--card))' }}
                onClick={() => toggleExpanded(index)}
              >
                <CardContent className="p-6 text-left flex flex-col" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 bg-gradient-to-br from-bai-primary to-bai-accent rounded-full flex items-center justify-center transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground truncate text-center">{member.name}</h3>
                  <p className="text-muted-foreground font-medium mb-4 text-sm flex-grow truncate text-center">{member.role}</p>
                  
                  <div className="flex items-center justify-center gap-3 mt-auto mb-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-bai-primary hover:text-bai-primary-light underline font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {expandedIndex === index ? "Click to close" : "Learn More"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Dialog open={expandedIndex === index} onOpenChange={(open) => setExpandedIndex(open ? index : null)}>
                <DialogContent className="max-w-3xl bg-white border border-border p-6 sm:p-8 max-h-[80svh] overflow-y-auto">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-bai-primary to-bai-accent flex items-center justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full"
                        />
                      </div>
                      {member.logoPrimary && (
                        <img
                          src={member.logoPrimary}
                          alt="School logo"
                          className="w-28 sm:w-32 md:w-36 h-auto opacity-90 mx-auto"
                        />
                      )}
                      {member.logoSecondary && (
                        <img
                          src={member.logoSecondary}
                          alt="Additional school logo"
                          className="w-28 sm:w-32 md:w-36 h-auto opacity-90 mx-auto"
                        />
                      )}
                      {member.logoTertiary && (
                        <img
                          src={member.logoTertiary}
                          alt="Additional school logo"
                          className="w-28 sm:w-32 md:w-36 h-auto opacity-90 mx-auto"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-1">{member.role}</p>
                      {member.degree && (
                        <p className="text-sm text-muted-foreground mb-4">{member.degree}</p>
                      )}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {member.fullDescription}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
