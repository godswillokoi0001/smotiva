import { Navbar } from "../components/site/Navbar";
import { CTA } from "../components/site/CTA";
import { Footer } from "../components/site/Footer";
import { FaqSection } from "./home/sections/FaqSection/FaqSection";
import { WorkSection } from "./home/sections/WorkSection";
import { ServicesSection } from "./home/sections/ServicesSection/ServicesSection";
import { HeroSection } from "./home/sections/HeroSection/HeroSection";
import { HowWeWorkSection } from "./home/sections/HowWeWorkSection";
import { WhySmotivaSection } from "./home/sections/WhySmotivaSection/WhySmotivaSection";
import { ProblemsSection } from "./home/sections/ProblemsSection";
import { AboutSection } from "./home/sections/AboutSection";
import { CaseStudiesSection } from "./home/sections/CaseStudiesSection/CaseStudiesSection";

export const HomePage = (): JSX.Element => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip bg-cream">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <CaseStudiesSection />
      <HowWeWorkSection />
      <WhySmotivaSection />
      <FaqSection />
      <CTA />
      <Footer />
    </main>
  );
};
