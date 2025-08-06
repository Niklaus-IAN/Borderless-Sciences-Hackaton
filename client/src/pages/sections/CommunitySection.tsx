import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CommunitySection = (): JSX.Element => {
  // Data for community cards to enable mapping
  const communityCards = [
    {
      icon: "/figmaAssets/message.svg",
      iconAlt: "Message",
      title: "Join the conversation on\nDiscord or Telegram",
      description:
        "Connect with herbal scientists,\nhealers, and techies around the\nworld. Ask questions, share findings,\nand get updates straight from the\ncore team.",
    },
    {
      icon: "/figmaAssets/data-icon.svg",
      iconAlt: "Data icon",
      title: "Contribute to DeSci - open,\ndecentralized, and verifiable",
      description:
        "Submit research, propose\nimprovements, or validate studies.\nYour contributions fuel an open-data\necosystem owned by the community,\nnot gatekeepers.",
    },
    {
      icon: null, // Using background image instead
      iconAlt: "Partners",
      backgroundImage: "bg-[url(/figmaAssets/vector.svg)]",
      title: "Explore our partners and\ncontributors powering the mission",
      description:
        "We collaborate with researchers, labs, and builders who believe in transparency and plant-powered progress. See who's already building with us.",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1120px] items-center gap-[120px] mx-auto px-6">
      <div className="w-full max-w-[837px] text-center">
        <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)] mb-[57px]">
          Community &amp; Open Science
        </h2>

        <p className="font-brand-body font-[number:var(--brand-body-font-weight)] text-[#07130e] text-[length:var(--brand-body-font-size)] text-center tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
          We&apos;re building an open science ecosystem where herbal
          researchers, traditional medicine practitioners, <br />
          and citizen scientists unite. As a part of the Borderless Science DAO,
          you can contribute findings, validate data, and <br />
          shape the future of botanical research.
        </p>
      </div>

      <div className="w-full max-w-[1120px]">
        <div className="w-full max-w-[776px] mx-auto mb-[50px] text-center">
          <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
            Borderless isn&apos;t just a tool, it&apos;s a movement
          </h2>

          <p className="mt-[57px] font-brand-body font-[number:var(--brand-body-font-weight)] text-[#07130e] text-[length:var(--brand-body-font-size)] text-center tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
            Let&apos;s make science transparent, inclusive, and truly
            borderless.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {communityCards.map((card, index) => (
            <Card
              key={`community-card-${index}`}
              className="flex flex-col w-[352px] items-center justify-center gap-6 px-11 py-[38px] bg-[#daece3] rounded-2xl overflow-hidden"
            >
              <CardContent className="flex flex-col items-center justify-center gap-6 p-0">
                <div className="flex w-[58px] h-[58px] items-center justify-center gap-2.5 p-[11px] bg-white rounded-2xl">
                  {card.icon ? (
                    <img
                      className="w-9 h-9"
                      alt={card.iconAlt}
                      src={card.icon}
                    />
                  ) : (
                    <div
                      className={`w-9 h-8 ${card.backgroundImage} bg-[100%_100%]`}
                    />
                  )}
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[#07130e] text-[length:var(--brand-body-med-font-size)] text-center tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]">
                    <span>
                      {card.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>

                  <div className="w-[265px] font-brand-body font-[number:var(--brand-body-font-weight)] text-[#4b5a56] text-[length:var(--brand-body-font-size)] text-center tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
                    <span>
                      {card.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.description.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
