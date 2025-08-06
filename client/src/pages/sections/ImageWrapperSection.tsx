import React from "react";
import { Separator } from "@/components/ui/separator";

export const ImageWrapperSection = (): JSX.Element => {
  const navLinks = ["Home", "About", "How it works", "Community"];

  return (
    <footer className="w-full bg-[#b4d6cd] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
            <address className="not-italic space-y-2 text-sm text-[#07130e]">
              <div>6a Adebayo Close, Lekki Phase 1, Lagos, Nigeria.</div>
              <div>+234 809 123 4567</div>
              <div>hello.borderlessai@gmail.com</div>
            </address>
          </div>

          {/* Navigation links */}
          <div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-[#07130e] hover:text-[#0e7b5d] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social media */}
          <div className="flex justify-start lg:justify-end">
            <img
              className="w-[117px] h-4"
              alt="Social media links"
              src="/figmaAssets/socials.svg"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#07130e]/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs text-[#07130e]">
            <a href="#" className="underline hover:no-underline">Terms & Privacy</a>
            <Separator orientation="vertical" className="h-4 bg-[#07130e]" />
            <span>2025 Borderless AI. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
