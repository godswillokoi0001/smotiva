import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const ctaButtons = [
  {
    label: "Request Quote",
    className:
      "h-auto w-full rounded-xl bg-[#ff5757] px-7 py-4 text-base font-semibold leading-7 text-white shadow-effect-shadow-small hover:bg-[#ff5757]/90 sm:w-auto",
  },
  {
    label: "Contact Our Team",
    className:
      "h-auto w-full rounded-xl border-[1.5px] border-white bg-transparent px-7 py-4 text-base font-semibold leading-7 text-colorbasewhite shadow-effect-shadow-small hover:bg-white/10 hover:text-colorbasewhite sm:w-auto",
  },
];

export const FinalCtaContenetWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full justify-center px-4 py-12 sm:px-6 sm:py-[72px]">
      <Card className="relative w-full max-w-[1356px] overflow-hidden rounded-[24px] border-0 bg-transparent shadow-none sm:rounded-[36px] lg:rounded-[48px]">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/images/cta-bg.jpg"
          alt="Warehouse staff"
        />
        <CardContent className="relative z-10 flex flex-col items-center gap-8 px-6 py-14 sm:min-h-[599px] sm:gap-12 sm:px-12 sm:py-20">
          <div className="relative flex w-full max-w-[708px] flex-col items-center justify-center gap-6 p-2.5">
            <h2 className="relative self-stretch text-center font-['Lufga-Medium',Helvetica] text-[36px] font-medium leading-[44px] tracking-[0] text-colorbasewhite sm:text-[48px] sm:leading-[60px] lg:text-[56px] lg:leading-[72px]">
              Let&apos;s make your business easier to{" "}
              <span className="relative inline-block">
                understand.
                <img
                  className="pointer-events-none absolute left-1/2 top-full -mt-[0.08em] h-[0.12em] w-[105%] max-w-none -translate-x-1/2"
                  src="/images/brush-underline-reach.svg"
                  alt=""
                  aria-hidden="true"
                />
              </span>
            </h2>
            <p className="relative w-full max-w-[570px] text-center font-['General_Sans-Regular',Helvetica] text-base font-normal leading-7 tracking-[0] text-colorbasewhite sm:text-lg sm:leading-[27px]">
              You&apos;ve put work into building your business. Let&apos;s make
              sure people can see its value, find what they need and know how to
              reach you.
              <br />
              Tell us what you&apos;re working toward, and let&apos;s figure out
              how your brand, website or digital presence can better support it.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center gap-4 py-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:gap-8 sm:py-4">
            {ctaButtons.map((button) => (
              <Button
                key={button.label}
                type="button"
                className={button.className}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
