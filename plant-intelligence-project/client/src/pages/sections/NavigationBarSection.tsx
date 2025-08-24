import React from "react";
import { Button } from "@/components/ui/button";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", isActive: true },
    { label: "About", isActive: false },
    { label: "How it works", isActive: false },
    { label: "Community", isActive: false },
  ];

  return (
    <header className="w-full flex justify-center bg-[#f6fff8] py-6 px-4 md:px-8 lg:px-[133px]">
      <nav className="flex items-center justify-between w-full max-w-[1174px] gap-4 md:gap-8 lg:gap-[197px]">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img
            className="w-[30px] h-[50px] object-cover"
            alt="Borderless logo icon"
            src="/figmaAssets/borderless-logo-icon-03-1-1.png"
          />
          <div className="[font-family:'Maison_Neue-Mono',Helvetica] font-normal text-[#07130e] text-base leading-normal">
            BORDERLESS
            <br />
            AI
          </div>
        </div>

        {/* Navigation menu */}
        <div className="flex-1 max-w-[469px] bg-[#daece3] rounded-2xl py-2.5">
          <div className="flex items-center gap-2.5 px-2.5 overflow-x-auto">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`h-10 px-5 py-2.5 rounded-[14px] whitespace-nowrap ${
                  item.isActive ? "bg-[#e7f3ed]" : ""
                }`}
              >
                <span className="font-brand-body font-[number:var(--brand-body-font-weight)] text-[#07130e] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sign Up button */}
        <Button className="bg-[#0e7b5d] text-white rounded-2xl px-[25px] py-[12.5px] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] hover:bg-[#0e7b5d]/90">
          <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]">
            Sign Up
          </span>
        </Button>
      </nav>
    </header>
  );
};
