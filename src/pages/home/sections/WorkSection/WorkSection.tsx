import { Brush } from "../../../../components/site/Brush";
import { Link } from "../../../../lib/router";

export const WorkSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-sky lg:bg-cream">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 pb-8 pt-10 md:px-8 md:py-14 lg:flex-row lg:items-start lg:justify-between lg:gap-[86px] lg:py-12">
        <div className="w-full lg:max-w-[470px]">
          <h2 className="relative font-lufga text-[32px] font-semibold leading-10 text-ink lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]">
            Work that brings{" "}
            <span className="relative inline-block">
              ideas to life
              <Brush className="h-[6px] w-[152px]" />
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:max-w-[527px]">
          <p className="w-full font-general text-base font-normal leading-[30px] text-ink lg:text-base lg:leading-7 xl:text-lg xl:leading-[30px]">
            Every business has a different story to tell. Our job is to
            understand that story and help bring it to life through thoughtful
            branding, design and digital experiences.
            <br className="hidden lg:block" /> Explore selected work to see how
            we approach real business needs, from brand identity to website
            design.
          </p>
          <Link
            className="inline-flex h-[60px] w-fit items-center justify-between gap-2.5 whitespace-nowrap rounded-xl bg-brand px-7 font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small transition-colors hover:bg-brand/90 lg:w-[251px]"
            href="/case-studies"
          >
            <span>Explore All Case Studies</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
