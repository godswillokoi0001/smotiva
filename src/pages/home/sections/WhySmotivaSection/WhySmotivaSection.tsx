import { Brush } from "../../../../components/site/Brush";
import { SectionBackgroundGraphics } from "../../../../components/site/SectionBackgroundGraphics";

const reasons = [
  {
    title: "We start with your business, not just the brief.",
    description:
      "A request for a logo, website or social media design may be the starting point. We also want to understand what you need that work to achieve.",
  },
  {
    title: "We look at the bigger picture.",
    description:
      "Your brand, website and communication influence how people experience your business. We consider how they fit together instead of treating every deliverable as a separate job.",
  },
  {
    title: "We explain things clearly.",
    description:
      "You shouldn't need to understand design or technology jargon to make decisions about your own business. We keep the conversation practical and straightforward.",
  },
  {
    title: "We create with purpose.",
    description:
      "Every project should have a reason behind it. We want the work to make sense for your business, your audience and the direction you're heading.",
  },
];

export const WhySmotivaSection = (): JSX.Element => {
  return (
    <section
      id="who-we-work-with"
      aria-labelledby="why-work-with-smotiva"
      className="relative w-full shrink-0 overflow-hidden bg-sky py-[62px] md:py-24"
    >
      <SectionBackgroundGraphics
        tone="blue"
        className="left-[61.944vw] top-[-4.722vw]"
        transform="matrix(-0.89, 0.46, 0.46, 0.89, 0, 0)"
        positions={[
          { left: 0, top: 90 },
          { left: 86, top: 131 },
          { left: 190, top: 180 },
          { left: 294, top: 230 },
        ]}
      />
      <SectionBackgroundGraphics
        tone="blue"
        className="left-[-66.944vw] top-[-10.903vw]"
        transform="rotate(27.13deg)"
        positions={[
          { left: 294, top: 90 },
          { left: 208, top: 131 },
          { left: 104, top: 180 },
          { left: 0, top: 230 },
        ]}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 md:gap-16 md:px-8 lg:gap-24 lg:px-12">
        <header className="flex flex-col items-center justify-center gap-5 text-center md:gap-8">
          <h2
            id="why-work-with-smotiva"
            className="relative font-lufga text-[32px] font-semibold leading-10 text-ink lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]"
          >
            Why work with{" "}
            <span className="relative inline-block">
              Smotiva?
              <Brush className="h-[6px] w-[188px]" />
            </span>
          </h2>
          <p className="w-full max-w-[556px] text-center font-general text-base font-normal leading-[30px] text-ink lg:text-lg lg:leading-7 xl:text-xl xl:leading-[30px]">
            We go beyond individual services to bring clarity, strategy, and
            consistency to every part of your brand&apos;s digital presence.
          </p>
        </header>

        <div className="grid w-full max-w-[1112px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="mx-auto flex h-full w-full max-w-[260px] flex-col items-start gap-6 rounded-[11px] border border-solid border-[#d8d8d8] bg-brand p-8 text-left md:max-w-none lg:h-[330px]"
            >
              <h3 className="w-full font-lufga text-xl font-semibold leading-6 text-cream">
                {reason.title}
              </h3>
              <p className="w-full font-general text-base font-normal leading-6 text-sky">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
