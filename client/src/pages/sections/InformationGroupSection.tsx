import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const InformationGroupSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-black text-[length:var(--brand-h2-font-size)] tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)]">
          <span>Discover </span>
          <span>compounds</span>
          <span>
            , Compare results, <br />
            and Make better calls
          </span>
        </h2>

        <Card className="w-full rounded-xl overflow-hidden border-0">
          <CardContent className="p-0">
            <div
              className="h-[610px] w-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url(../figmaAssets/frame-12.png)" }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
