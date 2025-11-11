import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const HeroBannerSection = (): JSX.Element => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col w-full max-w-[1084px] items-center gap-[30px] mx-auto mt-8">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* <Badge className="px-4 py-2 bg-[#ffd99a] text-[#07130e] rounded-3xl font-brand-body text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)]">
          Welcome to the Edge of Everything
        </Badge> */}

        <h1 className="text-6xl text-[#07130e] text-center leading-normal">
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-semibold">
            Bridging{" "}
          </span>
          <span className="[font-family:'Maison_Neue-BookItalic',Helvetica] italic">
            Traditional
          </span>
          <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-semibold">
            {" "}
            Science <br />
            with Modern Intelligence
          </span>
        </h1>

        <p className="font-brand-hero-sub font-[number:var(--brand-hero-sub-font-weight)] text-[#4b5a56] text-[length:var(--brand-hero-sub-font-size)] text-center tracking-[var(--brand-hero-sub-letter-spacing)] leading-[var(--brand-hero-sub-line-height)] [font-style:var(--brand-hero-sub-font-style)] w-[722px]">
          Turn local herbal knowledge into data-backed, pharma-compatible
          insights, powered by AI and secured on SEI.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Link href="/chat">
          <Button className="bg-[#0e7b5d] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] text-white rounded-xl hover:bg-[#0a6a50]/70 transition-all w-[122px] h-[47px] flex items-center justify-center">
            <span>Try it Now</span>
          </Button>
        </Link>

        <Button
          onClick={() => handleScroll("how-it-works")}
          className="text-[#0e7b5d] bg-white rounded-xl hover:bg-[#0e7b5d]/10 transition-all w-[144px] h-[47px] flex items-center justify-center border border-[#0e7b5d]"
        >
          <span>How it Works</span>
        </Button>
      </div>

      <div className="relative w-full h-[503.34px] mt-5">
        <img
          src="/figmaAssets/the-image-1.png"
          alt="Top image"
          className="absolute top-0 left-0 w-full h-[248px] rounded-3xl object-contain"
        />
        <img
          src="/figmaAssets/the-image.png"
          alt="Bottom image"
          className="absolute top-64 left-0 w-full h-[248px] rounded-3xl object-contain"
        />
      </div>
    </section>
  );
};
