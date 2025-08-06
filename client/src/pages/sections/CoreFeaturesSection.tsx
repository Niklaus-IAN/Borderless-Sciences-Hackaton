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

      <div className="relative w-full max-w-[1000px] mx-auto">
        {/* Tab Navigation - Curved tabs at top exactly like design */}
        <Tabs defaultValue="toxicity-checks" className="w-full">
          <div className="relative">
            {/* Curved tab buttons */}
            <TabsList className="absolute top-0 left-0 right-0 z-20 flex justify-center bg-transparent border-none h-auto gap-0">
              <TabsTrigger
                value="toxicity-checks"
                className="relative w-[235px] h-[100px] bg-[#e8e4a6] hover:bg-[#e8e4a6]/90 data-[state=active]:bg-[#e8e4a6] border-none shadow-lg text-[#575936] text-sm font-medium"
                style={{
                  borderRadius: '20px 20px 0 0',
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'
                }}
              >
                <div className="text-center leading-tight">
                  Toxicity &<br />Deficiency Checks
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="compound-analysis"
                className="relative w-[235px] h-[100px] bg-[#c4d4b0] hover:bg-[#c4d4b0]/90 data-[state=active]:bg-[#c4d4b0] border-none shadow-lg text-[#4b533e] text-sm font-medium -ml-[15px]"
                style={{
                  borderRadius: '20px 20px 0 0',
                  clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }}
              >
                <div className="text-center leading-tight">
                  Compound<br />Analysis
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="pharma-comparison"
                className="relative w-[235px] h-[100px] bg-[#b8c5c1] hover:bg-[#b8c5c1]/90 data-[state=active]:bg-[#b8c5c1] border-none shadow-lg text-[#4c534f] text-sm font-medium -ml-[15px]"
                style={{
                  borderRadius: '20px 20px 0 0',
                  clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }}
              >
                <div className="text-center leading-tight">
                  Pharma<br />Comparison
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="on-chain-logging"
                className="relative w-[235px] h-[100px] bg-[#d4c4a0] hover:bg-[#d4c4a0]/90 data-[state=active]:bg-[#d4c4a0] border-none shadow-lg text-[#594c36] text-sm font-medium -ml-[15px]"
                style={{
                  borderRadius: '20px 20px 0 0',
                  clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)'
                }}
              >
                <div className="text-center leading-tight">
                  On-Chain Logging<br />(SEI Blockchain)
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Main content area */}
            <div className="relative mt-[80px]">
              {features.map((feature) => (
                <TabsContent
                  key={feature.id}
                  value={feature.id}
                  className="w-full h-[480px] m-0"
                >
                  <div
                    className="w-full h-full relative rounded-b-3xl overflow-hidden"
                    style={{
                      backgroundImage: `url(/figmaAssets/rectangle-${
                        feature.id === "compound-analysis"
                          ? "35"
                          : feature.id === "pharma-comparison"
                            ? "36"
                            : feature.id === "on-chain-logging"
                              ? "44"
                              : "34"
                      }.svg)`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                    {/* Content layout matching the design */}
                    <div className="absolute top-16 left-16 right-16 bottom-16 flex items-center justify-between">
                      {/* Left side content */}
                      <div className="flex-1 max-w-[400px] space-y-6">
                        <h3 
                          className="text-5xl font-bold leading-tight"
                          style={{ 
                            color: feature.color,
                            fontFamily: "'Maison Neue', sans-serif"
                          }}
                        >
                          {feature.heading.includes('&') ? (
                            <>
                              {feature.heading.split('&')[0].trim()}
                              <br />
                              & {feature.heading.split('&')[1].trim()}
                            </>
                          ) : feature.heading.includes('and') ? (
                            <>
                              {feature.heading.split('and')[0].trim()}
                              <br />
                              and {feature.heading.split('and')[1].trim()}
                            </>
                          ) : (
                            feature.heading
                          )}
                        </h3>
                        
                        <p 
                          className="text-lg leading-relaxed max-w-[350px]"
                          style={{ color: feature.color }}
                        >
                          {feature.description.split("\n").map((line, i) => (
                            <span key={i}>
                              {line.trim()}
                              {i < feature.description.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                      
                      {/* Right side image */}
                      <div className="flex-shrink-0">
                        <img
                          className="w-[400px] h-[280px] object-cover rounded-2xl shadow-xl"
                          alt={`${feature.heading} illustration`}
                          src={feature.image}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
