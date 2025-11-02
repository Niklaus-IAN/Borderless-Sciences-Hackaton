import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const InformationGroupSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 px-[148px] mt-20">
      <div className="container mx-auto">
        <h2 className="text-center mb-16 font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-black text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
          Discover <span className="italic font-light">compounds</span>
          , Compare results, <br />
          and Make better calls
        </h2>

        <Card className="w-full rounded-xl overflow-hidden border-0">
          <CardContent className="p-0">
            <img
              className="h-[610px] w-full "
              src="../figmaAssets/frame-12.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
