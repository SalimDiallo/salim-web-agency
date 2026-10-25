import { Check } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type Metric = {
  value: string;
  title: string;
  features: string[];
};

const MetricsFeatureCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  metrics,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  metrics: Metric[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Metrics section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="fade">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>
        </AppearOnScroll>

        <WordByWordReveal
          text={title}
          variant={textAnimation}
          tag="h2"
          className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
        />

        <WordByWordReveal
          text={description}
          variant={textAnimation}
          tag="p"
          className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>}
              {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>}
            </div>
          </AppearOnScroll>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6 mx-auto">
        {metrics.map((metric, index) => (
          <AppearOnScroll key={metric.value} variant="slide-up" delay={index * 0.08} className="h-full">
            <div className="flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 h-full card rounded">
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-none truncate">{metric.value}</span>
                <span className="text-lg md:text-xl 2xl:text-2xl leading-tight truncate">{metric.title}</span>
              </div>

              <div className="flex flex-col gap-3 pt-5 border-t border-foreground/5">
                {metric.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 bg-primary text-primary-foreground rounded">
                      <Check className="size-3 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsFeatureCards;
