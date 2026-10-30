import { useId } from "react";
import { cn } from "../../lib/utils";

const MESSAGE = "Tell us your vision. We'll help you bring it to life.";
const AUTHOR = "SMOTIVA — BRANDING & WEB AGENCY";

type CircularTextProps = {
  className?: string;
};

/**
 * Curved "Tell us your vision..." badge laid over the hero artwork.
 */
export const CircularText = ({ className }: CircularTextProps): JSX.Element => {
  const pathId = useId();
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id={pathId}
          d={`M100,100 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>
      <text
        className="fill-white font-lufga text-[11.5px] font-medium"
        dominantBaseline="middle"
      >
        <textPath
          href={`#${pathId}`}
          startOffset="0%"
          textLength={circumference * 0.96}
          lengthAdjust="spacing"
        >
          {MESSAGE}
        {AUTHOR}
        </textPath>
      </text>
    </svg>
  );
};
