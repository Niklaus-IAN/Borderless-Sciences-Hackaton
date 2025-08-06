import React from "react";
import { Separator } from "@/components/ui/separator";

export const ImageWrapperSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Home", position: "left-0" },
    { text: "About", position: "left-[62px]" },
    { text: "How it works", position: "left-[124px]" },
    { text: "Community", position: "left-56" },
  ];

  return (
    <footer className="w-full bg-[#b4d6cd] py-16 relative">
      {/* Logo and company name */}
      <div className="flex items-center gap-3 absolute top-[66px] left-40">
        <img
          className="w-[30px] h-[50px] object-cover"
          alt="Borderless logo icon"
          src="/figmaAssets/borderless-logo-icon-03-1-1.png"
        />
        <div className="w-fit [font-family:'Maison_Neue-Mono',Helvetica] font-normal text-[#07130e] text-base leading-normal">
          BORDERLESS
          <br />
          AI
        </div>
      </div>

      {/* Contact information */}
      <address className="not-italic">
        <div className="absolute w-[353px] top-32 left-40 font-brand-caption font-[number:var(--brand-caption-font-weight)] text-[#07130e] text-[length:var(--brand-caption-font-size)] tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] [font-style:var(--brand-caption-font-style)]">
          6a Adebayo Close, Lekki Phase 1, Lagos, Nigeria.
        </div>
        <div className="absolute w-[146px] top-[154px] left-40 font-brand-caption font-[number:var(--brand-caption-font-weight)] text-[#07130e] text-[length:var(--brand-caption-font-size)] tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] [font-style:var(--brand-caption-font-style)]">
          +234 809 123 4567
        </div>
        <div className="absolute w-[216px] top-[179px] left-40 font-brand-caption font-[number:var(--brand-caption-font-weight)] text-[#07130e] text-[length:var(--brand-caption-font-size)] tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] [font-style:var(--brand-caption-font-style)]">
          hello.borderlessai@gmail.com
        </div>
      </address>

      {/* Navigation links */}
      <nav className="absolute w-[285px] h-[15px] top-[129px] left-[578px]">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-2.5 absolute top-0 ${link.position}`}
          >
            <div className="relative w-fit mt-[-1.00px] font-brand-caption font-[number:var(--brand-caption-font-weight)] text-[#07130e] text-[length:var(--brand-caption-font-size)] text-center tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] [font-style:var(--brand-caption-font-style)]">
              {link.text}
            </div>
          </div>
        ))}
      </nav>

      {/* Social media icons */}
      <div className="absolute top-[145px] left-[1163px]">
        <img
          className="w-[117px] h-4"
          alt="Social media links"
          src="/figmaAssets/socials.svg"
        />
      </div>

      {/* Terms and Privacy */}
      <div className="absolute w-[88px] h-4 top-[218px] left-[568px]">
        <div className="absolute -top-px left-0 [font-family:'Maison_Neue-Regular',Helvetica] font-normal text-[#07130e] text-xs text-center tracking-[0] leading-3">
          <span className="underline font-brand-caption [font-style:var(--brand-caption-font-style)] font-[number:var(--brand-caption-font-weight)] tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] text-[length:var(--brand-caption-font-size)]">
            Terms &amp; Privacy
          </span>
        </div>
      </div>

      {/* Vertical divider */}
      <Separator
        orientation="vertical"
        className="absolute w-px h-6 top-[214px] left-[664px] bg-[#07130e]"
      />

      {/* Copyright */}
      <div className="absolute top-[217px] left-[673px] font-brand-caption font-[number:var(--brand-caption-font-weight)] text-[#07130e] text-[length:var(--brand-caption-font-size)] text-center tracking-[var(--brand-caption-letter-spacing)] leading-[var(--brand-caption-line-height)] [font-style:var(--brand-caption-font-style)]">
        2025 Borderless AI. All rght reserved
      </div>
    </footer>
  );
};
