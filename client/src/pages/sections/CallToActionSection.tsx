import React from "react";
import { Button } from "@/components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <div className="w-full h-72 rounded-3xl bg-[url('/figmaAssets/cta.png')] bg-center bg-no-repeat bg-cover relative px-[140px] mt-32">
      <div className="flex flex-col items-center justify-center h-full p-0">
        <div className="text-center mb-12">
          <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-white text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)] mb-4 mt-4">
            Turn Curiosity Into Clarity
          </h2>

          <p className="font-brand-body text-white leading-[22px] tracking-[0.03em]">
            Got a plant on your mind? Run your first analysis, explore
            compounds, and get <br /> research-backed insights, instantly.
          </p>
        </div>

        <Button className="text-[#0e7b5d] bg-white rounded-2xl hover:bg-white/90  hover:text-black transition-all w-[144px] h-[47px] flex items-center justify-center border border-[#0e7b5d]">
          <span>Try it Now</span>
        </Button>
      </div>
    </div>
  );
};
