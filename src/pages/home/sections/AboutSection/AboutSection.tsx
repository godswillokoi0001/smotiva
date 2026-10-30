import { Brush } from '../../../../components/site/Brush';
import { SectionBackgroundGraphics } from '../../../../components/site/SectionBackgroundGraphics';
import { Link } from '../../../../lib/router';

export const AboutSection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-brand"
    >
      <SectionBackgroundGraphics
        tone="paleBlue"
        className="left-[36.944vw] top-[38.059vw]"
        positions={[
          { left: 2526, top: 90 },
          { left: 2454, top: 170 },
          { left: 2310, top: 440 },
          { left: 2170, top: 590 },
        ]}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-start gap-12 px-5 pb-8 pt-11 md:gap-14 md:px-8 md:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.14fr)] lg:items-center lg:gap-[86px] lg:py-24">
        <div className="relative flex w-full max-w-[500px] flex-col items-start gap-8">
          <h2 className="w-[251px] shrink-0 font-lufga text-[32px] font-semibold leading-[56px] text-cream lg:w-full lg:max-w-[450px] lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]">
            Meet Smotiva
          </h2>
          <h3 className="relative w-full font-lufga text-xl font-medium leading-8 text-cream lg:max-w-[366px] lg:text-2xl lg:leading-8">
            A digital agency that looks beyond the design.
            <Brush className="absolute right-0 top-[97%] h-[6px] w-[152px] lg:w-[170px]" />
          </h3>
          <div className="relative flex w-full flex-col gap-6 font-general text-base font-normal leading-[30px] text-sky lg:max-w-[500px] lg:text-[17px] lg:leading-[28px] xl:text-lg xl:leading-[30px]">
            <p>
              <span className="font-semibold">Smotiva Digital Ltd</span> is a
              digital agency helping businesses strengthen their brands, improve
              their online presence and              connect with their customers through
              strategy, design, websites, content and digital marketing.
            
            </p>
            <p>
              We start by understanding what your business wants to achieve,
              then bring the right pieces together. The goal is to help people
              understand what you offer, see why it matters and find it easier
              to take the next step.
            </p>
          </div>
          <Link
            className="inline-flex h-[59px] w-fit items-center justify-center rounded-xl border-[1.5px] border-cream bg-transparent px-7 font-general text-base font-medium leading-6 text-cream shadow-effect-shadow-small transition-colors hover:bg-cream hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            href="/about"
          >
            Get to Know Smotiva→
          </Link>
        </div>

        <div className="relative mt-6 w-full overflow-hidden rounded-[16px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] lg:mt-0 lg:max-w-[570px] lg:rounded-[32px] lg:shadow-none xl:max-w-[570px]">
          <img
            className="h-full w-full -scale-x-100 object-cover"
            src="/images/meet-smotiva.jpg"
            alt="Illustration of the Smotiva team talking through a project"
          />
        </div>
      </div>
    </section>
  );
};
