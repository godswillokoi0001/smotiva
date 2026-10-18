import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { ContainerSubsection } from "./sections/ContainerSubsection/ContainerSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { ElementHeroSubsection } from "./sections/ElementHeroSubsection/ElementHeroSubsection";
import { FinalCtaContenetWrapperSubsection } from "./sections/FinalCtaContenetWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection/Frame2Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
];

export const Desktop = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center bg-[#fffdf0]">
      <header className="relative z-50 flex min-h-[78px] w-full items-center gap-4 bg-[#fffdf0] px-4 py-5 sm:px-6 md:px-10 md:py-6 xl:px-20">
        <a
          className="flex shrink-0 items-center gap-2.5"
          href="/"
          aria-label="Smotiva home"
        >
          <img
            className="h-[30px] w-auto max-w-[150px] sm:h-[37px] sm:max-w-[180px]"
            alt="Smotiva logo primary"
            src="/images/smotiva-logo-dark.png"
          />
        </a>
        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-6 xl:gap-8">
          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center justify-end gap-6 px-0 py-2.5 xl:gap-[50px]">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="whitespace-nowrap font-['Lufga-Medium',Helvetica] text-lg font-medium leading-[30px] tracking-[0] text-[#282828] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-primary focus-visible:ring-offset-2"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            asChild
            className="h-auto shrink-0 rounded-xl bg-blue-ribbon-primary px-4 py-2.5 shadow-effect-shadow-small hover:bg-blue-ribbon-primary/90 sm:px-7 sm:py-4"
          >
            <a
              className="font-['Lufga-SemiBold',Helvetica] text-sm font-semibold leading-6 tracking-[0] text-white sm:text-base sm:leading-7"
              href="#contact"
            >
              Contact Us
            </a>
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#061026]/15 text-[#061026] transition-colors hover:bg-[#061026]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-primary focus-visible:ring-offset-2 xl:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 top-full z-50 w-full border-t border-[#061026]/10 bg-[#fffdf0] px-4 py-6 shadow-[0_16px_40px_rgba(6,16,38,0.12)] sm:px-6 md:px-10 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="block rounded-lg px-2 py-3 font-['Lufga-Medium',Helvetica] text-lg font-medium leading-[30px] tracking-[0] text-[#282828] transition-colors hover:bg-[#061026]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-primary"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <ElementHeroSubsection />
      <FrameSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <Frame1Subsection />
      <Frame2Subsection />
      <ContainerSubsection />
      <FinalCtaContenetWrapperSubsection />
      <FooterSubsection />
    </main>
  );
};
