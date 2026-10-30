import { SectionBackgroundGraphics } from "../../../../components/site/SectionBackgroundGraphics";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, your audience and what you want to achieve.",
  },
  {
    number: "02",
    title: "Direct:",
    description:
      "We establish a clear direction for the work, so decisions are based on your goals rather than guesswork.",
  },
  {
    number: "03",
    title: "Connect:",
    description:
      "We bring the relevant parts of your brand, website and communication together.",
  },
  {
    number: "04",
    title: "Execute:",
    description:
      "We turn the plan into practical deliverables your business can use.",
  },
];

export const HowWeWorkSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-brand py-12 md:py-20 lg:py-24 xl:py-32">
      <div className="hidden lg:block">
        <SectionBackgroundGraphics
          tone="paleBlue"
          className="left-[56.736vw] top-[32.431vw]"
          positions={[
            { left: 198, top: 0 },
            { left: 140, top: 76 },
            { left: 70, top: 167 },
            { left: 0, top: 258 },
          ]}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 md:px-8 lg:px-12 xl:gap-8">
        <header className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="font-lufga text-[32px] font-semibold leading-[56px] text-cream lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]">
            How we work
          </h2>
          <p className="w-full max-w-[556px] font-lufga text-base font-normal leading-[30px] text-sky lg:text-lg">
            Understand. Direct. Connect. Execute.
          </p>
        </header>

        <div className="relative w-full max-w-[1200px]">
          <span
            aria-hidden="true"
            className="absolute left-[24px] right-[24px] top-[40px] hidden border-t-2 border-cream/30 lg:block"
          />
          <ol className="relative z-10 grid w-full grid-cols-1 gap-3 lg:grid-cols-4 lg:items-start lg:gap-8">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col items-center gap-4 p-2.5 text-center lg:items-start lg:text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#407ffe] font-general text-xl font-semibold leading-10 text-white">
                  {step.number}
                </span>
                <h3 className="font-lufga text-base font-semibold leading-8 text-cream lg:text-xl">
                  {step.title}
                </h3>
                <p className="max-w-[310px] font-general text-sm font-normal leading-6 text-sky lg:max-w-none lg:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p className="relative z-10 w-full max-w-[556px] text-center font-lufga text-base font-normal leading-[30px] text-sky lg:text-lg">
          The process may vary depending on the project, but the aim stays the
          same:{" "}
          <strong className="font-bold text-cream">
            work that has a clear purpose.
          </strong>
        </p>
      </div>
    </section>
  );
};
