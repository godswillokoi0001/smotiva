import { cn } from "../../lib/utils";

type CircleTone = "coral" | "paleBlue" | "blue";

type CirclePosition = {
  /** Horizontal offset of the ring, in pixels of the 1090px-wide design group. */
  left: number;
  /** Vertical offset of the ring, in pixels of the 1150px-tall design group. */
  top: number;
};

type SectionBackgroundGraphicsProps = {
  tone: CircleTone;
  positions: CirclePosition[];
  className?: string;
  transform?: string;
};

const tones: Record<CircleTone, string> = {
  coral: "#ff5757",
  paleBlue: "#dbe7ff",
  blue: "#407ffe",
};

/**
 * Decorative ring clusters used behind a few sections. The group scales with the
 * viewport so the artwork keeps its proportions from mobile up to very wide screens.
 */
export const SectionBackgroundGraphics = ({
  tone,
  positions,
  className = "",
  transform,
}: SectionBackgroundGraphicsProps): JSX.Element => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute z-0", className)}
    style={{
      width: "clamp(320px, 75.694vw, 1090px)",
      height: "clamp(338px, 79.861vw, 1150px)",
      transform,
    }}
  >
    {positions.map((position, index) => (
      <div
        key={index}
        className="absolute aspect-square rounded-full"
        style={{
          width: "81.834%",
          left: `${(position.left / 1090) * 100}%`,
          top: `${(position.top / 1150) * 100}%`,
          backgroundColor: tones[tone],
          opacity: index === 0 ? 0.18 : 0.2,
        }}
      />
    ))}
  </div>
);
