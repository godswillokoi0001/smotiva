import { Button } from '../../../../components/ui/button';
import { Brush } from '../../../../components/site/Brush';
import { CircularText } from '../../../../components/site/CircularText';

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-cream pb-8 pt-5 md:pb-10 md:pt-6 lg:pb-12 lg:pt-0">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="relative mx-auto w-full max-w-[1344px] lg:flex lg:min-h-[720px] lg:flex-col lg:justify-end lg:overflow-hidden lg:rounded-[48px] xl:min-h-[1038px]">
          <img
            className="absolute inset-0 hidden h-full w-full object-cover lg:block"
            alt="Business professionals examining information together"
            src="/images/hero-bg.jpg"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(2,5,13,0.94)_0%,rgba(3,9,22,0.72)_38%,rgba(6,16,38,0.16)_100%)] lg:block"
          />

          <div className="relative z-10 flex w-full flex-col items-center gap-8 text-center lg:items-start lg:gap-8 lg:px-16 lg:pb-20 lg:text-left xl:px-[124px] xl:pb-[110px]">
            <h1 className="relative w-full max-w-[326px] font-lufga text-[32px] font-medium leading-[43px] tracking-[-0.05em] text-ink md:max-w-[620px] md:text-[44px] md:leading-[54px] lg:max-w-[760px] lg:text-[52px] lg:leading-[62px] lg:text-cream xl:max-w-[941px] xl:text-[64px] xl:leading-[72px]">
              Let&apos;s help the right people find your business and make it{" "}
              <span className="relative inline-block">
                easier
                <Brush className="hidden h-[6px] w-[150px] lg:block xl:w-[181px]" />
              </span>{" "}
              for them to{" "}
              <span className="relative inline-block">
                reach you.
                <Brush className="mt-[0.04em] h-[6px] w-[170px]" />
              </span>
            </h1>

            <p className="w-full max-w-[318px] font-general text-sm font-medium leading-6 text-ink md:max-w-[560px] md:text-base md:leading-7 lg:max-w-[525px] lg:text-[17px] lg:leading-[28px] lg:text-cream xl:text-lg xl:leading-[30px]">
              You&apos;ve built something valuable. Smotiva aligns your branding,
              website, and content to communicate your value clearly, strengthen
              your online presence, and make it easier for potential customers
              to connect with your business.
            </p>

            <div className="flex w-full flex-col items-center gap-8 pt-2 lg:flex-row lg:items-start lg:gap-12 lg:pt-0">
              <Button
                type="button"
                className="h-[60px] w-full max-w-[285px] rounded-xl bg-coral px-7 font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small hover:bg-coral/90"
              >
                Let&apos;s Talk About Your Business
              </Button>
              <Button
                type="button"
                className="hidden h-[63px] rounded-xl border-[1.5px] border-cream bg-transparent px-7 font-lufga text-base font-semibold leading-7 text-cream shadow-effect-shadow-small hover:bg-cream/10 hover:text-cream lg:inline-flex"
              >
                Explore Our Work
              </Button>
            </div>

            <div className="relative mt-2 aspect-[318/297] w-full max-w-[318px] overflow-hidden rounded-[24px] md:max-w-[520px] lg:hidden">
              <img
                className="h-full w-full object-cover"
                alt="Business professionals examining information together"
                src="/images/hero-bg.jpg"
              />
              <CircularText className="absolute left-[52%] top-[48%] w-[44%]" />
            </div>
          </div>

          <CircularText className="absolute bottom-[149px] right-[144px] z-10 hidden w-[168px] lg:block" />
        </div>
      </div>
    </section>
  );
};
