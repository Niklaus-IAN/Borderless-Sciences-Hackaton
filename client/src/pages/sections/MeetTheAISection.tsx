import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MeetTheAISection = (): JSX.Element => {
  // Data for the audience cards
  const audienceCards = [
    {
      badgeText: "For Alternative Medicine Founders",
      content: `Borderless gives you the tools to validate your ingredients, generate scientific reports, and lock your IP into smart contracts. Launch faster, stay compliant, and outsmart the competition.`,
    },
    {
      badgeText: "For AI Builders & Curious Nerds",
      content: `This is what agent-based AI looks like in the wild. Borderless is an AI system solving complex, real-world problems with data, context, and reasoning. Tweak it. Test it. Or just watch it work.`,
    },
    {
      badgeText: "For Researchers & Scientists",
      content: `Less searching. More discovery. Borderless maps plant compounds to research, flags toxins in herbal formulas, links ingredients to real treatments, and backs your practice with science.`,
    },
    {
      badgeText: "For Natural Medicine Practitioners",
      content: `Turn traditional knowledge into verified science. Borderless reveals the compounds in your herbs, flags risks, and supports your healing with real data, so every remedy comes with lab-grade confidence.`,
    },
  ];

  return (
    <section className="relative w-full py-16 bg-black">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Curved yellow banner with title */}
        <div className="relative mb-12">
          <div 
            className="relative bg-[#e8e4a6] rounded-3xl px-8 py-6 transform -rotate-2 shadow-lg"
            style={{
              clipPath: 'polygon(0 20%, 15% 0%, 85% 0%, 100% 20%, 100% 80%, 85% 100%, 15% 100%, 0 80%)'
            }}
          >
            <h2 className="text-4xl font-bold text-[#07130e] text-center leading-tight">
              Meet the AI Revolutionizing<br />Herbal Research
            </h2>
          </div>
        </div>

        {/* 2x2 Grid of green cards */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {audienceCards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >
              {/* White badge header */}
              <div className="bg-white text-[#07130e] px-6 py-3 rounded-2xl shadow-lg z-10 relative -mb-4 mx-auto">
                <p className="text-sm font-medium text-center whitespace-nowrap">
                  {card.badgeText}
                </p>
              </div>
              
              {/* Green card body */}
              <Card className="w-full bg-[#0e7b5d] rounded-2xl border-none pt-8 pb-6 px-6 shadow-lg">
                <CardContent className="p-0 text-center">
                  <p className="text-white text-sm leading-relaxed">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center">
          <Button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white px-8 py-3 rounded-2xl font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
