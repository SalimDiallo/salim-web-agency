import { ArrowUpRight } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ParallaxImage from "@/components/animation/ParallaxImage";
import type { Project } from "@/data/site";

interface ProjectCardsProps {
  projects: Project[];
  tag?: string;
  title?: string;
  description?: string;
  textAnimation?: "slide-up" | "fade-blur" | "fade";
}

/**
 * Responsive grid of project cards (3 per row on desktop, 2 on tablet, 1 on mobile).
 * Chaque card affiche l'image, la catégorie, l'année, le titre, la description et les tags.
 */
const ProjectCards = ({
  projects,
  tag,
  title,
  description,
  textAnimation = "fade-blur",
}: ProjectCardsProps) => {
  return (
    <section aria-label="Projects section" className="w-full max-w-6xl px-6 mx-auto py-10">
      {(tag || title || description) && (
        <div className="flex flex-col gap-3 mb-10 md:mb-14">
          {tag && (
            <AppearOnScroll variant="fade">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <p className="text-sm uppercase tracking-widest text-muted-foreground">{tag}</p>
              </div>
            </AppearOnScroll>
          )}

          {title && (
            <WordByWordReveal
              text={title}
              variant={textAnimation}
              tag="h2"
              className="font-display text-4xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.0] text-balance max-w-3xl"
            />
          )}

          {description && (
            <AppearOnScroll variant="fade" delay={0.1}>
              <p className="text-base md:text-lg leading-snug text-muted-foreground text-balance max-w-2xl">
                {description}
              </p>
            </AppearOnScroll>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AppearOnScroll key={project.slug} variant="slide-up" delay={index * 0.08} className="h-full">
            <a
              href={project.url ?? "#"}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              className="group flex flex-col h-full overflow-hidden card cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ParallaxImage src={project.imageSrc} alt={project.title} className="size-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-background/70 backdrop-blur border border-border text-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 gap-3 p-6">
                <span className="text-xs text-muted-foreground">{project.year}</span>
                <h3 className="text-xl font-semibold leading-tight text-balance">{project.title}</h3>
                <p className="text-sm leading-snug text-muted-foreground flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full card">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Voir le projet
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} />
                </span>
              </div>
            </a>
          </AppearOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
