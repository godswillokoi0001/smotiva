import { Navbar } from "../components/site/Navbar";
import { CTA } from "../components/site/CTA";
import { Footer } from "../components/site/Footer";
import { AboutSection } from "./home/sections/AboutSection/AboutSection";

export const AboutPage = (): JSX.Element => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip bg-cream">
      <Navbar />
      <AboutSection />
      <CTA />
      <Footer />
    </main>
  );
};
