import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#b4d6cd]">
      <div className="container flex flex-col items-center justify-center max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-[538px] mb-10">
          <h2 className="font-brand-h2 font-[number:var(--brand-h2-font-weight)] text-[#07130e] text-[length:var(--brand-h2-font-size)] text-center tracking-[var(--brand-h2-letter-spacing)] leading-[var(--brand-h2-line-height)] [font-style:var(--brand-h2-font-style)] mb-4">
            Be the First to Know
          </h2>

          <p className="[font-family:'Maison_Neue-BookItalic',Helvetica] font-normal italic text-black text-base text-center tracking-[0] leading-[22px]">
            Get updates on new features, research drops, and exclusive early
            access.
            <br /> Join a growing community blending plant wisdom with data.
          </p>
        </div>

        <div className="flex items-center gap-2 max-w-[534px] w-full">
          <Card className="bg-[#daece3] rounded-2xl border-none flex-1">
            <CardContent className="p-0">
              <Input
                className="border-none bg-transparent h-[47px] px-6 py-3 font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-[#b4d6cd] text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]"
                placeholder="Enter your email"
              />
            </CardContent>
          </Card>

          <Button className="bg-[#0e7b5d] shadow-[inset_3px_3px_7px_#084a38,inset_-3px_-3px_7px_#084a38] h-[47px] px-[25px] py-[12.5px] rounded-2xl font-brand-body-med font-[number:var(--brand-body-med-font-weight)] text-white text-[length:var(--brand-body-med-font-size)] tracking-[var(--brand-body-med-letter-spacing)] leading-[var(--brand-body-med-line-height)] [font-style:var(--brand-body-med-font-style)]">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
