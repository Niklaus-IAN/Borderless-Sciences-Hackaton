import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="w-full h-72 rounded-2xl overflow-hidden [background:url(/figmaAssets/cta.png)_50%_50%_/_cover] relative">
          <CardContent className="flex flex-col items-center justify-center h-full p-0">
            <div className="text-center max-w-[568px] mb-12 px-8">
              <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-white text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)] mb-6">
                Turn Curiosity Into Clarity
              </h2>

              <p className="font-brand-body font-[number:var(--brand-body-font-weight)] text-white text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)] leading-relaxed">
                Got a plant on your mind? Run your first analysis, explore
                compounds, and get research-backed insights, instantly.
              </p>
            </div>

            <Button className="bg-white text-[#0e7b5d] shadow-[inset_3px_3px_5px_#00000040,inset_-3px_-3px_5px_#00000040] px-8 py-4 rounded-2xl hover:bg-white transition-all duration-200 hover:shadow-lg">
              <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] whitespace-nowrap [font-style:var(--brand-brand-body-med-font-style)]">
                Try It Now
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
