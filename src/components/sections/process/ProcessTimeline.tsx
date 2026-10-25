"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

interface ProcessTimelineProps {
  tag: string;
  title: string;
  description: string;
  steps: Step[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const ProcessTimeline = ({ tag, title, description, steps, textAnimation }: ProcessTimelineProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });

  return (
    <section aria-label="Process section" className="flex flex-col gap-12 md:gap-16 py-20">
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

        <WordByWordReveal
          text={description}
          variant={textAnimation}
          tag="p"
          className="md:max-w-6/10 text-base md:text-lg leading-snug text-muted-foreground text-balance"
        />
      </div>

      <div ref={trackRef} className="relative w-full max-w-4xl px-6 mx-auto">
        {/* Rail */}
        <div className="absolute left-[2.35rem] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-border" />
        {/* Animated fill */}
        <motion.div
          style={{ scaleY: fill }}
          className="absolute left-[2.35rem] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary to-accent"
        />

        <div className="flex flex-col gap-10 md:gap-4">
          {steps.map((item, index) => {
            const StepIcon = item.icon;
            const isRight = index % 2 === 1;
            return (
              <div
                key={item.step}
                className="relative grid grid-cols-[auto_1fr] md:grid-cols-2 items-center gap-6 md:gap-16"
              >
                {/* Node */}
                <div className="z-10 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <AppearOnScroll variant="fade" delay={index * 0.05}>
                    <div className="relative flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground shadow-[0_0_0_6px_var(--color-background)]">
                      <StepIcon className="size-5 text-primary-foreground" strokeWidth={1.75} />
                    </div>
                  </AppearOnScroll>
                </div>

                {/* Card */}
                <AppearOnScroll
                  variant="slide-up"
                  delay={index * 0.05}
                  className={`md:col-span-1 ${isRight ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                >
                  <div className="relative overflow-hidden p-6 md:p-8 card">
                    <span
                      className={`absolute -top-4 text-7xl md:text-8xl font-display font-semibold text-primary/10 select-none ${isRight ? "right-5" : "right-5 md:right-auto md:left-5"}`}
                    >
                      {item.step}
                    </span>
                    <div className="relative flex flex-col gap-2">
                      <h3 className="font-display text-xl md:text-2xl 2xl:text-3xl font-semibold leading-tight text-balance">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base leading-snug text-muted-foreground text-balance">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AppearOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
