import { useNavigate } from "react-router-dom";
import PageHero from "@/components/sections/common/PageHero";
import FeaturesBorderGlow from "@/components/sections/features/FeaturesBorderGlow";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import MetricsFeatureCards from "@/components/sections/metrics/MetricsFeatureCards";
import FaqCreative from "@/components/sections/faq/FaqCreative";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { services, process, metrics, faq } from "@/data/site";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        tag="Services"
        title="Ce que je fais"
        description="Une offre complète pour des sites qui performent."
      />

      <FeaturesBorderGlow
        textAnimation="fade-blur"
        tag="Expertises"
        title="Un studio, toutes les compétences"
        description="Design, technique et stratégie réunis."
        features={services.map((s) => ({ icon: s.icon, title: s.title, description: s.description }))}
        primaryButton={{ text: "Démarrer un projet", href: "/contact" }}
      />

      <ProcessTimeline
        textAnimation="fade-blur"
        tag="Méthode"
        title="Un process clair, zéro surprise"
        description="En quatre étapes."
        steps={process}
      />

      <MetricsFeatureCards
        textAnimation="fade-blur"
        tag="Résultats"
        title="Des livrables qui tiennent la route"
        description="Qualité et performance, à chaque projet."
        metrics={metrics}
      />

      <FaqCreative
        textAnimation="fade-blur"
        tag="FAQ"
        title="Questions fréquentes"
        description="Une autre question ? Écrivez-moi."
        cta={{ text: "Me contacter", href: "/contact" }}
        items={faq}
      />

      <ContactCenter
        textAnimation="fade-blur"
        tag="Contact"
        title="Un projet en tête ?"
        description="Parlons-en. Écrivez-moi et je reviens vers vous rapidement."
        inputPlaceholder="Votre email"
        buttonText="Démarrer mon projet"
        onSubmit={() => navigate("/contact")}
      />
    </>
  );
};

export default Services;
