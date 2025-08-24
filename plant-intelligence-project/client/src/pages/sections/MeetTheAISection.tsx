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
    // <section className="relative w-full py-16">
    <section className="relative w-full py-20 bg-[url('/figmaAssets/rectangle-32.svg')] bg-no-repeat">  
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Background image */}
        {/* <img
          className="absolute inset-0 w-full h-full object-cover -z-10"
          alt="Background"
          src="/figmaAssets/rectangle-32.svg"
        /> */}
        {/* Main layout with left text and right cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left side - Curved yellow banner with text */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            {/* <div 
              className="relative bg-[#e8e4a6] rounded-3xl px-8 py-12 shadow-lg mb-8"
              style={{
                clipPath: 'polygon(0 15%, 10% 0%, 90% 0%, 100% 15%, 100% 85%, 90% 100%, 10% 100%, 0 85%)',
                transform: 'rotate(-2deg)'
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#07130e] leading-tight">
                Meet the AI Revolutionizing Herbal Research
              </h2>
            </div> */}

            <h2 className="[font-family:'Maison_Neue-Regular',Helvetica] font-normal text-4xl md:text-6xl lg:text-[450px] tracking-[0] leading-[normal] mb-8">
              <span className="text-[#07130e]">
              Meet the AI Revolutionizing
                <br />
              </span>
              <span className="[font-family:'Maison_Neue-LightItalic',Helvetica] font-light italic text-[#07130e]">
              Herbal
              </span>
              <span className="text-[#07130e]"> Research.</span>
            </h2>
            
            {/* Additional descriptive text */}
            <div className="space-y-4 ml-4">
              <p 
                className="text-lg leading-relaxed text-black"
                style={{ 
                  color: '#07130e',
                  fontFamily: 'var(--brand-body-font-family)',
                  fontSize: 'var(--brand-body-font-size)',
                  fontWeight: 'var(--brand-body-font-weight)',
                  lineHeight: 'var(--brand-body-line-height)'
                }}
              >
                Borderless Science AI is a smart agent built to decode the science behind herbal medicine. 
                It identifies a plant's active compounds, evaluates toxicity, and matches ingredients to 
                scientifically backed treatments, all in seconds.
              </p>
              <p 
                className="text-base leading-relaxed text-black opacity-90"
                style={{ 
                  color: '#07130e',
                  fontFamily: 'var(--brand-body-font-family)',
                  fontSize: 'var(--brand-body-font-size)',
                  fontWeight: 'var(--brand-body-font-weight)',
                  lineHeight: 'var(--brand-body-line-height)'
                }}
              >
                Powered by advanced AI and secured with blockchain, it bridges ancient knowledge with 
                cutting-edge science. In a world full of guesswork, Borderless brings clarity, safety, 
                and proof to natural medicine.
              </p>
            </div>
          </div>

          {/* Right side - 2x2 Grid of green cards */}
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceCards.map((card, index) => (
                <div
                  key={index}
                  className="relative flex flex-col"
                >
                  {/* White badge header */}
                  <div className="bg-white text-[#07130e] px-4 py-2 rounded-2xl shadow-lg z-10 relative -mb-3 mx-auto max-w-fit">
                    <p className="text-xs font-medium text-center whitespace-nowrap">
                      {card.badgeText}
                    </p>
                  </div>
                  
                  {/* Green card body */}
                  <Card className="w-full bg-[#0e7b5d] rounded-2xl border-none pt-6 pb-4 px-4 shadow-lg h-48">
                    <CardContent className="p-0 text-center h-full flex items-center justify-center">
                      <p className="text-white text-xs leading-relaxed">
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Get Started Button */}
            <div className="flex justify-center mt-8">
              <Button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white px-8 py-3 rounded-2xl font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
