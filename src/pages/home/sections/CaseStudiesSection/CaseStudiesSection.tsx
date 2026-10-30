import { Link } from "../../../../lib/router";

const projectImages = [
  {
    alt: "Case study — brand identity on a cap",
    src: "/images/case-study-mock.png",
  },
];

export const CaseStudiesSection = (): JSX.Element => {
  return (
    <section
      id="case-studies"
      className="relative w-full bg-sky pb-10 pt-2 lg:bg-cream lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {projectImages.map((project, index) => (
            <figure
              key={index}
              className="relative w-full overflow-hidden rounded-[32px]"
            >
              <img
                className="h-full w-full object-cover"
                src={project.src}
                alt={project.alt}
              />
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-7 text-center lg:mt-14">
          <p className="w-full max-w-[366px] font-lufga text-xl font-medium leading-8 text-ink lg:text-2xl">
            Featured project: Rayto Prolog
          </p>
          <Link
            className="group relative inline-flex h-[59px] w-fit items-center justify-center rounded-xl border-[1.5px] border-ink px-7 font-general text-base font-medium leading-6 text-ink shadow-effect-shadow-small transition-colors hover:bg-ink hover:text-cream"
            href="/case-studies"
          >
            View Case Study→
          </Link>
        </div>
      </div>
    </section>
  );
};
