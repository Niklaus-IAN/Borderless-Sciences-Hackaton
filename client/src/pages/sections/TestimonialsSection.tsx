import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        '"This is exactly what I\'ve been waiting for. Borderless gives me a clean, credible breakdown of plant compounds, no more guesswork, no expensive lab needed."',
      name: "Onyeka A.",
      title: "Ethnobotany Researcher",
      iconSrc: "/figmaAssets/icon.svg",
    },
    {
      quote:
        '"I used Borderless to check which herbs could help my mum\'s arthritis. It showed the compounds, flagged risks, and helped me choose the right combo."',
      name: "Amaka E.",
      title: "Herbal Curious User",
      iconSrc: "/figmaAssets/icon-2.svg",
    },
    {
      quote:
        '"This tool bridges tradition and pharmacology like never before. It\'s a perfect research assistant for the next generation of plant scientists."',
      name: "Dr. Tega O.",
      title: "Pharmacognosy Lecturer",
      iconSrc: "/figmaAssets/icon.svg",
    },
  ];

  // Pagination indicators
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="flex flex-col items-center gap-10 w-full max-w-[1120px] mx-auto">
      <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] text-center tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
        What Users Say
      </h2>

      <div className="w-full">
        <div className="flex items-center gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-[352px] h-[291px] bg-[#ffd99a] rounded-2xl overflow-hidden border-none"
            >
              <CardContent className="p-12 flex flex-col justify-between h-full">
                <p className="[font-family:'Maison_Neue-BookItalic',Helvetica] font-normal italic text-[#07130e] text-base leading-[22px]">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-5 mt-6">
                  <img
                    className="w-[50px] h-[50px]"
                    alt="User avatar"
                    src={testimonial.iconSrc}
                  />

                  <div className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)] text-[length:var(--brand-body-med-font-size)]">
                    <span className="text-[#07130e] block">
                      {testimonial.name}
                    </span>
                    <span className="text-[#4b5a56] block">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-5 mt-10">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-[25px] h-[25px] rounded-full ${dot.active ? "bg-[#0e7b5d]" : "bg-[#fff3e0]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
