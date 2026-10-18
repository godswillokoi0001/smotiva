import { Card, CardContent } from "../../../../components/ui/card";

const reasons = [
  {
    title: "We start with your business, not just the brief.",
    description:
      "A request for a logo, website or social media design may be the starting point. We also want to understand what you need that work to achieve.",
    contentClassName: "justify-start",
  },
  {
    title: "We look at the bigger picture.",
    description:
      "Your brand, website and communication influence how people experience your business. We consider how they fit together instead of treating every deliverable as a separate job.",
    contentClassName: "justify-center",
  },
  {
    title: "We explain things clearly.",
    description:
      "You shouldn&apos;t need to understand design or technology jargon to make decisions about your own business. We keep the conversation practical and straightforward.",
    contentClassName: "justify-start",
  },
  {
    title: "We create with purpose.",
    description:
      "Every project should have a reason behind it. We want the work to make sense for your business, your audience and the direction you&apos;re heading.",
    contentClassName: "justify-start",
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="why-work-with-smotiva"
      className="relative left-1/2 flex w-screen shrink-0 -translate-x-1/2 self-start flex-col items-center justify-center gap-12 overflow-hidden bg-[#dae6ff] px-6 py-16 sm:gap-16 sm:px-12 md:py-24 lg:gap-24"
    >
      <header className="relative flex flex-col items-center justify-center gap-5 text-center sm:gap-8">
        <h2
          id="why-work-with-smotiva"
          className="relative w-fit max-w-full font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#061026] [font-style:var(--h2-font-style)]"
        >
          Why work with{" "}
          <span className="relative inline-block">
            Smotiva?
            <img
              className="pointer-events-none absolute left-1/2 top-full -mt-[0.08em] h-[0.12em] w-[95%] max-w-none -translate-x-1/2"
              src="/images/brush-underline-reach-2.svg"
              alt=""
              aria-hidden="true"
            />
          </span>
        </h2>
        <p className="relative w-full max-w-[556px] text-center font-['General_Sans-Regular',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#061026] sm:text-xl sm:leading-[30px]">
          We go beyond individual services to bring clarity, strategy, and
          consistency to every part of your brand&apos;s digital presence.
        </p>
      </header>
      <div className="grid w-full max-w-[1112px] grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <Card
            key={reason.title}
            className="h-full w-full overflow-hidden rounded-[11px] border border-solid border-[#d7d7d7] bg-blue-ribbon-primary p-0 text-left shadow-none"
          >
            <CardContent
              className={`flex h-full min-h-[240px] flex-col items-start gap-6 p-8 lg:min-h-[350px] ${reason.contentClassName}`}
            >
              <h3 className="relative self-stretch font-['Lufga-SemiBold',Helvetica] text-xl font-semibold leading-6 tracking-[0] text-[#fffdf0]">
                {reason.title}
              </h3>
              <p className="relative self-stretch font-['General_Sans-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#dae6ff]">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
