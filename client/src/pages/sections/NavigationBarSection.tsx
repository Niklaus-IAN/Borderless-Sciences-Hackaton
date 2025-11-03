import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export const NavigationBarSection = (): JSX.Element => {
  const [location] = useLocation();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation menu items data
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "about" },
    { label: "How it works", path: "how-it-works" },
    { label: "Community", path: "community" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-[#f6fff8]/90 backdrop-blur-md py-6 px-4 md:px-8 lg:px-[133px] shadow-sm">
      <nav className="flex items-center justify-between w-full gap-4 md:gap-8 lg:gap-[197px]">
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
        <div className="flex flex-1 max-w-[469px] h-[60px] items-center justify-center bg-[#E7F3ED] rounded-2xl">
          <div className="flex items-center justify-between gap-2.5 px-2.5">
            {navItems.map((item, index) => {
              const isActive = location === item.path;
              return (
                <Button
                  key={index}
                  onClick={() =>
                    item.path === "/"
                      ? (window.location.href = "/")
                      : handleScroll(item.path)
                  }
                  className={`flex items-center justify-center px-5 py-2.5 rounded-[14px] whitespace-nowrap transition-all duration-200 text-[#07130E] bg-[#E7F3ED] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-none shadow-none ${
                    isActive
                      ? "bg-white/40 hover:bg-white/40"
                      : "hover:bg-black/50 hover:text-white"
                  }`}
                >
                  <span className="font-brand-body font-[number:var(--brand-body-font-weight)] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
                    {item.label}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Sign Up button */}
        <Link href="/chat">
          <Button className="bg-[#0e7b5d] w-[135px] h-[47px] text-white rounded-2xl shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] hover:bg-[#0e7b5d]/90 flex items-center justify-center">
            <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]">
              Launch App
            </span>
          </Button>
        </Link>
      </nav>
    </header>
  );
};
