import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const CoreFeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: "compound-analysis",
      title: "Compound Analysis",
      heading: "Compound Analysis",
      description:
        "Get a clear picture of what's in your herbs. Borderless breaks down each plant's active compounds by type and percentage, no lab needed.",
      image: "/figmaAssets/image.png",
      color: "#4b533e",
      position: "left-1/4",
    },
    {
      id: "pharma-comparison",
      title: "Pharma Comparison",
      heading: "Pharma Comparison",
      description:
        "See how your plants stack up to pharmaceuticals. Match natural ingredients to lab-made drugs to unlock new possibilities or prove ancient ones.",
      image: "/figmaAssets/image-1.png",
      color: "#4c534f",
      position: "left-1/2",
    },
    {
      id: "on-chain-logging",
      title: "On-Chain Logging (SEI Blockchain)",
      heading: "On-Chain Logging (SEI Blockchain)",
      description:
        "Science you can't fake.\nEvery analysis is logged on SEI \nfor transparency, proof of originality, \nand future IP claims.",
      image: "/figmaAssets/image-2.png",
      color: "#594c36",
      position: "left-3/4",
    },
    {
      id: "toxicity-checks",
      title: "Toxicity & Deficiency Checks",
      heading: "Toxicity & Deficiency Checks",
      description:
        "Spot the red flags before anyone takes a dose. AI models detect harmful levels and missing nutrients, giving your remedies a safety check in seconds.",
      image: "/figmaAssets/image-3.png",
      color: "#575936",
      position: "left-16",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[1090px] mx-auto px-6 pt-8">
      <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] text-center tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
        Core Features Built for{" "}
        <span className="font-brand-h2 [font-style:var(--brand-h2-font-style)] font-[number:var(--brand-h2-font-weight)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] text-[length:var(--brand-h2-font-size)]">
          Plant
        </span>{" "}
        Intelligence
      </h2>

      <Tabs defaultValue="compound-analysis" className="w-full relative">
        <div className="relative w-full h-[568px] rounded-3xl overflow-hidden">
          {/* Background container for all tabs */}
          <div className="absolute inset-0">
            {features.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="absolute inset-0 w-full h-full m-0"
              >
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}20 100%)`,
                  }}
                >
                  {/* Content Layout */}
                  <div className="flex items-center justify-between h-full px-12 py-8">
                    {/* Left side - Text content */}
                    <div className="flex-1 max-w-lg space-y-6">
                      <h3 
                        className="text-4xl font-bold leading-tight whitespace-pre-line"
                        style={{ color: feature.color }}
                      >
                        {feature.heading.replace(/(\w+)\s+(&|and)/g, '$1\n$2')}
                      </h3>
                      
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: feature.color }}
                      >
                        {feature.description.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < feature.description.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="flex-shrink-0">
                      <img
                        className="w-[400px] h-[300px] object-cover rounded-2xl shadow-xl"
                        alt={`${feature.heading} illustration`}
                        src={feature.image}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>

          {/* Tab Navigation - Styled as curved tabs at the top */}
          <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
            <TabsList className="flex bg-transparent h-20 gap-1 px-8">
              {features.map((feature, index) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="relative px-6 py-3 text-sm font-medium transition-all duration-300 border-0 bg-white shadow-lg hover:shadow-xl min-w-[180px] text-center h-16 flex items-center justify-center data-[state=active]:z-30"
                  style={{
                    color: feature.color,
                    borderRadius: '20px 20px 20px 20px',
                    marginTop: index % 2 === 0 ? '0px' : '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="relative z-20 leading-tight">
                    {feature.title.includes('(') 
                      ? feature.title.split('(')[0].trim()
                      : feature.title.split(' ').length > 2
                        ? feature.title.split(' ').slice(0, 2).join(' ')
                        : feature.title
                    }
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
