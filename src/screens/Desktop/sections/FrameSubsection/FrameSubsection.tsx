import { Card, CardContent } from "../../../../components/ui/card";

const paragraphs = [
  `Your business has grown, but your brand still looks like it did when you started.  Your website, social media and other materials don't feel like they belong to the same business.`,
  `You've paid for designs or a website, but you're still the one explaining what makes your business different. People come across your business, but they don't quite understand what you do or why they should choose you. And even when they do, reaching you isn't always easy.`,
  `You know something needs to change, but you're not sure where to start. These problems don't always mean you need to start over. Sometimes, your business simply needs a clearer direction and a better way to connect with the people you want to reach. That's where Smotiva comes in.`,
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="familiar-heading"
      className="relative flex w-full items-start px-6 py-12 sm:px-10 sm:py-16 lg:px-40 xl:min-h-[566px]"
    >
      <img
        src="/images/blinking-brush-arrow.svg"
        alt="Blinking brush arrow"
        className="pointer-events-none absolute left-[558px] top-[53px] hidden h-[89px] w-[137px] lg:block"
      />
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="grid w-full grid-cols-1 gap-12 p-0 xl:grid-cols-[450px_500px] xl:justify-between xl:gap-0">
          <h2
            id="familiar-heading"
            className="font-h2 text-[length:var(--h2-font-size)] font-[number:var(--h2-font-weight)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-[#061026] [font-style:var(--h2-font-style)]"
          >
            Does any of this sound familiar?
          </h2>
          <div className="space-y-[30px] [font-family:'General_Sans-Regular',Helvetica] text-lg font-normal leading-[30px] tracking-[0] text-[#061026]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
