import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type LightRaysCornerBackgroundProps = {
  className?: string;
};

const LightRaysCornerBackground = ({ className = "" }: LightRaysCornerBackgroundProps) => {
  return (
    <div className={cn("@container-size inset-0 -z-10 overflow-hidden pointer-events-none select-none", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-background mask-[radial-gradient(50%_50%_at_50%_0%,white_0%,transparent_100%)] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-primary)_20%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-primary)_10%,transparent)_1px,transparent_1px)] bg-size-[10cqw_10cqw]" />

      <div className="absolute -top-142.75 -left-93.25 w-285.5 h-[179cqh] rotate-[-38deg] overflow-hidden blur-lg mask-[radial-gradient(50%_50%,#000_0%,#000000f6_45%,transparent_100%)]">
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-17.5px)] w-8.75 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.85, transform: "rotate(-18deg)", animation: "rotated-ray-pulse 4s ease-in-out 0s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-17.5px)] w-8.75 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.775, transform: "rotate(-12deg)", animation: "rotated-ray-pulse 3.5s ease-in-out 0.5s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-10px)] w-5 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.65, transform: "scale(0.9) rotate(-5deg)", animation: "rotated-ray-pulse 5s ease-in-out 1.2s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-7.5px)] w-3.75 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.25, transform: "rotate(-3deg)", animation: "rotated-ray-pulse 3s ease-in-out 0.3s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-20px)] w-10 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.45, transform: "scale(0.79) rotate(0deg)", animation: "rotated-ray-pulse 4.5s ease-in-out 0.8s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-10px)] w-5 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.45, transform: "rotate(6deg)", animation: "rotated-ray-pulse 3.2s ease-in-out 1.5s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-17.5px)] w-8.75 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 0.65, transform: "scale(0.83) rotate(9deg)", animation: "rotated-ray-pulse 4.2s ease-in-out 0.2s infinite both" } as React.CSSProperties}
        />
        <div
          className="absolute -top-88 -bottom-230 left-[calc(50%-17.5px)] w-8.75 origin-top-right overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]"
          style={{ "--ray-opacity": 1, transform: "scale(0.9) rotate(14deg)", animation: "rotated-ray-pulse 3.8s ease-in-out 1s infinite both" } as React.CSSProperties}
        />

        <div className="absolute left-[calc(50%-599px)] -top-88 -bottom-11.5 w-299.5 opacity-[0.05] overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]" />
        <div className="absolute left-[calc(50%-432.5px)] -top-63 w-216.25 h-232.25 opacity-15 overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]" />
        <div className="absolute left-[calc(50%-432.5px)] -top-63 w-216.25 h-232.25 opacity-15 overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0%,transparent_100%)]" />
      </div>
    </div>
  );
};

export default LightRaysCornerBackground;
