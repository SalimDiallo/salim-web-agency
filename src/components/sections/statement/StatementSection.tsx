import GradientWordReveal from "@/components/animation/GradientWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

interface StatementSectionProps {
  tag?: string;
  text: string;
}

/**
 * A single large editorial statement, revealed word by word in a gradient.
 * Minimal copy, maximum impact — the anchor of the marketing narrative.
 */
const StatementSection = ({ tag, text }: StatementSectionProps) => {
  return (
    <section aria-label="Statement section" className="w-full max-w-6xl px-6 mx-auto py-24 md:py-36">
      {tag && (
        <AppearOnScroll variant="fade">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-primary" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{tag}</p>
          </div>
        </AppearOnScroll>
      )}

      <GradientWordReveal
        text={text}
        variant="slide-up"
        tag="h2"
        className="font-display text-4xl md:text-6xl 2xl:text-7xl font-semibold text-balance max-w-5xl"
      />
    </section>
  );
};

export default StatementSection;
