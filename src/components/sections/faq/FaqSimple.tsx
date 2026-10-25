"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSimple = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FaqItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-8 md:gap-10">
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

        <AppearOnScroll variant="slide-up" className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4">
          {items.map((item, index) => (
            <AppearOnScroll key={index} variant="slide-up" delay={index * 0.08}>
              <div
                onClick={() => handleToggle(index)}
                className="p-3 xl:p-3.5 2xl:p-4 rounded card cursor-pointer select-none"
              >
                <div className="flex items-center justify-between gap-3 xl:gap-3.5 2xl:gap-4">
                  <h3 className="text-sm md:text-base 2xl:text-lg font-medium leading-snug">{item.question}</h3>
                  <div className="flex shrink-0 items-center justify-center size-8 md:size-9 rounded bg-primary text-primary-foreground">
                    <Plus
                      className={cn(
                        "size-3.5 md:size-4 text-primary-foreground transition-transform duration-300",
                        activeIndex === index && "rotate-45"
                      )}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-1 text-base leading-snug">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AppearOnScroll>
          ))}
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default FaqSimple;
