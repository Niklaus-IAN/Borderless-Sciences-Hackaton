import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1084px] items-center gap-[30px] mx-auto px-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <Badge className="px-4 py-2 bg-[#ffd99a] text-[#07130e] rounded-3xl font-brand-body text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)]">
          Welcome to the Edge of Everything
        </Badge>

        <h1 className="text-6xl text-[#07130e] text-center leading-normal">
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
            Bridging{" "}
          </span>
          <span className="[font-family:'Maison_Neue-BookItalic',Helvetica] italic">
            Traditional
          </span>
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold">
            {" "}
            Science <br />
            with Modern Intelligence
          </span>
        </h1>

        <p className="font-brand-hero-sub font-[number:var(--brand-hero-sub-font-weight)] text-[#4b5a56] text-[length:var(--brand-hero-sub-font-size)] text-center tracking-[var(--brand-hero-sub-letter-spacing)] leading-[var(--brand-hero-sub-line-height)] [font-style:var(--brand-hero-sub-font-style)]">
          Turn local herbal knowledge into data-backed, pharma-compatible
          insights, powered by AI and secured on SEI.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button className="bg-[#0e7b5d] text-white px-[25px] py-[12.5px] rounded-2xl shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] font-brand-body-med text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)]">
          Try It Now
        </Button>

        <Button
          variant="outline"
          className="border-[#0e7b5d] text-[#0e7b5d] px-[25px] py-[12.5px] rounded-2xl font-brand-body-med text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)]"
        >
          How It Works
        </Button>
      </div>

      <div className="relative w-full h-[503.34px]">
        <div className="absolute w-full h-[248px] top-64 left-0">
          <div className="h-[248px] rounded-3xl bg-[url(/figmaAssets/the-image.png)] bg-cover bg-[50%_50%]" />
        </div>

        <div className="absolute w-full h-[248px] top-0 left-0">
          <div className="h-[248px] rounded-3xl bg-[url(/figmaAssets/the-image-1.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
    </section>
  );
};
