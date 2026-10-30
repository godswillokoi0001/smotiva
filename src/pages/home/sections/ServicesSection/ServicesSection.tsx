import type { ReactNode } from "react";
import { Brush } from "../../../../components/site/Brush";
import { SectionBackgroundGraphics } from "../../../../components/site/SectionBackgroundGraphics";
import { Link } from "../../../../lib/router";
import { contactHref } from "../../../../lib/navigation";

type Service = {
  title: ReactNode;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Brand Strategy",
    description:
      "Before deciding how your brand should look, let's get clear on what it stands for, who it serves and what makes it worth choosing.",
    icon: "/images/icons/brand-building%201.svg",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Build a visual identity that reflects your business and gives people something clear and recognisable to remember.",
    icon: "/images/icons/print%201.svg",
  },
  {
    title: (
      <>
        Website Design &amp;
        <br />
        Development
      </>
    ),
    description:
      "Give your business a website that explains what you do, presents your value clearly and makes the next step easy for visitors.",
    icon: "/images/icons/coding%201.svg",
  },
  {
    title: (
      <>
        Content Creation
        <br />
        &amp; Video Production
      </>
    ),
    description:
      "Give people more ways to understand your business through graphics, videos and other content that communicates what you offer.",
    icon: "/images/icons/creative%20(1)%201.svg",
  },
  {
    title: (
      <>
        Content &amp; Brand
        <br />
        Communication
      </>
    ),
    description:
      "Make sure your business sounds like itself wherever people encounter it, from your website to your social media and marketing materials.",
    icon: "/images/icons/content-creator%201.svg",
  },
  {
    title: (
      <>
        Social Media
        <br />
        &amp; Digital Marketing
      </>
    ),
    description:
      "Help more of the right people discover your business through thoughtful content and relevant digital marketing.",
    icon: "/images/icons/promotion%201.svg",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-sky py-8 md:py-16 xl:py-24"
    >
      <SectionBackgroundGraphics
        tone="blue"
        className="left-[-55.972vw] top-[-11.944vw]"
        transform="rotate(-33.02deg)"
        positions={[
          { left: 166, top: 0 },
          { left: 159, top: 95 },
          { left: 149, top: 210 },
          { left: 140, top: 324 },
        ]}
      />
      <SectionBackgroundGraphics
        tone="blue"
        className="left-[30vw] top-[65.972vw]"
        transform="rotate(-33.02deg)"
        positions={[
          { left: 166, top: 0 },
          { left: 159, top: 95 },
          { left: 149, top: 210 },
          { left: 140, top: 324 },
        ]}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-5 px-5 text-center md:gap-8 md:px-8 lg:px-12">
        <h2 className="relative font-lufga text-[32px] font-semibold leading-10 text-ink lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]">
          What we can{" "}
          <br className="md:hidden" />
          <span className="relative inline-block">
            help
            <Brush className="h-[6px] w-[129px]" />
          </span>{" "}
          you with
        </h2>
        <p className="w-full max-w-[556px] font-general text-sm font-normal leading-6 text-ink lg:text-base lg:leading-7 xl:text-lg xl:leading-[30px]">
          From branding and web design to content and digital marketing, we
          bring the right pieces together to help your business communicate
          clearly and grow with direction.
        </p>
      </header>

      <div className="relative z-10 mt-8 w-full px-0 md:mt-16 md:px-8 lg:px-12 xl:mt-24">
        <div className="mx-auto w-full max-w-[1344px] bg-coral py-6 md:rounded-[48px] md:px-6 md:py-16 xl:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 px-5 sm:grid-cols-2 md:px-0 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={`service-${index}`}
                className="flex h-full min-h-[383px] w-full flex-col items-start gap-6 rounded-[11px] border border-solid border-[#d8d8d8] bg-blush p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blush-deep">
                  <img
                    className="h-9 w-9 object-contain"
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <h3 className="font-lufga text-xl font-semibold leading-6 text-ink">
                  {service.title}
                </h3>
                <p className="flex-1 font-general text-base font-normal leading-6 text-ink">
                  {service.description}
                </p>
                <Link
                  className="font-lufga text-base font-medium leading-6 text-ink underline-offset-4 transition-opacity hover:opacity-70"
                  href={contactHref}
                >
                  Learn More→
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
