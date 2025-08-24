import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CommunitySection = (): JSX.Element => {
  // Data for community cards to enable mapping
  const communityCards = [
    {
      icon: "/figmaAssets/message.svg",
      iconAlt: "Message",
      title: "Join the conversation on\nDiscord or Telegram",
      description:
        "Connect with herbal scientists,\nhealers, and techies around the\nworld. Ask questions, share findings,\nand get updates straight from the\ncore team.",
    },
    {
      icon: "/figmaAssets/data-icon.svg",
      iconAlt: "Data icon",
      title: "Contribute to DeSci - open,\ndecentralized, and verifiable",
      description:
        "Submit research, propose\nimprovements, or validate studies.\nYour contributions fuel an open-data\necosystem owned by the community,\nnot gatekeepers.",
    },
    {
      icon: null, // Using background image instead
      iconAlt: "Partners",
      backgroundImage: "bg-[url(/figmaAssets/vector.svg)]",
      title: "Explore our partners and\ncontributors powering the mission",
      description:
        "We collaborate with researchers, labs, and builders who believe in transparency and plant-powered progress. See who's already building with us.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#07130e] leading-tight mb-6">
            Community & Open Science
          </h2>
          
          <p className="text-lg text-[#4b5a56] max-w-3xl mx-auto leading-relaxed">
            We're building an open science ecosystem where herbal researchers, 
            traditional medicine practitioners, and citizen scientists unite. 
            As a part of the Borderless Science DAO, you can contribute findings, 
            validate data, and shape the future of botanical research.
          </p>
        </div>

        {/* Subtitle Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-semibold text-[#07130e] mb-4">
            Borderless isn't just a tool, it's a movement
          </h3>
          
          <p className="text-lg text-[#4b5a56] max-w-3xl mx-auto leading-relaxed">
            Let's make science transparent, inclusive, and truly borderless.
          </p>
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communityCards.map((card, index) => (
            <Card
              key={`community-card-${index}`}
              className="bg-[#daece3] border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {card.icon ? (
                    <img
                      className="w-8 h-8"
                      alt={card.iconAlt}
                      src={card.icon}
                    />
                  ) : (
                    <div
                      className={`w-8 h-6 ${card.backgroundImage} bg-[100%_100%]`}
                    />
                  )}
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#07130e] leading-tight">
                    {card.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h4>

                  <p className="text-[#4b5a56] leading-relaxed text-sm">
                    {card.description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.description.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white px-8 py-4 rounded-2xl font-medium transition-colors duration-200 shadow-lg">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};
