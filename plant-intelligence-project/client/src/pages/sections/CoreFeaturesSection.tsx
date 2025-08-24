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
      {/* <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] text-center tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
        Core Features Built for{" "}
        <span className="font-brand-h2 [font-style:var(--brand-h2-font-style)] font-[number:var(--brand-h2-font-weight)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] text-[length:var(--brand-h2-font-size)]">
          Plant
        </span>{" "}
        Intelligence
      </h2> */}

      <h2 className="text-4xl md:text-4xl text-[#07130e] text-center leading-normal">
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
          Core Features Built for{" "}
          </span><br />
          <span className="[font-family:'Maison_Neue-BookItalic',Helvetica] italic">
          Plant
          </span>
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
            {" "}
            Intelligence
          </span>
          <br />
        </h2>

      <Tabs defaultValue="toxicity-checks" className="w-full">
        <div className="relative w-full h-[568px]">
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="absolute inset-0 w-full h-full m-0"
            >
              <Card className="w-full h-full border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative w-full h-[568px]">
                    <div
                      className="relative w-full h-[568px]"
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
                      }}
                    >
                      {/* Content positioned to align within curved container */}
                      <div className="absolute top-[120px] left-[80px] right-[80px] bottom-[80px] flex items-center justify-between">
                        <div className="flex flex-col max-w-[380px] items-start gap-6">
                          <h3
                            className="text-4xl font-bold leading-tight"
                            style={{ color: feature.color }}
                          >
                            {feature.heading.includes('&') ? (
                              <>
                                {feature.heading.split('&')[0].trim()}
                                <br />
                                & {feature.heading.split('&')[1].trim()}
                              </>
                            ) : (
                              feature.heading
                            )}
                          </h3>

                          <p
                            className="text-base leading-relaxed max-w-[350px]"
                            style={{ color: feature.color }}
                          >
                            {feature.description.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < feature.description.split("\n").length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                        
                        <div className="flex-shrink-0 ml-8">
                          <img
                            className="w-[320px] h-[220px] object-cover rounded-xl shadow-lg"
                            alt={`${feature.heading} illustration`}
                            src={feature.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}

          {/* Simple dot navigation */}
          <TabsList className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-2">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="w-8 h-8 rounded-full mx-1 p-0 data-[state=active]:bg-gray-600 data-[state=inactive]:bg-gray-300 border-none"
              >
                <span className="sr-only">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </section>
  );
};
