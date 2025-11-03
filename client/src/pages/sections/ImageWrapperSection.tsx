import React from "react";
import { Separator } from "@/components/ui/separator";

export const ImageWrapperSection = (): JSX.Element => {
  const navLinks = ["Home", "About", "How it works", "Community"];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#b4d6cd] py-16 px-[140px]">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between gap-8 mb-12 mt-10">
          {/* Logo and company info */}
          <div className="">
            <div className="flex items-center gap-3 mb-7">
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

            {/* Contact information */}
            <address className="not-italic flex flex-col gap-[10px] text-sm text-[#07130e]">
              <div>6a Adebayo Close, Lekki Phase 1, Lagos, Nigeria.</div>
              <div>+234 809 123 4567</div>
              <div>hello.borderlessai@gmail.com</div>
            </address>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-20 translate-y-[68px]">
            <nav className="flex items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-[#07130e] hover:text-[#0e7b5d] hover:underline transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="w-full flex items-center justify-center gap-3 text-[14px]">
              <a href="" className="underline hover:no-underline">
                Terms & Privacy
              </a>
              <Separator orientation="vertical" className="h-6 bg-[#07130e]" />
              <span>{currentYear} Borderless AI. All rights reserved</span>
            </div>
          </div>

          {/* Social media */}
          <div className="flex items-center gap-5 translate-y-6">
            <img
              className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
              alt="Social media links"
              src="/icons/github-icon.svg"
            />
            <img
              className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
              alt="Social media links"
              src="/icons/discord-icon.svg"
            />
            <img
              className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
              alt="Social media links"
              src="/icons/twitter-icon.svg"
            />
            <img
              className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
              alt="Social media links"
              src="/icons/linkedIn-icon.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
