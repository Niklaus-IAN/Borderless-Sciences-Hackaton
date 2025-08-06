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
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[1090px] mx-auto px-6">
      <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] text-center tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
        Core Features Built for{" "}
        <span className="font-brand-h2 [font-style:var(--brand-h2-font-style)] font-[number:var(--brand-h2-font-weight)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] text-[length:var(--brand-h2-font-size)]">
          Plant
        </span>{" "}
        Intelligence
      </h2>

      <Tabs defaultValue="compound-analysis" className="w-full">
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
                    {/* Background styling would be applied here based on the feature */}
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
                      {/* Tab title at the top */}
                      <div
                        className={`absolute top-[52px] ${feature.position} font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[${feature.color}] text-[length:var(--brand-body-med-font-size)] text-center tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]`}
                      >
                        <span>
                          {feature.title.split(" ").map((word, i) => (
                            <span key={i}>
                              {word}
                              {i < feature.title.split(" ").length - 1 &&
                                i % 2 === 1 && <br />}
                              {i < feature.title.split(" ").length - 1 &&
                                i % 2 === 0 &&
                                " "}
                            </span>
                          ))}
                        </span>
                      </div>

                      {/* Content area */}
                      <div className="absolute inset-0 flex items-center justify-between px-16 py-20">
                        <div className="flex flex-col w-1/3 items-start gap-6">
                          <div
                            className={`relative w-fit [font-family:'Maison_Neue-Bold',Helvetica] font-bold text-[${feature.color}] text-3xl tracking-[0] leading-[normal]`}
                            dangerouslySetInnerHTML={{
                              __html: feature.heading.replace(" ", " <br/>"),
                            }}
                          />

                          <div
                            className={`relative font-brand-body font-[number:var(--brand-body-font-weight)] text-[${feature.color}] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]`}
                          >
                            <span>
                              {feature.description.split("\n").map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i <
                                    feature.description.split("\n").length -
                                      1 && <br />}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                        
                        <img
                          className="w-1/2 h-64 object-cover rounded-2xl"
                          alt={`${feature.heading} illustration`}
                          src={feature.image}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}

          {/* Tab navigation */}
          <TabsList className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent border border-gray-200 rounded-full">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-full px-4"
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
