import { Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Avatar = {
  name: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TestimonialTrustCard = ({
  quote,
  rating,
  author,
  avatars,
  textAnimation,
}: {
  quote: string;
  rating: number;
  author: string;
  avatars: Avatar[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  const visibleAvatars = avatars.slice(0, 6);
  const remainingCount = avatars.length - visibleAvatars.length;

  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex flex-col items-center gap-5 w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up" className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn("size-5 md:size-6 text-accent", index < rating ? "fill-accent" : "fill-transparent")}
              strokeWidth={1.5}
            />
          ))}
        </AppearOnScroll>

        <WordByWordReveal
          text={quote}
          variant={textAnimation}
          tag="p"
          className="md:max-w-8/10 text-2xl md:text-3xl 2xl:text-4xl leading-[1.15] font-semibold text-center text-balance"
        />

        <AppearOnScroll variant="slide-up" delay={0.1} className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance">
          <p>{author}</p>
        </AppearOnScroll>

        <AppearOnScroll variant="slide-up" delay={0.2} className="flex items-center justify-center mt-1">
          {visibleAvatars.map((avatar, index) => (
            <div
              key={avatar.name}
              className={cn("relative size-12 md:size-16 overflow-hidden rounded-full border-2 border-background", index > 0 && "-ml-5")}
              style={{ zIndex: visibleAvatars.length - index }}
            >
              {avatar.videoSrc ? (
                <video src={avatar.videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
              ) : (
                <img src={avatar.imageSrc} alt={avatar.name} className="w-full h-full object-cover" />
              )}
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="flex items-center justify-center size-12 md:size-16 -ml-5 rounded-full border-2 border-background card"
              style={{ zIndex: 0 }}
            >
              <span className="text-sm md:text-base font-semibold">+{remainingCount}</span>
            </div>
          )}
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default TestimonialTrustCard;
