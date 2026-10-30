import { cn } from "../../lib/utils";

type BrushProps = {
  className?: string;
};

/**
 * The gold brush stroke used as an underline accent in the Figma design.
 * Sizes are controlled with width utilities; the height keeps the stroke shape.
 */
export const Brush = ({ className }: BrushProps): JSX.Element => (
  <img
    alt=""
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute left-1/2 top-full block -translate-x-1/2 select-none",
      className,
    )}
    src="/images/brush-underline-reach.svg"
  />
);
