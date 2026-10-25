import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/common/PageHero";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ParallaxImage from "@/components/animation/ParallaxImage";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { projects } from "@/data/site";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        tag="Projets"
        title="Mes réalisations"
        description="Des sites sur-mesure, pensés pour leurs objectifs."
      />

      <section className="w-full max-w-6xl px-6 mx-auto py-10 flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <AppearOnScroll key={project.slug} variant="slide-up" delay={0.05}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl card p-0">
                <ParallaxImage src={project.imageSrc} alt={project.title} className="size-full object-cover" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground">{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-balance">{project.title}</h2>
                <p className="text-base md:text-lg leading-snug text-muted-foreground text-balance">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full card">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url ?? "#"}
                  className="inline-flex items-center gap-2 mt-2 h-11 px-6 text-sm rounded-lg w-fit cursor-pointer btn-primary bg-primary text-primary-foreground"
                >
                  Voir le projet
                  <ArrowUpRight className="size-4 text-primary-foreground" strokeWidth={2} />
                </a>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </section>

      <ContactCenter
        textAnimation="fade-blur"
        tag="Contact"
        title="Et si le prochain projet était le vôtre ?"
        description="Racontez-moi votre idée, je vous dis comment la concrétiser."
        inputPlaceholder="Votre email"
        buttonText="Démarrer mon projet"
        onSubmit={() => navigate("/contact")}
      />
    </>
  );
};

export default Projects;
