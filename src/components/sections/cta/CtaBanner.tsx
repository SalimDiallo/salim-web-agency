import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

interface CtaBannerProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}

const CtaBanner = ({ title, buttonText, buttonHref }: CtaBannerProps) => {
  return (
    <section aria-label="Call to action" className="w-full max-w-6xl px-6 mx-auto py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] card bg-grid px-8 py-16 md:px-16 md:py-24">
        <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-16 size-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-start gap-8 max-w-3xl">
          <WordByWordReveal
            text={title}
            variant="slide-up"
            tag="h2"
            className="font-display text-4xl md:text-6xl 2xl:text-7xl font-semibold text-balance"
          />
          <AppearOnScroll variant="slide-up" delay={0.15}>
            <Link
              to={buttonHref}
              onClick={() => window.scrollTo({ top: 0 })}
              className="group inline-flex items-center gap-2 h-13 px-8 text-base rounded-xl btn-primary bg-primary text-primary-foreground"
            >
              {buttonText}
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
            </Link>
          </AppearOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
