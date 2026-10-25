import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
}

const PageHero = ({ tag, title, description }: PageHeroProps) => {
  return (
    <section className="flex flex-col items-center gap-3 w-full max-w-6xl px-6 mx-auto pt-36 md:pt-44 pb-6 text-center">
      <AppearOnScroll variant="fade">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
          <p>{tag}</p>
        </div>
      </AppearOnScroll>

      <WordByWordReveal
        text={title}
        variant="fade-blur"
        tag="h1"
        immediate
        className="md:max-w-8/10 text-4xl md:text-6xl 2xl:text-7xl leading-[1.1] font-semibold text-balance"
      />

      <WordByWordReveal
        text={description}
        variant="fade-blur"
        tag="p"
        immediate
        className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-muted-foreground text-balance"
      />
    </section>
  );
};

export default PageHero;
