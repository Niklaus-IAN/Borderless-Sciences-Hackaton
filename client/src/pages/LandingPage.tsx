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

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] relative">
        <NavigationBarSection />
        <HeroBannerSection />
        <MeetTheAISection />
        <CoreFeaturesSection />
        <HowItWorksSection />
        <InformationGroupSection />
        <CommunitySection />
        <TestimonialsSection />
        <CallToActionSection />
        <ImageGallerySection />
        <ImageWrapperSection />
      </div>
    </div>
  );
};
