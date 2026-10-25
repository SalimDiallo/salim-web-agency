import {
  Code2,
  ShoppingCart,
  Palette,
  Search,
  Smartphone,
  Shield,
  Globe,
  Zap,
  Layers,
  Sparkles,
  Gauge,
} from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import CardEdgeGlow from "@/components/animation/CardEdgeGlow";
import OrbitingIcons from "@/components/display/OrbitingIcons";
import AnimatedBarChart from "@/components/display/AnimatedBarChart";
import IconTextMarquee from "@/components/display/IconTextMarquee";

interface ServicesBentoProps {
  tag: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

/**
 * Section expertises en bento asymétrique : une grande tuile "produit" avec
 * icônes en orbite, des tuiles larges animées (bar chart, marquee) et des
 * tuiles compactes. Beaucoup plus éditorial qu'une grille uniforme.
 */
const ServicesBento = ({ tag, title, description, primaryButton, textAnimation }: ServicesBentoProps) => {
  return (
    <section aria-label="Expertises section" className="flex flex-col gap-8 md:gap-12 py-20">
      <div className="flex flex-col items-center gap-3 w-full max-w-6xl px-6 mx-auto">
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
          className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.1] font-semibold text-center text-balance"
        />

        {description && (
          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="md:max-w-6/10 text-base md:text-lg leading-snug text-center text-balance text-muted-foreground"
          />
        )}
      </div>

      <div className="w-full max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[216px]">
          {/* Grande tuile : Développement web */}
          <AppearOnScroll variant="slide-up" className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <CardEdgeGlow className="group flex flex-col justify-between h-full min-h-[380px] lg:min-h-0 p-7 card overflow-hidden">
              <div className="relative flex-1 -mx-7 -mt-7 mb-4 overflow-hidden">
                <OrbitingIcons centerIcon={Code2} items={[Globe, Smartphone, Zap, Palette, Layers, Search]} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-primary">Cœur de métier</span>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Développement web</h3>
                <p className="text-sm md:text-base leading-snug text-muted-foreground">
                  Des sites rapides et sur-mesure, construits pour durer.
                </p>
              </div>
            </CardEdgeGlow>
          </AppearOnScroll>

          {/* Tuile large : SEO & performance */}
          <AppearOnScroll variant="slide-up" delay={0.06} className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-5 h-full min-h-[216px] p-7 card overflow-hidden">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="flex items-center justify-center size-11 rounded-full border border-border text-foreground">
                  <Gauge className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">SEO & performance</h3>
                <p className="text-sm leading-snug text-muted-foreground">Visible sur Google, rapide partout.</p>
              </div>
              <div className="hidden sm:block h-28 w-1/2 shrink-0">
                <AnimatedBarChart />
              </div>
            </div>
          </AppearOnScroll>

          {/* Tuile compacte : E-commerce */}
          <AppearOnScroll variant="slide-up" delay={0.1} className="lg:col-span-1">
            <div className="flex flex-col justify-between gap-4 h-full min-h-[200px] p-6 card">
              <div className="flex items-center justify-center size-11 rounded-full border border-border text-foreground">
                <ShoppingCart className="size-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">E-commerce</h3>
                <p className="text-sm leading-snug text-muted-foreground">Vendez plus, mieux.</p>
              </div>
            </div>
          </AppearOnScroll>

          {/* Tuile compacte : Design & branding */}
          <AppearOnScroll variant="slide-up" delay={0.14} className="lg:col-span-1">
            <div className="flex flex-col justify-between gap-4 h-full min-h-[200px] p-6 card">
              <div className="flex items-center justify-center size-11 rounded-full border border-border text-foreground">
                <Palette className="size-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">Design & branding</h3>
                <p className="text-sm leading-snug text-muted-foreground">Une marque mémorable.</p>
              </div>
            </div>
          </AppearOnScroll>

          {/* Tuile large : Sites mobiles */}
          <AppearOnScroll variant="slide-up" delay={0.18} className="md:col-span-2 lg:col-span-2">
            <div className="relative flex flex-col justify-end h-full min-h-[216px] p-7 card overflow-hidden">
              <div className="absolute inset-0 opacity-60">
                <IconTextMarquee centerIcon={Smartphone} texts={["Responsive", "iOS", "Android", "PWA", "Tactile", "Fluide"]} />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card via-card/90 to-transparent pointer-events-none" />
              <div className="relative flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">Sites mobiles</h3>
                <p className="text-sm leading-snug text-muted-foreground">Impeccable sur chaque écran.</p>
              </div>
            </div>
          </AppearOnScroll>

          {/* Tuile large : Maintenance */}
          <AppearOnScroll variant="slide-up" delay={0.22} className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between gap-5 h-full min-h-[216px] p-7 card overflow-hidden">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center size-11 rounded-full border border-border text-foreground">
                  <Shield className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">Maintenance</h3>
                <p className="text-sm leading-snug text-muted-foreground">Sécurisé, à jour, serein.</p>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="font-display text-4xl md:text-5xl font-semibold text-primary leading-none">99,9%</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Sparkles className="size-3" strokeWidth={1.5} /> en ligne
                </span>
              </div>
            </div>
          </AppearOnScroll>
        </div>

        {primaryButton && (
          <AppearOnScroll variant="slide-up" delay={0.1}>
            <div className="flex justify-center mt-10">
              <a
                href={primaryButton.href}
                className="flex items-center justify-center h-11 px-7 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground"
              >
                {primaryButton.text}
              </a>
            </div>
          </AppearOnScroll>
        )}
      </div>
    </section>
  );
};

export default ServicesBento;
