import AppearOnScroll from "@/components/animation/AppearOnScroll";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import type { Stat } from "@/data/site";

const StatStrip = ({ stats }: { stats: Stat[] }) => {
  return (
    <section aria-label="Stats section" className="w-full max-w-6xl px-6 mx-auto py-16 md:py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((stat, index) => (
          <AppearOnScroll key={stat.label} variant="slide-up" delay={index * 0.1}>
            <div className="flex flex-col gap-2 border-l border-border pl-5 md:pl-6">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-display text-5xl md:text-7xl 2xl:text-8xl font-semibold text-gradient-emerald"
              />
              <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </section>
  );
};

export default StatStrip;
