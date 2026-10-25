"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type FaqItem = { question: string; answer: string };

interface FaqCreativeProps {
  tag: string;
  title: string;
  description: string;
  items: FaqItem[];
  cta?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FaqCreative = ({ tag, title, description, items, cta, textAnimation }: FaqCreativeProps) => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 w-full max-w-6xl px-6 mx-auto">
        {/* Sticky intro */}
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

        {/* Accordion */}
        <div className="flex flex-col">
          {items.map((item, index) => {
            const open = active === index;
            return (
              <AppearOnScroll key={index} variant="slide-up" delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  className="group w-full text-left border-t border-border last:border-b py-6 md:py-7"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="font-display text-base md:text-lg font-semibold text-muted-foreground/40 tabular-nums pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className={`font-display text-lg md:text-2xl font-semibold leading-tight transition-colors ${open ? "text-foreground" : "text-foreground/85 group-hover:text-foreground"}`}>
                          {item.question}
                        </h3>
                        <span className={`flex shrink-0 items-center justify-center size-9 rounded-full transition-colors duration-300 ${open ? "bg-primary text-primary-foreground" : "border border-border text-foreground group-hover:border-primary"}`}>
                          <Plus className={`size-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`} strokeWidth={2} />
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 pr-12 text-base md:text-lg leading-relaxed text-muted-foreground">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqCreative;
