"use client";

import { useEffect, useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { animate } from "motion/react";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const spread = 60;
const proximity = 64;
const borderWidth = 2;

interface CardEdgeGlowProps {
  children: React.ReactNode;
  className?: string;
}

const CardEdgeGlow = ({ children, className = "" }: CardEdgeGlowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onPointerMove = (e: PointerEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const { clientX: x, clientY: y } = e;

        const isActive =
          x > left - proximity &&
          x < left + width + proximity &&
          y > top - proximity &&
          y < top + height + proximity;

        el.style.setProperty("--active", isActive ? "1" : "0");
        if (!isActive) return;

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0;
        const targetAngle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI + 90;
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;

        animate(currentAngle, currentAngle + angleDiff, {
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => el.style.setProperty("--start", String(v)),
        });
      });
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const { top, bottom, height } = el.getBoundingClientRect();
        const viewport = window.innerHeight;
        const isActive = top < viewport * 0.85 && bottom > viewport * 0.15;
        el.style.setProperty("--active", isActive ? "1" : "0");
        if (!isActive) return;
        const progress = (viewport - top) / (viewport + height);
        el.style.setProperty("--start", String(progress * 360));
      });
    };

    const mobile = window.matchMedia("(max-width: 768px)");
    const listen = () => {
      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (mobile.matches) {
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      } else {
        el.style.setProperty("--active", "0");
        document.body.addEventListener("pointermove", onPointerMove, { passive: true });
      }
    };

    listen();
    mobile.addEventListener("change", listen);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      mobile.removeEventListener("change", listen);
      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const gradient = `radial-gradient(circle, var(--color-accent) 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, var(--color-primary) 5%, transparent 15%),
    repeating-conic-gradient(from 236.84deg at 50% 50%, var(--color-accent) 0%, var(--color-primary) 5%, var(--color-accent) 10%)`;

  return (
    <div
      ref={ref}
      style={{ "--spread": spread, "--start": 0, "--active": 0, "--border-width": `${borderWidth}px`, "--gradient": gradient } as React.CSSProperties}
      className={cn("relative rounded-lg", className)}
    >
      {children}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--border-width))]',
          "after:[border:var(--border-width)_solid_transparent]",
          "after:[background:var(--gradient)] after:bg-fixed",
          "after:opacity-(--active) after:transition-opacity after:duration-300",
          "after:[mask-clip:padding-box,border-box] after:mask-intersect",
          "after:mask-[linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
        )}
      />
    </div>
  );
};

export default CardEdgeGlow;
