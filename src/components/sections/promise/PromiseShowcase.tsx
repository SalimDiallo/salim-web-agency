import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type PromiseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

interface PromiseShowcaseProps {
  tag: string;
  title: string;
  description: string;
  items: PromiseItem[];
  cta?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const PromiseShowcase = ({ tag, title, description, items, cta, textAnimation }: PromiseShowcaseProps) => {
  return (
    <section aria-label="Promise section" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 w-full max-w-6xl px-6 mx-auto">
        {/* Sticky heading */}
        <div className="lg:sticky lg:top-28 flex flex-col gap-5 h-fit">
          <AppearOnScroll variant="fade">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{tag}</p>
            </div>
          </AppearOnScroll>

          <WordByWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="font-display text-4xl md:text-5xl 2xl:text-6xl leading-[1.0] font-semibold text-balance"
          />

          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="text-base md:text-lg leading-snug text-muted-foreground text-balance"
          />

          {cta && (
            <AppearOnScroll variant="slide-up" delay={0.1}>
              <Link
                to={cta.href}
                onClick={() => window.scrollTo({ top: 0 })}
                className="group inline-flex items-center gap-2 mt-2 h-12 px-7 w-fit text-sm rounded-xl btn-primary bg-primary text-primary-foreground"
              >
                {cta.text}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
              </Link>
            </AppearOnScroll>
          )}
        </div>

        {/* Interactive rows */}
        <div className="flex flex-col">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <AppearOnScroll key={item.title} variant="slide-up" delay={index * 0.08}>
                <div className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 py-7 md:py-9 border-t border-border last:border-b overflow-hidden">
                  <div className="absolute inset-x-[-1.5rem] inset-y-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <span className="relative font-display text-2xl md:text-3xl font-semibold text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-tight text-balance">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-snug text-muted-foreground text-balance max-w-md">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative flex items-center justify-center size-11 md:size-12 rounded-full border border-border text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                </div>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromiseShowcase;
