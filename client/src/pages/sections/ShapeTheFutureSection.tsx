import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ShapeTheFutureSection = (): JSX.Element => {
  // Data for community cards to enable mapping
  const cards = [
    "Upload a local recipe or healing method",
    "Choose to monetize, publish, or keep it private",
    "IP-protected, blockchain-secured, science-verified",
  ];

  return (
    <section
      className="relative w-full py-28 bg-no-repeat bg-center px-[140px] mt-32"
      style={{
        backgroundImage: "url('/figmaAssets/rectangle-311.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="min-w-[479px] h-[405px]">
          <img
            className="w-full h-full"
            src="/figmaAssets/coming-soon.png"
            alt="coming-soon-image"
          />
        </div>

        {/* Right Section */}
        <div className="[font-family:'Maison_Neue-Regular',Helvetica] max-w-[480px]">
          <h3 className="text-[40px] text-[#07130E] leading-[3.2rem] font-bold mb-2">
            Got Traditional Wisdom? <br /> Help Shape the Future.
          </h3>
          <p className="text-[#07130E]/80 mb-10 font-light">
            Soon, you'll be able to share herbal remedies, ancestral insights,
            or rare plant uses, and decide how the world accesses them.
          </p>

          {cards.map((text, index) => (
            <Card
              key={index}
              className="mb-4 border border-[#4B5A56]/30 shadow-none px-8 py-5 rounded-[18px]"
            >
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
