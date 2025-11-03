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

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full relative">
        <NavigationBarSection />
        <div className="py-8">
          <HeroBannerSection />
        </div>
        <div className="py-16" id="how-it-works">
          <HowItWorksSection />
        </div>
        <div className="py-16">
          <CoreFeaturesSection />
        </div>
        <div className="py-24" id="about">
          <MeetTheAISection />
        </div>
        <div className="py-16">
          <InformationGroupSection />
        </div>
        <div className="py-16" id="community">
          <CommunitySection />
        </div>
        <div className="py-16">
          <ShapeTheFutureSection />
        </div>
        <div className="py-26">
          <TestimonialsSection />
        </div>
        <div className="py-16 px-[140px]">
          <CallToActionSection />
        </div>
        <div className="pt-32">
          <ImageGallerySection />
        </div>
        <div className="pt-[2px]">
          <ImageWrapperSection />
        </div>
      </div>
    </div>
  );
};
