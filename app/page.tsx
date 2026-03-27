import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import QuoteSection from "@/components/sections/QuoteSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import FounderSection from "@/components/sections/FounderSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <QuoteSection />
        <FrameworkSection />
        <ResultsSection />
        <ProcessSection />
        <PracticeAreasSection />
        <WhyUsSection />
        <TestimonialSection />
        <CTASection />
        <FounderSection />
      </main>
      <Footer />
    </>
  );
}
