
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeRecoverSection from "@/components/sections/WhatWeRecoverSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <WhatWeRecoverSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default Index;
