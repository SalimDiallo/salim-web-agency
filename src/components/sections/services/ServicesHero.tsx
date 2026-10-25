"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";

const ROTATING = ["performent", "séduisent", "durent"];

const RotatingWord = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ROTATING.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.15em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center justify-center text-primary"
          initial={{ y: "0.7em", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.7em", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {ROTATING[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

interface ServicesHeroProps {
  tag: string;
  description: string;
  chips: string[];
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

/**
 * Hero éditorial de la page Services : fond aurora, titre en deux temps dont
 * un mot pivot qui se renouvelle, puis CTA et chips d'expertises.
 */
const ServicesHero = ({ tag, description, chips, primaryButton, secondaryButton }: ServicesHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden pt-36 md:pt-44 pb-10 md:pb-16">
      <AuroraBackground className="absolute" />

      <div className="relative flex flex-col items-center gap-6 w-full max-w-6xl px-6 mx-auto text-center">
        <AppearOnScroll variant="fade">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{tag}</p>
            <span className="h-px w-8 bg-primary" />
          </div>
        </AppearOnScroll>

        <h1 className="font-display text-5xl md:text-7xl 2xl:text-8xl font-semibold leading-[1.02] text-balance">
          <GradientWordReveal text="Des sites qui" variant="fade-blur" tag="span" immediate className="block" />
          <RotatingWord />
        </h1>

        <GradientWordReveal
          text={description}
          variant="fade-blur"
          tag="p"
          immediate
          className="md:max-w-6/10 text-base md:text-lg 2xl:text-xl leading-snug text-muted-foreground text-balance"
        />

        <AppearOnScroll variant="slide-up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            <a
              href={primaryButton.href}
              className="group flex items-center gap-2 h-11 px-7 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground"
            >
              {primaryButton.text}
              <ArrowUpRight className="size-4 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
            </a>
            {secondaryButton && (
              <a
                href={secondaryButton.href}
                className="flex items-center justify-center h-11 px-7 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground"
              >
                {secondaryButton.text}
              </a>
            )}
          </div>
        </AppearOnScroll>

        <AppearOnScroll variant="fade" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 text-xs md:text-sm rounded-full border border-border text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default ServicesHero;
