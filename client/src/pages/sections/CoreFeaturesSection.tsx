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
                    {/* Background styling using the correct figma assets */}
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
                      {/* Tab title positioned at the curved top */}
                      <div
                        className="absolute w-[200px] text-center"
                        style={{
                          top: '30px',
                          left: feature.id === "toxicity-checks" ? '60px' : 
                               feature.id === "compound-analysis" ? '280px' :
                               feature.id === "pharma-comparison" ? '500px' : '720px',
                          color: feature.color,
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '1.2'
                        }}
                      >
                        {feature.title.split("(")[0].trim().split(" ").map((word, i, arr) => (
                          <span key={i}>
                            {word}
                            {i < arr.length - 1 && (i + 1) % 2 === 0 && <br />}
                            {i < arr.length - 1 && (i + 1) % 2 !== 0 && " "}
                          </span>
                        ))}
                      </div>

                      {/* Main content area with proper alignment */}
                      <div className="absolute top-[120px] left-[60px] right-[60px] bottom-[60px] flex items-center justify-between">
                        {/* Left content */}
                        <div className="flex flex-col max-w-[400px] space-y-6">
                          <h3 
                            className="text-3xl font-bold leading-tight"
                            style={{ color: feature.color }}
                          >
                            {feature.heading.split(" ").map((word, i, arr) => (
                              <span key={i}>
                                {word}
                                {word === "&" || word === "and" ? <br /> : 
                                 i < arr.length - 1 && (arr[i + 1] === "&" || arr[i + 1] === "and") ? " " :
                                 i < arr.length - 1 ? " " : ""}
                              </span>
                            ))}
                          </h3>
                          
                          <p 
                            className="text-base leading-relaxed"
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
                        
                        {/* Right image */}
                        <div className="flex-shrink-0 ml-8">
                          <img
                            className="w-[300px] h-[200px] object-cover rounded-xl"
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

          {/* Curved tabs integrated into the design */}
          <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
            <TabsList className="flex bg-transparent border-none h-[80px] gap-0 pointer-events-auto">
              {features.map((feature, index) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="relative bg-transparent border-none text-transparent hover:text-transparent data-[state=active]:text-transparent px-[90px] py-6 transition-all duration-200"
                  style={{
                    marginLeft: index === 0 ? '0px' : '-20px',
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-20 data-[state=active]:opacity-30 transition-opacity"
                    style={{ backgroundColor: feature.color }}
                  />
                  <span className="sr-only">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
