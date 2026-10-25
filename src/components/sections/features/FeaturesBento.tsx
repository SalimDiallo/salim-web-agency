import WordByWordReveal from "@/components/animation/WordByWordReveal";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import InfoCardMarquee from "@/components/display/InfoCardMarquee";
import TiltedStackCards from "@/components/display/TiltedStackCards";
import AnimatedBarChart from "@/components/display/AnimatedBarChart";
import OrbitingIcons from "@/components/display/OrbitingIcons";
import IconTextMarquee from "@/components/display/IconTextMarquee";
import ChatMarquee from "@/components/display/ChatMarquee";
import ChecklistTimeline from "@/components/display/ChecklistTimeline";
import MediaStack from "@/components/display/MediaStack";
import type { LucideIcon } from "lucide-react";
import StaggerText from "@/components/animation/StaggerText";

type FeatureCard = { title: string; description: string } & (
  | { bentoComponent: "info-card-marquee"; infoCards: { icon: LucideIcon; label: string; value: string }[] }
  | { bentoComponent: "tilted-stack-cards"; stackCards: [{ icon: LucideIcon; title: string; subtitle: string; detail: string }, { icon: LucideIcon; title: string; subtitle: string; detail: string }, { icon: LucideIcon; title: string; subtitle: string; detail: string }] }
  | { bentoComponent: "animated-bar-chart" }
  | { bentoComponent: "orbiting-icons"; centerIcon: LucideIcon; orbitIcons: LucideIcon[] }
  | { bentoComponent: "icon-text-marquee"; centerIcon: LucideIcon; marqueeTexts: string[] }
  | { bentoComponent: "chat-marquee"; aiIcon: LucideIcon; userIcon: LucideIcon; exchanges: { userMessage: string; aiResponse: string }[]; placeholder: string }
  | { bentoComponent: "checklist-timeline"; heading: string; subheading: string; checklistItems: [{ label: string; detail: string }, { label: string; detail: string }, { label: string; detail: string }]; completedLabel: string }
  | { bentoComponent: "media-stack"; mediaItems: [{ imageSrc?: string; videoSrc?: string }, { imageSrc?: string; videoSrc?: string }, { imageSrc?: string; videoSrc?: string }] }
);

const getBentoComponent = (feature: FeatureCard) => {
  switch (feature.bentoComponent) {
    case "info-card-marquee": return <InfoCardMarquee items={feature.infoCards} />;
    case "tilted-stack-cards": return <TiltedStackCards items={feature.stackCards} />;
    case "animated-bar-chart": return <AnimatedBarChart />;
    case "orbiting-icons": return <OrbitingIcons centerIcon={feature.centerIcon} items={feature.orbitIcons} />;
    case "icon-text-marquee": return <IconTextMarquee centerIcon={feature.centerIcon} texts={feature.marqueeTexts} />;
    case "chat-marquee": return <ChatMarquee aiIcon={feature.aiIcon} userIcon={feature.userIcon} exchanges={feature.exchanges} placeholder={feature.placeholder} />;
    case "checklist-timeline": return <ChecklistTimeline heading={feature.heading} subheading={feature.subheading} items={feature.checklistItems} completedLabel={feature.completedLabel} />;
    case "media-stack": return <MediaStack items={feature.mediaItems} />;
  }
};

const FeaturesBento = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  titleGradient,
  buttonStagger,
  cardAnimation = "slide-up",
  textAnimation,
}: {
  tag: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureCard[];
  titleGradient?: boolean;
  buttonStagger?: boolean;
  cardAnimation?: "slide-up" | "rotate-scale";
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Features bento section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center w-full max-w-6xl px-6 mx-auto gap-2">
        <AppearOnScroll variant="fade">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>
        </AppearOnScroll>

        {titleGradient ? (
          <GradientWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
          />
        ) : (
          <WordByWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
          />
        )}

        {description && (
          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
          />
        )}

        {(primaryButton || secondaryButton) && (
          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{buttonStagger ? <StaggerText text={primaryButton.text} /> : primaryButton.text}</a>}
              {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{buttonStagger ? <StaggerText text={secondaryButton.text} /> : secondaryButton.text}</a>}
            </div>
          </AppearOnScroll>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6 mx-auto">
        {features.map((feature, index) => (
          <AppearOnScroll key={feature.title} variant={cardAnimation} delay={index * 0.08} className="h-full">
            <div className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded h-full">
              <div className="relative h-72 overflow-hidden rounded p-3 xl:p-3.5 2xl:p-4 bg-foreground/5">{getBentoComponent(feature)}</div>
              <div className="flex flex-col gap-2 p-3 xl:p-3.5 2xl:p-4">
                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight">{feature.title}</h3>
                <p className="text-sm md:text-base 2xl:text-lg leading-snug text-balance">{feature.description}</p>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesBento;
