import { Star, Quote } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import type { Testimonial } from "@/data/site";

interface TestimonialShowcaseProps {
  tag: string;
  title: string;
  testimonials: Testimonial[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="size-4 fill-primary text-primary" strokeWidth={0} />
    ))}
  </div>
);

const Author = ({ t }: { t: Testimonial }) => (
  <div className="flex items-center gap-3">
    <img src={t.avatar} alt={t.author} className="size-11 rounded-full object-cover" />
    <div className="flex flex-col leading-tight">
      <span className="font-medium text-foreground">{t.author}</span>
      <span className="text-sm text-muted-foreground">{t.role}</span>
    </div>
  </div>
);

const TestimonialShowcase = ({ tag, title, testimonials, textAnimation }: TestimonialShowcaseProps) => {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const rest = testimonials.filter((t) => t !== featured);

  return (
    <section aria-label="Testimonials section" className="flex flex-col gap-10 md:gap-12 py-20">
      <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto text-center">
        <AppearOnScroll variant="fade">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{tag}</p>
            <span className="h-px w-8 bg-primary" />
          </div>
        </AppearOnScroll>

        <WordByWordReveal
          text={title}
          variant={textAnimation}
          tag="h2"
          className="font-display md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.05] font-semibold text-balance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-6xl px-6 mx-auto">
        {/* Featured */}
        <AppearOnScroll variant="slide-up" className="lg:col-span-2 h-full">
          <figure className="relative flex flex-col justify-between gap-8 h-full p-8 md:p-10 card overflow-hidden">
            <Quote className="absolute -top-2 right-6 size-28 text-primary/10 rotate-180" strokeWidth={1} />
            <div className="relative flex flex-col gap-6">
              <Stars rating={featured.rating} />
              <blockquote className="font-display text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-snug text-balance">
                “{featured.quote}”
              </blockquote>
            </div>
            <figcaption className="relative">
              <Author t={featured} />
            </figcaption>
          </figure>
        </AppearOnScroll>

        {/* Secondary */}
        <div className="flex flex-col gap-5">
          {rest.slice(0, 2).map((t, index) => (
            <AppearOnScroll key={t.author} variant="slide-up" delay={index * 0.1} className="h-full">
              <figure className="flex flex-col justify-between gap-5 h-full p-6 md:p-7 card">
                <div className="flex flex-col gap-3">
                  <Stars rating={t.rating} />
                  <blockquote className="text-base md:text-lg leading-snug text-balance">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption>
                  <Author t={t} />
                </figcaption>
              </figure>
            </AppearOnScroll>
          ))}
        </div>

        {/* Remaining full-width row */}
        {rest.slice(2).map((t, index) => (
          <AppearOnScroll key={t.author} variant="slide-up" delay={index * 0.1} className="lg:col-span-3">
            <figure className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 p-6 md:p-7 card">
              <div className="flex flex-col gap-2 shrink-0 md:w-56">
                <Stars rating={t.rating} />
                <Author t={t} />
              </div>
              <blockquote className="text-base md:text-lg leading-snug text-balance">
                “{t.quote}”
              </blockquote>
            </figure>
          </AppearOnScroll>
        ))}
      </div>
    </section>
  );
};

export default TestimonialShowcase;
