import { SectionBackgroundGraphics } from "../../../../components/site/SectionBackgroundGraphics";

const paragraphs = [
  `Your business has grown, but your brand still looks like it did when you started. Your website, social media and other materials don't feel like they belong to the same business.`,
  `You've paid for designs or a website, but you're still the one explaining what makes your business different. People come across your business, but they don't quite understand what you do or why they should choose you. And even when they do, reaching you isn't always easy.`,
  `You know something needs to change, but you're not sure where to start. These problems don't always mean you need to start over. Sometimes, your business simply needs a clearer direction and a better way to connect with the people you want to reach. That's where Smotiva comes in.`,
];

export const ProblemsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="familiar-heading"
      className="relative w-full overflow-hidden bg-cream"
    >
      <div className="hidden lg:block">
        <SectionBackgroundGraphics
          tone="coral"
          className="left-[-33.611vw] top-[14.722vw]"
          positions={[
            { left: 198, top: 0 },
            { left: 140, top: 76 },
            { left: 70, top: 167 },
            { left: 0, top: 258 },
          ]}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 pb-8 pt-2 md:px-8 md:py-16 lg:py-[64px]">
        <img
          src="/images/blinking-brush-arrow.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[35.5%] top-[62px] hidden h-[89px] w-[137px] lg:block"
        />
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[450px_minmax(0,500px)] lg:justify-between lg:gap-0">
          <h2
            id="familiar-heading"
            className="w-[250px] font-lufga text-[32px] font-semibold leading-10 text-ink lg:w-full lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]"
          >
            Does any of this sound familiar?
          </h2>
          <div className="flex flex-col gap-6 text-sm font-normal leading-6 text-ink md:text-base md:leading-7 lg:gap-[30px] lg:text-[17px] lg:leading-[28px] xl:text-lg xl:leading-[30px]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
