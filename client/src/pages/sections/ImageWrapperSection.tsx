import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const ImageWrapperSection = (): JSX.Element => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "about" },
    { label: "How it works", path: "how-it-works" },
    { label: "Community", path: "community" },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#b4d6cd] py-16 px-[140px]">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between mb-12 mt-10">
          {/* Logo and company info */}
          <div className="flex-1">
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
              <a href="mailto:admin@borderlessscience.com">
                admin@borderlessscience.com
              </a>
            </address>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-20 flex-1">
            <nav className="flex items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  onClick={() =>
                    link.path === "/"
                      ? (window.location.href = "/")
                      : handleScroll(link.path)
                  }
                  className="text-sm text-[#07130e] hover:text-[#0e7b5d] hover:bg-transparent hover:underline transition-colors duration-300 bg-transparent shadow-none p-0"
                >
                  {link.label}
                </Button>
              ))}
            </nav>

            <div className="w-full flex items-center justify-center gap-3 text-[14px]">
              <a className="underline hover:no-underline">Terms & Privacy</a>
              <Separator orientation="vertical" className="h-6 bg-[#07130e]" />
              <span>{currentYear} Borderless AI. All rights reserved</span>
            </div>
          </div>

          {/* Social media */}
          <div className="flex items-center gap-5  flex-1 justify-end">
            <a
              href="https://github.com/Borderless-Science"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
                alt="Social media links"
                src="/icons/github-icon.svg"
              />
            </a>

            <a
              href="https://discord.com/invite/EBum3NmErQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
                alt="Social media links"
                src="/icons/discord-icon.svg"
              />
            </a>
            <a
              href="https://x.com/Borderlescience"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
                alt="Social media links"
                src="/icons/twitter-icon.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/borderless-science"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform"
                alt="Social media links"
                src="/icons/linkedIn-icon.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
