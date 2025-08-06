import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <Card className="w-full h-72 rounded-2xl overflow-hidden [background:url(..//figmaAssets/cta.png)_50%_50%_/_cover] relative">
      <CardContent className="flex flex-col items-center justify-center h-full p-0">
        <div className="text-center max-w-[568px] mb-12">
          <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-white text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)] mb-4">
            Turn Curiosity Into Clarity
          </h2>

          <p className="font-brand-body font-[number:var(--brand-body-font-weight)] text-white text-[length:var(--brand-body-font-size)] tracking-[var(--brand-body-letter-spacing)] leading-[var(--brand-body-line-height)] [font-style:var(--brand-body-font-style)]">
            Got a plant on your mind? Run your first analysis, explore
            compounds,
            <br />
            and get research-backed insights, instantly.
          </p>
        </div>

        <Button className="bg-white text-[#0e7b5d] shadow-[inset_3px_3px_5px_#00000040,inset_-3px_-3px_5px_#00000040] px-[25px] py-[12.5px] rounded-2xl hover:bg-white">
          <span className="font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] whitespace-nowrap [font-style:var(--brand-body-med-font-style)]">
            Try It Now
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
