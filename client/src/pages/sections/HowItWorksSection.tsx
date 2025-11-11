import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export const HowItWorksSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Define the step cards data for easier mapping
  const stepCards = [
    {
      title: "Input your specimen",
      isTwoLines: false,
      content: {
        heading: "Input Your Specimen",
        sentence:
          "Tell us about your plant: upload an image, enter the name, or describe the preparation. Whether it's a local root blend or a single herb, we’ll take it from there.",
        image: "/figmaAssets/how-it-works-1.png",
      },
    },
    {
      title: "AI Analyzes the Profile",
      isTwoLines: false,
      content: {
        heading: "AI Analyzes the Profile",
        sentence:
          "Borderless runs a deep scan of the specimen using advanced AI models, mapping its chemical profile and checking it against global research datasets.",
        image: "/figmaAssets/how-it-works-2.png",
      },
    },
    {
      title: "Review Your Compound Breakdown",
      isTwoLines: true,
      content: {
        heading: "Review Your Compound Breakdown",
        sentence:
          "You get a full report showing the key compounds in your herb, their functions, percentages, potential risks, and how they interact.",
        image: "/figmaAssets/how-it-works-3.png",
      },
    },
    {
      title: "Get Treatment Comparisons",
      isTwoLines: false,
      content: {
        heading: "Get Treatment Comparisons",
        sentence:
          "See how your natural remedy stacks up against pharmaceuticals. We surface similar treatments, clinical insights, and use cases side-by-side.",
        image: "/figmaAssets/how-it-works-4.png",
      },
    },
    {
      title: "Log Results On-Chain",
      isTwoLines: false,
      content: {
        heading: "Log Results On-Chain",
        sentence:
          "Preserve your findings on the SEI blockchain. Whether you're building IP, protecting indigenous knowledge, or logging results, your data stays traceable and secure.",
        image: "/figmaAssets/how-it-works-5.png",
      },
    },
  ];

  return (
    <section className="relative w-full py-16 px-[148px] bg-[url('/figmaAssets/rectangle-32.png')] bg-no-repeat bg-cover mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16 max-w-7xl mx-auto px-4">
          {/* Left side - Process steps */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            {/* Process Step Cards */}
            <>
              {stepCards.map((step, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={`step-wrapper-${index}`}>
                    {/* CARD — visible only when NOT active */}
                    {!isActive && (
                      <Card
                        key={`step-${index}`}
                        className="w-[478px] mb-6 bg-[#052b21] rounded-3xl border-none cursor-pointer"
                        onClick={() => setActiveIndex(index)}
                      >
                        <CardContent className="flex items-center p-0 h-[120px]">
                          <img
                            className="w-[50px] h-[50px] ml-[52px]"
                            alt="Arrow"
                            src="/figmaAssets/arrow.svg"
                          />

                          <div
                            className={`ml-[35px] font-brand-h3 font-[number:var(--brand-h3-font-weight)] text-white text-[length:var(--brand-h3-font-size)] ${
                              step.isTwoLines ? "" : "text-center"
                            } tracking-[var(--brand-h3-letter-spacing)] leading-[var(--brand-h3-line-height)] [font-style:var(--brand-h3-font-style)]`}
                          >
                            {step.title.includes("Breakdown") ? (
                              <>
                                Review Your Compound <br />
                                Breakdown
                              </>
                            ) : (
                              step.title
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* CONTENT — visible only when ACTIVE */}
                    {isActive && (
                      <div className="bg-[#DAECE3] w-[478px] px-10 pt-10 rounded-[24px] mb-4">
                        <h4 className="text-[#052B21] font-medium text-[24px] mb-2">
                          {step.content.heading}
                        </h4>

                        <p className="text-[#052B21] font-medium text-[14px] mb-6 leading-[20px]">
                          {step.content.sentence}
                        </p>

                        <img
                          className="min-w-full"
                          src={step.content.image}
                          alt={`image ${index}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          </div>

          {/* Right side - Heading and CTA */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <h2 className="[font-family:'Maison_Neue-Regular',Helvetica] font-medium text-4xl md:text-6xl lg:text-[80px] tracking-[0] leading-[normal] lg:leading-[6.7rem] text-[#07130e]">
              <span>
                How the
                <br />
              </span>
              <span>Borderless</span>
              <br />
              <span>
                <span className="font-light italic text-[76px]"> AI</span>{" "}
                Works.
              </span>
            </h2>

            <p className="mt-2 font-brand-body font-[number:var(--brand-body-font-weight)] text-[#07130e] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
              See what&apos;s inside your herb, how it works, and <br />
              how to use it, step by step.
            </p>

            <Link href="/chat">
              <Button className="mt-12 bg-[#0e7b5d] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] text-white rounded-[16px] hover:bg-[#0a6a50]/70 transition-all w-[180px] h-[47px] flex items-center justify-center">
                <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-white text-[[length:var(--brand-body-med-font-size)]] text-center tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] whitespace-nowrap [font-style:var(--brand-body-med-font-style)]">
                  Run a Sample Test
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
