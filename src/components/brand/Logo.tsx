import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface LogoProps {
  /** "default" for dark surfaces, "onPrimary" for the emerald footer. */
  tone?: "default" | "onPrimary";
  /** Show the "Web Studio" descriptor word next to the wordmark. */
  descriptor?: boolean;
  className?: string;
}

/**
 * SD — Salim Diallo brand lockup.
 * Wordmark "SD." with an emerald dot, plus a "Web Studio" descriptor
 * separated by a thin divider. Part of the Salim Diallo brand charter.
 */
const Logo = ({ tone = "default", descriptor = true, className }: LogoProps) => {
  const onPrimary = tone === "onPrimary";

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <span
        className={cn(
          "font-display text-2xl font-semibold tracking-tight leading-none",
          onPrimary ? "text-primary-foreground" : "text-foreground"
        )}
      >
        SD
        <span className={onPrimary ? "text-primary-foreground/70" : "text-primary"}>.</span>
      </span>

      {descriptor && (
        <span className="hidden sm:inline-flex items-center gap-3">
          <span className={cn("h-5 w-px", onPrimary ? "bg-primary-foreground/25" : "bg-border")} />
          <span
            className={cn(
              "text-[0.62rem] uppercase tracking-[0.3em] leading-none",
              onPrimary ? "text-primary-foreground/60" : "text-muted-foreground"
            )}
          >
            Web Studio
          </span>
        </span>
      )}
    </span>
  );
};

export default Logo;
