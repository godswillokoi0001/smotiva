import { Card, CardContent } from "../../../../components/ui/card";

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

export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="relative left-1/2 flex w-screen -translate-x-1/2 self-start flex-col items-center justify-center gap-8 bg-blue-ribbon-primary px-6 py-16 sm:py-24 md:px-12 md:py-32">
      <header className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#fffdf0] [font-style:var(--h2-font-style)]">
          How we work
        </h2>
        <p className="w-full max-w-[556px] font-['Lufga-Regular',Helvetica] text-lg font-normal leading-[30px] text-[#dae6ff]">
          Understand. Direct. Connect. Execute.
        </p>
      </header>
      <div className="relative flex w-full max-w-[1200px] items-start justify-center p-2.5">
        <img
          className="pointer-events-none absolute left-[45px] top-[38px] z-0 hidden h-0.5 w-[905px] max-w-[calc(100%_-_90px)] md:block"
          src="/line-1.svg"
          alt="Line"
        />
        <div className="z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <Card
              key={step.number}
              className="relative rounded-none border-0 bg-transparent p-2.5 shadow-none"
            >
              <div className="absolute left-0 top-1.5 h-12 w-12 rounded-3xl bg-[#3f7efd]" />
              <CardContent className="relative flex h-full flex-col items-start gap-4 p-0">
                <div className="relative mt-[-1px] w-fit font-['General_Sans-Semibold',Helvetica] text-xl font-normal leading-10 tracking-[0] text-colorbasewhite">
                  {step.number}
                </div>
                <h3 className="self-stretch font-['Lufga-SemiBold',Helvetica] text-xl font-semibold leading-8 tracking-[0] text-[#fffdf0]">
                  {step.title}
                </h3>
                <p className="self-stretch font-['General_Sans-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#dae6ff]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <p className="w-full max-w-[556px] text-center font-['Lufga-Regular',Helvetica] text-lg font-normal leading-[30px] tracking-[0] text-[#dae6ff]">
        The process may vary depending on the project, but the aim stays the
        same:{" "}
        <strong className="font-['Lufga-Bold',Helvetica] font-bold text-[#fffdf0]">
          work that has a clear purpose.
        </strong>
      </p>
    </section>
  );
};
