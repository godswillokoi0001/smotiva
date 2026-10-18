import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projectImages = ["mock-1", "mock-2", "mock-3", "mock-4"];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-4 px-4 py-10 sm:px-10 sm:py-12 lg:px-20">
      <div className="grid w-full max-w-[1356px] grid-cols-1 gap-4 p-2.5 sm:grid-cols-2 sm:gap-8">
        {projectImages.map((id) => (
          <Card
            key={id}
            className="relative overflow-hidden rounded-[24px] border-0 bg-transparent p-0 shadow-none sm:rounded-[32px]"
          >
            <CardContent className="p-0">
              <img
                className="aspect-[1250/890] h-auto w-full rounded-[24px] object-cover sm:rounded-[32px]"
                src="/images/case-study-mock.png"
                alt="Smotiva project mockup"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 p-2.5 text-center">
        <p className="w-full max-w-[366px] font-h5 text-[length:var(--h5-font-size)] font-[number:var(--h5-font-weight)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] text-[#061026] [font-style:var(--h5-font-style)]">
          Featured project: Rayto Prolog
        </p>
        <Button
          type="button"
          variant="outline"
          className="h-auto rounded-xl border-[1.5px] border-[#061026] px-7 py-4 font-['General_Sans-Medium',Helvetica] text-base font-medium leading-6 text-[#061026] shadow-effect-shadow-small hover:bg-transparent hover:text-[#061026]"
        >
          View Case Study→
        </Button>
      </div>
    </section>
  );
};
