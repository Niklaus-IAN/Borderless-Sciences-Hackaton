import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Define the step cards data for easier mapping
  const stepCards = [
    {
      title: "AI Analyzes the Profile",
      isTwoLines: false,
    },
    {
      title: "Review Your Compound Breakdown",
      isTwoLines: true,
    },
    {
      title: "Get Treatment Comparisons",
      isTwoLines: false,
    },
    {
      title: "Log Results On-Chain",
      isTwoLines: false,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[url('/figmaAssets/rectangle-32.svg')] bg-no-repeat">
      <div className="max-w-7xl mx-auto px-18">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 p-16">
          {/* Left side - Process steps */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            {/* Input Your Specimen Card */}
            <Card className="w-full mb-8 bg-[#daece3] rounded-3xl border-none shadow-lg">
              <CardContent className="p-0">
                <div className="p-12">
                  <h3 className="font-brand-h3 font-[number:var(--brand-h3-font-weight)] text-[#052b21] text-[length:var(--brand-h3-font-size)] text-center tracking-[var(--brand-h3-letter-spacing)] leading-[var(--brand-h3-line-height)] [font-style:var(--brand-h3-font-style)] mb-6">
                    Input Your Specimen
                  </h3>
                  <p className="font-brand-subtext font-[number:var(--brand-subtext-font-weight)] [font-style:var(--brand-subtext-font-style)] text-[#052b21] text-[length:var(--brand-subtext-font-size)] tracking-[var(--brand-subtext-letter-spacing)] leading-[var(--brand-subtext-line-height)] leading-relaxed">
                    Tell us about your plant: upload an image, enter the name,{" "}
                    <br />
                    or describe the preparation. Whether it&#39;s a local root
                    blend <br />
                    or a single herb, we&apos;ll take it from there.
                  </p>
                </div>

                <div className="relative w-full h-[146px]">
                  <div className="absolute w-[388px] h-[146px] top-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl">
                    <div className="relative w-[338px] h-[42px] top-[31px] left-[25px]">
                      <div className="flex flex-col w-[292px] h-[42px] items-start gap-2.5 px-[21px] py-[9px] absolute top-0 left-0 bg-[#b4d6cd] rounded-3xl">
                        <div className="flex w-[247px] items-center justify-between relative flex-[0_0_auto]">
                          <div className="relative w-fit font-brand-body font-[number:var(--brand-body-font-weight)] text-[#e7f2ef] text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] whitespace-nowrap [font-style:var(--brand-body-font-style)]">
                            Type anything
                          </div>

                          <img
                            className="relative w-6 h-6"
                            alt="Attachment icon"
                            src="/figmaAssets/iconamoon-attachment-fill.svg"
                          />
                        </div>
                      </div>

                      <img
                        className="absolute w-[42px] h-[42px] top-0 left-[296px]"
                        alt="Send icon"
                        src="/figmaAssets/send-icon.svg"
                      />
                    </div>
                  </div>

                  <div className="absolute w-full h-[41px] bottom-0 left-0 bg-[#daece3] rounded-[0px_0px_24px_24px] blur-[4.5px]" />
                </div>
              </CardContent>
            </Card>

            {/* Process Step Cards */}
            {stepCards.map((step, index) => (
              <Card
                key={`step-${index}`}
                className="w-full mb-8 bg-[#052b21] rounded-3xl border-none shadow-lg"
              >
                <CardContent className="flex items-center p-0 h-[120px]">
                  <img
                    className="w-[50px] h-[50px] ml-[52px]"
                    alt="Arrow"
                    src="/figmaAssets/arrow.svg"
                  />
                  <div
                    className={`ml-[35px] font-brand-h3 font-[number:var(--brand-h3-font-weight)] text-white text-[length:var(--brand-h3-font-size)] ${step.isTwoLines ? "" : "text-center"} tracking-[var(--brand-h3-letter-spacing)] leading-[var(--brand-h3-line-height)] [font-style:var(--brand-h3-font-style)]`}
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
            ))}
          </div>

          {/* Right side - Heading and CTA */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <h2 className="[font-family:'Maison_Neue-Regular',Helvetica] font-normal text-4xl md:text-6xl lg:text-[80px] tracking-[0] leading-[normal] mb-8">
              <span className="text-[#07130e]">
                How the Borderless
                <br />
              </span>
              <span className="[font-family:'Maison_Neue-LightItalic',Helvetica] font-light italic text-[#07130e]">
                AI
              </span>
              <span className="text-[#07130e]"> Works.</span>
            </h2>

            <p className="text-lg text-[#4b5a56] leading-relaxed mb-10">
              See what&apos;s inside your herb, how it works, and <br />
              how to use it, step by step.
            </p>

            <Button className="bg-[#0e7b5d] hover:bg-[#0c6b4d] text-white rounded-2xl px-8 py-4 font-medium shadow-lg transition-colors">
              <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-white text-[length:var(--brand-body-med-font-size)] text-center tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] whitespace-nowrap [font-style:var(--brand-body-med-font-style)]">
                Run a Sample Test
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
