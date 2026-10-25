import { useNavigate } from "react-router-dom";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesBento from "@/components/sections/services/ServicesBento";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import MetricsFeatureCards from "@/components/sections/metrics/MetricsFeatureCards";
import FaqCreative from "@/components/sections/faq/FaqCreative";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { process, metrics, faq } from "@/data/site";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <ServicesHero
        tag="Services"
        description="Studio digital sur-mesure. Design, développement et stratégie réunis."
        chips={["Développement", "E-commerce", "Design", "SEO", "Mobile", "Maintenance"]}
        primaryButton={{ text: "Démarrer un projet", href: "/contact" }}
        secondaryButton={{ text: "Voir les projets", href: "/projets" }}
      />

      <ServicesBento
        textAnimation="fade-blur"
        tag="Expertises"
        title="Un studio, toutes les compétences"
        description="Design, technique et stratégie réunis."
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
