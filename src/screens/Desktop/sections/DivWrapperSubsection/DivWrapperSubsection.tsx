import type { ReactNode } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

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
    icon: "/images/icons/creative%20(1)%201.svg",
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
    icon: "/images/icons/content-creator%201.svg",
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
    icon: "/images/icons/print%201.svg",
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

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 self-stretch bg-[#fffdf0] px-6 py-12 sm:gap-16 sm:px-12 sm:py-16 lg:gap-24 lg:py-24">
      <header className="relative flex flex-col items-center justify-center gap-5 text-center sm:gap-8">
        <h2 className="relative mt-[-1px] font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#061026] [font-style:var(--h2-font-style)]">
          What we can help you with
        </h2>
        <img
          className="pointer-events-none -mt-3 h-[6px] w-[129px] sm:-mt-4"
          src="/brush-underline---reach-2.svg"
          alt="Brush underline"
        />
        <p className="w-full max-w-[556px] font-['General_Sans-Regular',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#061026] sm:text-lg sm:leading-[30px]">
          From branding and web design to content and digital marketing, we
          bring the right pieces together to help your business communicate
          clearly and grow with direction.
        </p>
      </header>
      <div className="flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[32px] bg-[#ff5757] px-2.5 py-10 sm:rounded-[48px] sm:py-16 lg:py-24">
        <div className="flex w-full max-w-[1356px] flex-wrap items-stretch justify-center gap-8 p-2.5">
          {services.map((service, index) => (
            <Card
              key={`service-${index}`}
              className="flex min-h-[280px] w-full max-w-[352px] flex-col overflow-hidden rounded-[11px] border border-solid border-[#d7d7d7] bg-[#ffb1b1] shadow-none sm:min-h-[383px]"
            >
              <CardContent className="flex h-full flex-col items-start gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[39px] bg-[#fe7575]">
                  <img
                    className="h-9 w-9 object-contain"
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <h3 className="w-fit font-['Lufga-SemiBold',Helvetica] text-xl font-semibold leading-6 tracking-[0] text-[#061026]">
                  {service.title}
                </h3>
                <p className="self-stretch font-['General_Sans-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#061026]">
                  {service.description}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="mt-auto h-auto w-fit justify-start p-0 font-['Lufga-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#061026] hover:bg-transparent hover:text-[#061026]"
                >
                  Learn More→
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
