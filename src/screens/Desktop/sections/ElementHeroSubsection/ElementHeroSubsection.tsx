import { Button } from "../../../../components/ui/button";

const heroActions = [
  {
    label: "Let's Talk About Your Business",
    className:
      "w-full rounded-xl bg-[#ff5757] px-7 py-4 text-white shadow-effect-shadow-small hover:bg-[#ff5757]/90 sm:w-auto",
  },
  {
    label: "Explore Our Work",
    className:
      "w-full rounded-xl border-[1.5px] border-[#fffdf0] px-7 py-4 text-[#fffdf0] shadow-effect-shadow-small hover:bg-[#fffdf0]/10 sm:w-auto",
  },
];

const WordUnderline = ({ src }: { src: string }) => (
  <img
    className="pointer-events-none absolute left-1/2 top-full -mt-[0.08em] h-[0.12em] w-[115%] max-w-none -translate-x-1/2"
    src={src}
    alt=""
    aria-hidden="true"
  />
);

export const ElementHeroSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch bg-[#fffdf0] px-4 pb-4 sm:px-6 sm:pb-6 lg:px-12 lg:pb-12">
      <div className="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[48px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="Business professionals examining information together"
          src="/images/hero-bg.jpg"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,5,13,0.92)_0%,rgba(6,16,38,0.62)_42%,rgba(6,16,38,0.18)_100%)]"
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[calc(50%_-_800px)] hidden h-[800px] w-[800px] -translate-x-1/2 -rotate-90 items-center justify-center text-center [font-family:'Lufga-Medium',Helvetica] text-xl font-medium leading-10 tracking-[0] text-white lg:flex"
        >
          Tell us your vision. We&apos;ll help you define the next steps.
        </p>
        <div className="relative z-10 flex min-h-[560px] w-full flex-col justify-end gap-6 px-6 pb-12 pt-24 sm:min-h-[720px] sm:px-10 sm:pb-16 lg:min-h-[1038px] lg:gap-8 lg:px-[124px] lg:pb-[150px] lg:pt-0">
          <h1 className="relative w-full max-w-[941px] [font-family:'Lufga-Medium',Helvetica] text-[clamp(34px,5.4vw,64px)] font-medium leading-[1.12] tracking-[-0.04em] text-[#fffdf0]">
            Let&apos;s help the right people find your business and make it{" "}
            <span className="relative inline-block">
              easier
              <WordUnderline src="/brush-underline---easier.svg" />
            </span>{" "}
            for them to{" "}
            <span className="relative inline-block">
              reach
              <WordUnderline src="/images/brush-underline-reach.svg" />
            </span>{" "}
            you.
          </h1>
          <p className="relative w-full max-w-[525px] [font-family:'General_Sans-Medium',Helvetica] text-base font-medium leading-7 tracking-[0] text-[#fffdf0] sm:text-lg sm:leading-[30px]">
            You&apos;ve built something valuable. Smotiva aligns your branding,
            website, and content to communicate your value clearly, strengthen
            your online presence, and make it easier for potential customers to
            connect with your business.
          </p>
          <div className="relative flex w-full flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:gap-6 lg:gap-12">
            {heroActions.map((action) => (
              <Button
                key={action.label}
                type="button"
                className={`h-auto gap-2.5 [font-family:'Lufga-SemiBold',Helvetica] text-base font-semibold leading-7 tracking-[0] ${action.className}`}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
        <img
          className="pointer-events-none absolute bottom-8 right-8 hidden h-[120px] w-[117px] object-cover lg:block lg:bottom-[149px] lg:right-[144px] lg:h-[172px] lg:w-[168px]"
          alt="Smotiva text support"
          src="/images/hero-badge.png"
        />
      </div>
    </section>
  );
};
