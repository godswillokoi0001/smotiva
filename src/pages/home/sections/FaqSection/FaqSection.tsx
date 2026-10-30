import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const leftQuestions = [
  {
    id: "what-does-smotiva-do",
    question: "What does Smotiva Digital Ltd do?",
    answer:
      "We're a digital agency helping businesses strengthen their brands and online presence through brand strategy, identity design, websites, content creation and digital marketing. Our goal is to help businesses reach more customers and make it easier for those customers to connect with them.",
  },
  {
    id: "need-all-services",
    question: "Do I need all your services to work with you?",
    answer:
      "No. Most clients start with the part that needs attention most, whether that's a logo, a website or help with their content. We'll only recommend what your business actually needs, and you can always add more later as things grow.",
  },
  {
    id: "existing-logo-website",
    question: "Can you help if I already have a logo or website?",
    answer:
      "Yes. If you already have a logo, website or other brand materials, we'll look at what's working and what isn't, then improve and build on it instead of starting over. Good work doesn't need to be thrown away to make progress.",
  },
  {
    id: "design-build-websites",
    question: "Do you design and build websites?",
    answer:
      "Yes. We handle both the design and the build, so your website is planned, designed and developed by the same team. That means it looks the way it should, works properly on every device and clearly explains what you do.",
  },
  {
    id: "split-kanji-theme",
    question: "Can I split the page based on the Kanji of my project theme?",
    answer:
      "Yes, we can help with that. Once you share the theme of your project, we will confirm the exact Kanji when completing the project, so your page splits cleanly against that theme and the visual direction stays consistent.",
  },
];

const rightQuestions = [
  {
    id: "who-work-with",
    question: "Who do you work with?",
    answer:
      "We work with small and growing businesses that have something valuable to offer but aren't being understood clearly online. Whether you're well established or just getting started, if clarity and direction would help you reach more customers, we can help.",
  },
  {
    id: "service-cost",
    question: "How much do your services cost?",
    answer:
      "Every project is different, so we quote based on what your business actually needs rather than charging a fixed package price. After a short conversation about your goals, we'll give you a clear scope and price before any work begins, so there are no surprises.",
  },
  {
    id: "get-started",
    question: "How do we get started?",
    answer:
      "Start by telling us about your business and what you're working toward. We'll talk things through, understand where you are and recommend a clear next step, with no pressure and no jargon.",
  },
];

const PlusIcon = () => (
  <svg
    className="faq-plus block h-11 w-11"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="44" height="44" rx="22" fill="#061026" />
    <path
      d="M29 21H23V15C23 14.735 22.8946 14.48 22.7071 14.293C22.5196 14.105 22.2652 14 22 14C21.7348 14 21.4804 14.105 21.2929 14.293C21.1054 14.48 21 14.735 21 15V21H15C14.7348 21 14.4804 21.105 14.2929 21.293C14.1054 21.48 14 21.735 14 22C14 22.265 14.1054 22.52 14.2929 22.707C14.4804 22.895 14.7348 23 15 23H21V29C21 29.265 21.1054 29.52 21.2929 29.707C21.4804 29.895 21.7348 30 22 30C22.2652 30 22.5196 29.895 22.7071 29.707C22.8946 29.52 23 29.265 23 29V23H29C29.2652 23 29.5196 22.895 29.7071 22.707C29.8946 22.52 30 22.265 30 22C30 21.735 29.8946 21.48 29.7071 21.293C29.5196 21.105 29.2652 21 29 21Z"
      fill="#FFFDF0"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    className="faq-minus absolute inset-0 hidden h-11 w-11"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="44" height="44" rx="22" fill="#061026" />
    <path
      d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
      fill="#FFFDF0"
    />
  </svg>
);

const QuestionItem = ({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) => (
  <AccordionItem value={id} className="border-b border-ink">
    <AccordionTrigger className="flex items-center gap-4 px-[30px] py-[30px] text-left hover:no-underline sm:gap-[26px] [&>svg]:hidden [&[data-state=open]_.faq-minus]:block [&[data-state=open]_.faq-plus]:hidden">
      <span className="flex-1 font-lufga text-xl font-semibold leading-[30px] text-ink lg:text-lg lg:leading-[27px]">
        {question}
      </span>
      <span className="relative block h-11 w-11 shrink-0">
        <PlusIcon />
        <MinusIcon />
      </span>
    </AccordionTrigger>
    <AccordionContent className="px-[30px] pb-[30px] pt-0">
      <p className="font-general text-base font-normal leading-6 text-brand lg:text-base lg:leading-6">
        {answer}
      </p>
    </AccordionContent>
  </AccordionItem>
);

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full bg-cream px-5 py-8 md:px-8 md:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10">
        <header className="flex w-full flex-col items-center gap-3.5 text-center">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-3.5 xl:px-[150px]">
            <h2 className="w-full text-center font-lufga text-[32px] font-semibold leading-[41px] text-ink md:text-[34px] md:leading-[48px] lg:text-[38px] lg:leading-[57px]">
              Frequently Asked Questions
            </h2>
            <p className="w-full text-center font-general text-base font-normal leading-[30px] text-ink lg:text-lg lg:leading-[27px]">
              Got questions? We&apos;ve got answers. Check out our frequently
              asked questions section to find valuable insights into our
              processes, pricing, and more. Transparency is at the core of our
              client interactions.
            </p>
          </div>
        </header>

        <div className="flex w-full max-w-[1280px] flex-col items-stretch justify-center lg:flex-row lg:items-start lg:gap-[94px]">
          <div className="flex min-w-0 flex-1 flex-col">
            <Accordion
              type="single"
              collapsible
              defaultValue="what-does-smotiva-do"
              className="w-full"
            >
              {leftQuestions.map((item) => (
                <QuestionItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Accordion>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <Accordion type="single" collapsible className="w-full">
              {rightQuestions.map((item) => (
                <QuestionItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
