import { Button } from "../../../../components/ui/button";

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 self-start bg-blue-ribbon-primary">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-6 py-12 sm:gap-12 sm:px-10 sm:py-16 xl:flex-row xl:gap-0 xl:px-40 xl:py-24">
        <div className="relative flex w-full max-w-[500px] flex-[0_0_auto] flex-col items-start justify-center gap-8">
          <h2 className="relative w-full max-w-[450px] font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#fffdf0] [font-style:var(--h2-font-style)]">
            Meet{" "}
            <span className="relative inline-block">
              Smotiva
              <img
                className="pointer-events-none absolute left-1/2 top-full -mt-[0.08em] h-[0.12em] w-[95%] max-w-none -translate-x-1/2"
                src="/brush-underline---reach.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
          </h2>
          <h3 className="relative w-full max-w-[366px] font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-[#fffdf0] [font-style:var(--h5-font-style)]">
            A digital agency that looks beyond the design.
          </h3>
          <p className="relative w-full max-w-[500px] [font-family:'General_Sans-Regular',Helvetica] text-lg font-normal leading-[30px] tracking-[0] text-[#dae6ff]">
            <span>Smotiva Digital Ltd</span>
            <span>
              {" "}
              is a digital agency helping businesses strengthen their brands,
              improve their online presence and connect with more customers
              through strategy, design, websites, content and digital marketing.
              <br />
              We start by understanding what your business wants to achieve,
              then bring the right pieces together. The goal is to help people
              understand what you offer, see why it matters and find it easier
              to take the next step.
            </span>
          </p>
          <Button
            type="button"
            className="h-auto rounded-xl border-[1.5px] border-solid border-[#fffdf0] bg-transparent px-7 py-4 shadow-effect-shadow-small hover:bg-[#fffdf0] hover:text-blue-ribbon-primary"
          >
            <span className="[font-family:'General_Sans-Medium',Helvetica] text-base font-medium leading-6 tracking-[0]">
              Get to Know Smotiva→
            </span>
          </Button>
        </div>
        <div className="relative h-[280px] w-full max-w-[570px] shrink-0 overflow-hidden rounded-[24px] sm:h-[380px] sm:rounded-[32px] xl:h-[464px]">
          <img
            className="absolute left-0 top-0 h-full w-[calc(100%_+_98px)] object-cover"
            src="/images/meet-smotiva.jpg"
            alt="Editorial illustration"
          />
        </div>
      </div>
    </section>
  );
};
