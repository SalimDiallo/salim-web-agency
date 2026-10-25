"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Variant = "slide-up" | "fade-blur" | "fade";

interface GradientWordRevealProps {
  text: string;
  variant: Variant;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  immediate?: boolean;
}

const VARIANTS = {
  "slide-up": {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "none" },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const EASING: Record<Variant, [number, number, number, number]> = {
  "slide-up": [0.25, 0.46, 0.45, 0.94],
  "fade-blur": [0.45, 0, 0.55, 1],
  "fade": [0.45, 0, 0.55, 1],
};

// WordByWordReveal with the text painted in one gradient from the foreground into a muted foreground.
// Each word carries its own clipped slice of a gradient sized to the whole text block, so the words
// read as one continuous gradient and stay visible while they animate (a single clipped gradient on
// the heading hides words whose opacity or transform is animating).
const GradientWordReveal = ({ text, variant, tag = "p", className = "", immediate = false }: GradientWordRevealProps) => {
  const Tag = motion[tag] as typeof motion.p;
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;
    const paint = () => {
      const spans = [...container.querySelectorAll<HTMLElement>("[data-word]")];
      if (!spans.length) return;
      const left = Math.min(...spans.map((span) => span.offsetLeft));
      const right = Math.max(...spans.map((span) => span.offsetLeft + span.offsetWidth));
      const top = Math.min(...spans.map((span) => span.offsetTop));
      const bottom = Math.max(...spans.map((span) => span.offsetTop + span.offsetHeight));
      for (const span of spans) {
        span.style.backgroundSize = `${right - left}px ${bottom - top}px`;
        span.style.backgroundPosition = `${left - span.offsetLeft}px ${top - span.offsetTop}px`;
      }
    };
    paint();
    const observer = new ResizeObserver(paint);
    observer.observe(container);
    return () => observer.disconnect();
  }, [text]);

  return (
    <Tag
      ref={ref}
      className={cn("relative leading-[1.2]", className)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.2 } })}
      transition={{ staggerChildren: 0.04 }}
    >
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          <motion.span
            data-word
            className="inline-block bg-linear-to-r from-foreground to-foreground/45 bg-no-repeat bg-clip-text text-transparent"
            variants={VARIANTS[variant]}
            transition={{ duration: 0.6, ease: EASING[variant] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default GradientWordReveal;
