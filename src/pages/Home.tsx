import { Monitor, Zap, Shield, Sparkles, ArrowUpRight } from "lucide-react";
import HeroSplitVerticalMarqueeTall from "@/components/sections/hero/HeroSplitVerticalMarqueeTall";
import ServicesBig from "@/components/sections/services/ServicesBig";
import FeaturesMediaCarousel from "@/components/sections/features/FeaturesMediaCarousel";
import PromiseShowcase from "@/components/sections/promise/PromiseShowcase";
import TestimonialShowcase from "@/components/sections/testimonial/TestimonialShowcase";
import TeamStackedCards from "@/components/sections/team/TeamStackedCards";
import FaqCreative from "@/components/sections/faq/FaqCreative";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import ClientLogos from "@/components/sections/logos/ClientLogos";
import StatStrip from "@/components/sections/stats/StatStrip";
import StatementSection from "@/components/sections/statement/StatementSection";
import KeywordMarquee from "@/components/sections/marquee/KeywordMarquee";
import CtaBanner from "@/components/sections/cta/CtaBanner";
import LightRaysCornerBackground from "@/components/backgrounds/LightRaysCornerBackground";
import { brand, heroImages, projects, process, stats, faq, team, clients, keywords, testimonials, services } from "@/data/site";

const Home = () => {
  return (
    <>
      <div id="hero" data-section="hero" className="relative isolate">
        <LightRaysCornerBackground className="absolute" />
        <HeroSplitVerticalMarqueeTall
          textAnimation="fade-blur"
          tag={brand.tagline}
          title="Des sites qui font grandir votre marque"
          description="Studio digital sur-mesure. Je transforme vos visiteurs en clients."
          primaryButton={{ text: "Démarrer un projet", href: "/contact" }}
          secondaryButton={{ text: "Voir les projets", href: "/projets" }}
          leftItems={heroImages.left.map((imageSrc) => ({ imageSrc }))}
          rightItems={heroImages.right.map((imageSrc) => ({ imageSrc }))}
        />
      </div>

      <ClientLogos label="Ils m'ont fait confiance" clients={clients} />

      <StatStrip stats={stats} />

      <StatementSection
        tag="Ma vision"
        text="Un site n'est pas une vitrine. C'est votre meilleur commercial — disponible 24h/24."
      />

      <KeywordMarquee words={keywords} />

      <div id="services" data-section="services">
        <ServicesBig
          textAnimation="fade-blur"
          tag="Services"
          title="Ce que je fais"
          services={services}
        />
      </div>

      <div id="work" data-section="work">
        <FeaturesMediaCarousel
          textAnimation="fade-blur"
          tag="Projets"
          title="Des réalisations qui parlent"
          description="Une sélection de mon travail."
          items={projects.map((p) => ({
            title: p.title,
            description: p.category,
            imageSrc: p.imageSrc,
            buttonIcon: ArrowUpRight,
            buttonHref: `/projets`,
          }))}
        />
      </div>

      <ProcessTimeline
        textAnimation="fade-blur"
        tag="Méthode"
        title="Un process clair, zéro surprise"
        description="De la première idée au lancement, en quatre étapes."
        steps={process}
      />

      <div id="promise" data-section="promise">
        <PromiseShowcase
          textAnimation="fade-blur"
          tag="Mes engagements"
          title="Pourquoi me choisir"
          description="Des résultats, pas des promesses."
          cta={{ text: "Démarrer un projet", href: "/contact" }}
          items={[
            { icon: Monitor, title: "Design responsive", description: "Impeccable sur chaque écran." },
            { icon: Zap, title: "Délais rapides", description: "Du concept au lancement, vite." },
            { icon: Shield, title: "Hébergement sécurisé", description: "Pro, 99,9 % en ligne." },
            { icon: Sparkles, title: "Accompagnement continu", description: "Un interlocuteur unique." },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialShowcase
          textAnimation="fade-blur"
          tag="Témoignages"
          title="Ce que mes clients en disent"
          testimonials={testimonials}
        />
      </div>

      <div id="team" data-section="team">
        <TeamStackedCards
          textAnimation="fade-blur"
          tag="Équipe"
          title="Qui est derrière SD"
          description="Un studio à taille humaine."
          members={team}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqCreative
          textAnimation="fade-blur"
          tag="FAQ"
          title="Questions fréquentes"
          description="Une autre question ? Écrivez-moi."
          cta={{ text: "Me contacter", href: "/contact" }}
          items={faq}
        />
      </div>

      <CtaBanner
        title="Prêt à transformer votre présence digitale ?"
        buttonText="Démarrer mon projet"
        buttonHref="/contact"
      />
    </>
  );
};

export default Home;
