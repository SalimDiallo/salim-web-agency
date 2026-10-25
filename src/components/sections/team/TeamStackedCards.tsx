import WordByWordReveal from "@/components/animation/WordByWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type TeamMember = {
  name: string;
  role: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TeamStackedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  members,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  members: TeamMember[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10 w-full max-w-6xl px-6 mx-auto">
      <div className="flex flex-col items-center gap-2">
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

      <AppearOnScroll variant="slide-up" className="flex flex-wrap justify-center gap-y-4 xl:gap-y-5 2xl:gap-y-6">
        {members.map((member, index) => (
          <AppearOnScroll key={member.name} variant="slide-up" delay={index * 0.08} className="w-[55%] md:w-[28%] -mx-[4%] md:-mx-[2%]">
            <div className="flex flex-col items-center w-full text-center">
              <div className="relative p-2 xl:p-3 2xl:p-4 mb-4 xl:mb-5 2xl:mb-6 w-full aspect-square card rounded-full overflow-hidden">
                <div className="relative w-full h-full rounded-full! overflow-hidden">
                  <ParallaxImage src={member.imageSrc} videoSrc={member.videoSrc} />
                </div>
              </div>
              <span className="w-4/5 text-lg md:text-xl 2xl:text-2xl font-semibold leading-tight truncate">{member.name}</span>
              <span className="w-4/5 text-base leading-snug opacity-75 truncate">{member.role}</span>
            </div>
          </AppearOnScroll>
        ))}
      </AppearOnScroll>
    </div>
  </section>
);

export default TeamStackedCards;
