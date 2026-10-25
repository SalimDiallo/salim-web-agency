import { Mail, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/sections/common/PageHero";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { brand } from "@/data/site";

const infos = [
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: Clock, label: "Réponse", value: "Sous 24h ouvrées" },
  { icon: MapPin, label: "Disponibilité", value: "En remote, partout" },
];

const Contact = () => {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Parlons de votre projet"
        description="Une idée, un devis ? Écrivez-moi."
      />

      <section className="w-full max-w-6xl px-6 mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infos.map((info, index) => {
            const Icon = info.icon;
            const card = (
              <div className="flex flex-col gap-3 p-6 h-full card">
                <div className="flex items-center justify-center size-12 bg-primary text-primary-foreground rounded-full">
                  <Icon className="size-5 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-muted-foreground">{info.label}</span>
                <span className="text-lg font-medium">{info.value}</span>
              </div>
            );
            return (
              <AppearOnScroll key={info.label} variant="slide-up" delay={index * 0.08} className="h-full">
                {info.href ? (
                  <a href={info.href} className="block h-full">{card}</a>
                ) : (
                  card
                )}
              </AppearOnScroll>
            );
          })}
        </div>
      </section>

      <ContactCenter
        textAnimation="fade-blur"
        tag="Démarrer"
        title="Prêt à vous lancer ?"
        description="Laissez votre email, je vous recontacte pour un premier échange gratuit."
        inputPlaceholder="Votre email"
        buttonText="Envoyer"
        onSubmit={(email) => {
          window.location.href = `mailto:${brand.email}?subject=Nouveau projet&body=Mon email : ${encodeURIComponent(email)}`;
        }}
      />
    </>
  );
};

export default Contact;
