import { Brush } from "./Brush";
import { contactHref } from "../../lib/navigation";
import { Link } from "../../lib/router";

export const CTA = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-cream px-5 pb-16 pt-6 md:px-8 md:py-[72px] lg:px-12"
    >
      <div className="relative mx-auto w-full max-w-[1356px] overflow-hidden rounded-[48px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/cta-bg.jpg"
          alt="Illustration of a team planning a brand and website project"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#061026]/45"
        />

        <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-5 py-12 md:px-12 md:py-20">
          <div className="flex w-full max-w-[708px] flex-col items-center justify-center gap-6">
            <h2 className="relative w-full max-w-[270px] text-center font-lufga text-[32px] font-medium leading-10 text-white md:max-w-[620px] md:text-[44px] md:leading-[56px] lg:max-w-[688px] lg:text-[52px] lg:leading-[64px] xl:text-[56px] xl:leading-[72px]">
              Let&apos;s make your business easier to{" "}
              <span className="relative inline-block">
                understand.
                <Brush className="hidden h-[6px] w-[220px] lg:block xl:w-[289px]" />
              </span>
            </h2>
            <p className="w-full max-w-[270px] text-center font-general text-lg font-normal leading-[27px] text-white md:max-w-[570px]">
              You&apos;ve put work into building your business. Let&apos;s make
              sure people can see its value, find what they need and know how to
              reach you.
              <br />
              Tell us what you&apos;re working toward, and let&apos;s figure out
              how your brand, website or digital presence can better support it.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8 py-0 md:flex-row md:items-start">
            <Link
              className="inline-flex h-[60px] w-[170px] items-center justify-center rounded-xl bg-coral px-4 font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small transition-colors hover:bg-coral/90 md:w-[285px]"
              href={contactHref}
            >
              <span className="md:hidden">Request Quote</span>
              <span className="hidden md:inline">
                Let&apos;s Talk About Your Business
              </span>
            </Link>
            <Link
              className="inline-flex h-[63px] w-[200px] items-center justify-center rounded-xl border-[1.5px] border-white px-7 font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small transition-colors hover:bg-white/10"
              href={contactHref}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
