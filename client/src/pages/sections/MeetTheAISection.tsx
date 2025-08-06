import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MeetTheAISection = (): JSX.Element => {
  // Data for the audience cards
  const audienceCards = [
    {
      position: "top-0 left-0",
      badgePosition: "top-[37px] left-0",
      badgeText: "For Alternative Medicine Founders",
      contentPosition: "top-[78px] left-36",
      content: `Borderless gives you 
                the tools to validate your 
                ingredients, generate 
                scientific reports, and 
                lock your IP into smart 
                contracts. Launch faster, 
                stay compliant, and 
                outsmart the competition.`,
    },
    {
      position: "top-0 left-[369px]",
      badgePosition: "top-[37px] left-[67px]",
      badgeText: "For AI Builders & Curious Nerds",
      contentPosition: "top-[78px] left-[35px]",
      content: `This is what agent-based 
                AI looks like in the wild.
                Borderless is an AI system 
                solving complex, real-world 
                problems with data, 
                context, and reasoning. 
                Tweak it. Test it. Or 
                just watch it work.`,
    },
    {
      position: "top-[336px] left-[369px]",
      badgePosition: "top-12 left-[67px]",
      badgeText: "For Natural Medicine Practitioners",
      contentPosition: "top-[84px] left-9",
      content: `Turn tradition Knowledge
                into verified science.
                Borderless reveals the 
                compounds in your herbs,
                flags risks, and supports 
                your healing with real data, 
                so every remedy comes 
                with lab-grade confidence.`,
    },
    {
      position: "top-[336px] left-10",
      badgePosition: "top-[43px] left-0",
      badgeText: "For Researchers & Scientists",
      contentPosition: "top-[84px] left-[91px]",
      content: `Less searching.
                More discovery.
                Borderless maps plant 
                compounds to research,
                flags toxins in herbal 
                formulas, links ingredients 
                to real treatments, and backs 
                your practice with science.`,
    },
  ];

  return (
    <section className="relative w-full py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl">
        <img
          className="absolute w-full h-[850px] -z-10"
          alt="Background"
          src="/figmaAssets/rectangle-31.svg"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-12">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start gap-10 pt-64">
            <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
              Meet the AI Revolutionizing <br />
              Herbal Research
            </h2>

            <p className="font-brand-body font-[number:var(--brand-body-font-weight)] text-[#07130e] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
              Borderless Science AI is a smart agent built to <br />
              decode the science behind herbal medicine. <br />
              It identifies a plant&apos;s active compounds, evaluates <br />
              toxicity, and matches ingredients to scientifically
              <br />
              backed treatments, all in seconds. Powered by <br />
              advanced AI and secured with blockchain, it bridges <br />
              ancient knowledge with cutting-edge science. In a <br />
              world full of guesswork, Borderless brings clarity, <br />
              safety, and proof to natural medicine.
            </p>
          </div>

          {/* Right side - Cards grid */}
          <div className="flex flex-col items-center gap-10 pt-8">
            <div className="relative w-full h-[656px]">
              {audienceCards.map((card, index) => (
                <div
                  key={index}
                  className={`absolute w-[350px] h-80 ${card.position}`}
                >
                  <div className="relative w-full h-full">
                    <Card className="absolute w-[250px] h-80 bg-[#052b21] rounded-2xl border-none">
                      <CardContent
                        className={`absolute ${card.contentPosition} p-0`}
                      >
                        <p className="font-brand-subtext font-[number:var(--brand-subtext-font-weight)] [font-style:var(--brand-subtext-font-style)] text-white text-[length:var(--brand-subtext-font-size)] text-center tracking-[var(--brand-subtext-letter-spacing)] leading-[var(--brand-subtext-line-height)]">
                          {card.content}
                        </p>
                      </CardContent>
                    </Card>

                    <Badge
                      className={`absolute ${card.badgePosition} px-5 py-2.5 bg-white text-[#07130e] rounded-2xl shadow-green-shadow font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]`}
                    >
                      {card.badgeText}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#0e7b5d] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] px-[25px] py-[12.5px] rounded-2xl font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-white text-[length:var(--brand-body-med-font-size)] text-center tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
