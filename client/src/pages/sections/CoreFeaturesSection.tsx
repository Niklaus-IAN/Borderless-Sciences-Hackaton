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
        {/* Tab navigation */}
        <TabsList className="flex justify-center gap-2 bg-transparent mb-8 h-12">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.id}
              value={feature.id}
              className="data-[state=active]:bg-[#0e7b5d] data-[state=active]:text-white bg-gray-100 text-gray-600 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {feature.title.split(' ').slice(0, 2).join(' ')}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative w-full min-h-[400px]">
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="w-full h-full m-0"
            >
              <Card className="w-full border-none shadow-none bg-gradient-to-r from-green-50 to-green-100 rounded-2xl overflow-hidden">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <h3 
                        className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight"
                        style={{ color: feature.color }}
                      >
                        {feature.heading}
                      </h3>
                      
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: feature.color }}
                      >
                        {feature.description.replace(/\n/g, ' ')}
                      </p>
                    </div>
                    
                    {/* Image */}
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                      <img
                        className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                        alt={`${feature.heading} illustration`}
                        src={feature.image}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};
