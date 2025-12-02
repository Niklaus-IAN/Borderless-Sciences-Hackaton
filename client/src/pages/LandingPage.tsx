import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CommunitySection } from "./sections/CommunitySection";
import { CoreFeaturesSection } from "./sections/CoreFeaturesSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ImageWrapperSection } from "./sections/ImageWrapperSection";
import { InformationGroupSection } from "./sections/InformationGroupSection";
import { MeetTheAISection } from "./sections/MeetTheAISection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ShapeTheFutureSection } from "./sections/ShapeTheFutureSection";
import { motion, useInView, useAnimation } from "framer-motion";
import Reveal from "@/components/Reveal";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full relative">
        <NavigationBarSection />

        <div className="mt-28 py-8">
          <Reveal>
            <HeroBannerSection />
          </Reveal>
        </div>

        <div className="py-16" id="how-it-works">
          <Reveal>
            <HowItWorksSection />
          </Reveal>
        </div>

        <div className="py-16">
          <Reveal>
            <CoreFeaturesSection />
          </Reveal>
        </div>

        <div className="py-24" id="about">
          <Reveal>
            <MeetTheAISection />
          </Reveal>
        </div>

        <div className="py-16">
          <Reveal>
            <InformationGroupSection />
          </Reveal>
        </div>

        <div className="py-16" id="community">
          <Reveal>
            <CommunitySection />
          </Reveal>
        </div>

        <div className="py-16">
          <Reveal>
            <ShapeTheFutureSection />
          </Reveal>
        </div>

        <div className="py-26">
          <Reveal>
            <TestimonialsSection />
          </Reveal>
        </div>

        <div className="py-16 px-[140px]">
          <Reveal>
            <CallToActionSection />
          </Reveal>
        </div>

        <Reveal>
          <>
            <div className="pt-32">
              <ImageGallerySection />
            </div>
            <div className="pt-[2px]">
              <ImageWrapperSection />
            </div>
          </>
        </Reveal>
      </div>
    </div>
  );
};
