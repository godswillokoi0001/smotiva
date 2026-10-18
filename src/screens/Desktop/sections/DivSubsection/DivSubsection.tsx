import { Button } from "../../../../components/ui/button";

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-10 bg-[#fffdf0] px-6 py-12 sm:px-10 md:flex-row xl:gap-[86px] xl:px-40">
      <div className="flex min-w-0 flex-1 grow flex-col items-start gap-[285px]">
        <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-0.5">
          <h2 className="mt-[-1px] w-full max-w-[450px] font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#061026] [font-style:var(--h2-font-style)]">
            Work that brings ideas to life
          </h2>
          <img
            className="h-[6px] w-[152px]"
            src="/images/brush-underline-reach-2.svg"
            alt="Brush underline"
          />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 grow flex-col items-start gap-8 overflow-hidden rounded-[40px] p-2.5">
        <p className="mt-[-1px] w-full max-w-[500px] font-normal text-base leading-7 tracking-[0] text-[#061026] [font-family:'General_Sans-Regular',Helvetica] sm:text-lg sm:leading-[30px]">
          Every business has a different story to tell. Our job is to understand
          that story and help bring it to life through thoughtful branding,
          design and digital experiences.
          <br />
          Explore selected work to see how we approach real business needs, from
          brand identity to website design.
        </p>
        <Button
          type="button"
          className="h-auto w-full max-w-[251px] justify-around gap-2.5 rounded-xl bg-blue-ribbon-primary px-7 py-4 text-base font-normal leading-7 text-white shadow-effect-shadow-small hover:bg-blue-ribbon-primary/90"
        >
          <span className="font-semibold">Explore All Case Studies</span>
          <span className="[font-family:'Lufga-Regular',Helvetica]">→</span>
        </Button>
      </div>
    </section>
  );
};
