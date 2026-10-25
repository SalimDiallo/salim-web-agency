import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import type { Service } from "@/data/site";

interface ServicesBigProps {
  tag: string;
  title: string;
  services: Service[];
  href?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

/**
 * Oversized service list. Minimal copy: each service is a huge title that
 * brightens on hover, revealing a short tagline and an arrow.
 */
const ServicesBig = ({ tag, title, services, href = "/services", textAnimation }: ServicesBigProps) => {
  return (
    <section aria-label="Services section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <div className="flex flex-col gap-3 mb-10 md:mb-14">
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
            className="font-display text-4xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.0] text-balance max-w-3xl"
          />
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <AppearOnScroll key={service.title} variant="slide-up" delay={index * 0.06}>
              <Link
                to={href}
                onClick={() => window.scrollTo({ top: 0 })}
                className="group relative flex items-center justify-between gap-6 py-6 md:py-8 border-t border-border last:border-b overflow-hidden"
              >
                <div className="absolute inset-x-[-1.5rem] inset-y-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-baseline gap-4 md:gap-7 min-w-0">
                  <span className="font-display text-base md:text-lg font-semibold text-muted-foreground/40 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl 2xl:text-6xl font-semibold leading-none text-foreground/65 group-hover:text-foreground transition-colors duration-300 truncate group-hover:md:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                </div>

                <div className="relative flex items-center gap-5 shrink-0">
                  <span className="hidden md:block text-sm uppercase tracking-widest text-muted-foreground opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {service.description}
                  </span>
                  <span className="flex items-center justify-center size-10 md:size-12 rounded-full border border-border text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                    <ArrowUpRight className="size-5 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBig;
