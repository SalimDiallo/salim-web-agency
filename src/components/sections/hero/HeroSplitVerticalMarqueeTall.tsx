import WordByWordReveal from "@/components/animation/WordByWordReveal";

type HeroSplitVerticalMarqueeTallProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  leftItems: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
  rightItems: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroSplitVerticalMarqueeTall = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  leftItems,
  rightItems,
  textAnimation,
}: HeroSplitVerticalMarqueeTallProps) => {
  const duplicatedLeft = [...leftItems, ...leftItems, ...leftItems, ...leftItems];
  const duplicatedRight = [...rightItems, ...rightItems, ...rightItems, ...rightItems];

  return (
    <section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-25 pb-20 md:py-0">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full max-w-6xl px-6 mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>

            <WordByWordReveal
              text={title}
              variant={textAnimation}
              tag="h1"
              className="text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center md:text-left text-balance"
            />

            <WordByWordReveal
              text={description}
              variant={textAnimation}
              tag="p"
              className="md:max-w-8/10 text-base md:text-lg 2xl:text-xl leading-snug text-center md:text-left text-balance"
            />

            <div className="flex flex-wrap max-md:justify-center gap-3 mt-2 md:mt-3">
              <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>
              <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-100 md:h-[75vh] flex gap-2 xl:gap-3 2xl:gap-4 overflow-hidden">
          <div className="flex-1 overflow-hidden mask-fade-y-medium">
            <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4 animate-marquee-vertical">
              {duplicatedLeft.map((item, index) => (
                <div key={index} className="shrink-0 aspect-4/5 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden">
                  {item.videoSrc ? (
                    <video src={item.videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  ) : (
                    <img src={item.imageSrc} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden mask-fade-y-medium">
            <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4 animate-marquee-vertical-reverse">
              {duplicatedRight.map((item, index) => (
                <div key={index} className="shrink-0 aspect-4/5 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden">
                  {item.videoSrc ? (
                    <video src={item.videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  ) : (
                    <img src={item.imageSrc} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitVerticalMarqueeTall;
