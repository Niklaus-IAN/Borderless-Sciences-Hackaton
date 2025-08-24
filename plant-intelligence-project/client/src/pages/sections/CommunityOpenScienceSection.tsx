import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CommunityOpenScienceSection = (): JSX.Element => {
  const communityFeatures = [
    {
      title: "Open Research Database",
      description: "Access thousands of plant compounds and their verified effects. Every entry is peer-reviewed and blockchain-verified.",
      icon: "🔬"
    },
    {
      title: "Collaborative Analysis",
      description: "Join researchers worldwide in analyzing new plant specimens. Share findings and build on collective knowledge.",
      icon: "🤝"
    },
    {
      title: "Global Knowledge Exchange",
      description: "Connect traditional healers with modern scientists. Bridge ancient wisdom with contemporary research.",
      icon: "🌍"
    }
  ];

  return (
    <section className="w-full py-16 bg-[#f8fffe]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07130e] leading-tight mb-6">
            Community & Open Science
          </h2>
          <p className="text-lg text-[#4b5a56] max-w-3xl mx-auto leading-relaxed">
            Join a global movement of researchers, practitioners, and innovators working together 
            to unlock the secrets of plant medicine through open science and collaborative research.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#07130e] mb-4">
            Borderless isn't just a tool, it's a movement
          </h3>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-[#07130e] mb-4">
                  {feature.title}
                </h4>
                <p className="text-[#4b5a56] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-lg">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};
