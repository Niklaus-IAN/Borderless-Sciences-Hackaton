import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

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
    <section
      className="relative w-full py-16 bg-no-repeat bg-center px-[140px] mt-20"
      style={{
        backgroundImage: "url('/figmaAssets/rectangle-311.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main layout with left text and right cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side - Curved yellow banner with text */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <div className="relative mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#07130e] leading-normal">
                Meet the AI Revolutionizing{" "}
                <span className="italic font-light">Herbal</span> Research
              </h2>
            </div>

            {/* Additional descriptive text */}
            <div className="pr-40 mt-12">
              <p
                className="text-lg text-[#07130E]/70"
                style={{
                  fontFamily: "var(--brand-body-font-family)",
                  fontSize: "var(--brand-body-font-size)",
                  lineHeight: "var(--brand-body-line-height)",
                }}
              >
                Borderless Science AI is a smart agent built to decode the
                science behind herbal medicine. It identifies a plant's active
                compounds, evaluates toxicity, and matches ingredients to
                scientifically backed treatments, all in seconds. Powered by
                advanced AI and secured with blockchain, it bridges ancient
                knowledge with cutting-edge science. In a world full of
                guesswork, Borderless brings clarity, safety, and proof to
                natural medicine.
              </p>
            </div>
          </div>

          {/* Right side - 2x2 Grid of green cards */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {audienceCards.map((card, index) => (
                <div
                  key={index}
                  className="relative flex flex-col"
                  style={{
                    fontFamily: "var(--brand-body-font-family)",
                  }}
                >
                  {/* White badge header */}
                  <div
                    className={`bg-white text-[#07130e] px-4 py-2 rounded-[200px] shadow-lg z-10 absolute top-10 ${
                      index === 0 || index === 2 ? "-left-16" : "-right-16"
                    } -mb-3 mx-auto max-w-fit h-[42px] flex items-center justify-center shadow-md`}
                  >
                    <p className="text-xs font-medium text-center whitespace-nowrap">
                      {card.badgeText}
                    </p>
                  </div>

                  {/* Green card body */}
                  <Card className="bg-[#052B21] rounded-2xl border-none pt-24 px-1 shadow-lg w-[250px] h-[320px]">
                    <CardContent className="text-center h-full flex items-center justify-center">
                      <p className="text-white/80 text-[14px]">
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center mt-10">
              <Link href="/chat">
                <Button className="bg-[#0e7b5d] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] text-white rounded-[16px] hover:bg-[#0a6a50]/70 transition-all w-[132px] h-[47px] flex items-center justify-center">
                  <span>Get Started</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
