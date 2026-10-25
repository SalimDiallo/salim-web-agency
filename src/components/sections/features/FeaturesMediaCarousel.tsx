"use client";

import type { LucideIcon } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import LoopCarousel from "@/components/animation/LoopCarousel";

type FeatureItem = {
  title: string;
  description: string;
  buttonIcon: LucideIcon;
  buttonHref?: string;
  buttonOnClick?: () => void;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesMediaCarouselProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeatureMediaCarouselCard = ({ item }: { item: FeatureItem }) => {
  const handleClick = item.buttonOnClick;
  const Icon = item.buttonIcon;

  return (
    <div className="relative overflow-hidden aspect-square md:aspect-3/2 rounded">
      {item.videoSrc ? (
        <video src={item.videoSrc} className="w-full h-full object-cover absolute inset-0" autoPlay loop muted playsInline />
      ) : (
        <img src={item.imageSrc} alt="" className="w-full h-full object-cover absolute inset-0" />
      )}
      <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex items-center justify-between gap-5 p-4 xl:p-5 2xl:p-6 card rounded backdrop-blur-sm">
        <div className="flex flex-col gap-2 min-w-0">
          <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight truncate">{item.title}</h3>
          <p className="text-sm md:text-base 2xl:text-lg leading-snug truncate">{item.description}</p>
        </div>
        <a
          href={item.buttonHref}
          onClick={handleClick}
          aria-label="View more"
          className="flex items-center justify-center shrink-0 size-9 cursor-pointer btn-primary bg-primary text-primary-foreground rounded-full"
        >
          <Icon className="size-4 text-primary-foreground" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};

const FeaturesMediaCarousel = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesMediaCarouselProps) => {
  return (
    <section aria-label="Features section" className="w-full py-20">
      <div className="flex flex-col w-full gap-8 md:gap-10">
        <div className="flex flex-col items-center w-full max-w-6xl px-6 mx-auto gap-2">
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

        <LoopCarousel>
          {items.map((item) => (
            <FeatureMediaCarouselCard key={item.title} item={item} />
          ))}
        </LoopCarousel>
      </div>
    </section>
  );
};

export default FeaturesMediaCarousel;
