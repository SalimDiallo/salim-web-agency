import WordByWordReveal from "@/components/animation/WordByWordReveal";
import CardEdgeGlow from "@/components/animation/CardEdgeGlow";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import type { LucideIcon } from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

interface FeaturesBorderGlowProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesBorderGlow = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  textAnimation,
}: FeaturesBorderGlowProps) => {
  return (
    <section aria-label="Features border glow section" className="flex flex-col gap-8 md:gap-10 py-20">
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

      <AppearOnScroll variant="slide-up">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6 mx-auto">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <AppearOnScroll key={feature.title} variant="slide-up" delay={index * 0.08} className="h-full">
                <CardEdgeGlow className="flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 mt-0.5 h-full min-h-72 md:min-h-84 2xl:min-h-96 card">
                  <div className="flex items-center justify-center size-12 md:size-14 2xl:size-16 bg-primary text-primary-foreground rounded-full">
                    <FeatureIcon className="size-4 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight text-balance">{feature.title}</h3>
                    <p className="text-sm md:text-base 2xl:text-lg leading-snug text-balance">{feature.description}</p>
                  </div>
                </CardEdgeGlow>
              </AppearOnScroll>
            );
          })}
        </div>
      </AppearOnScroll>
    </section>
  );
};

export default FeaturesBorderGlow;
