import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ParallaxImage from "@/components/animation/ParallaxImage";
import { posts } from "@/data/site";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="flex flex-col items-center gap-4 w-full max-w-3xl px-6 mx-auto pt-40 pb-20 text-center">
        <h1 className="text-3xl font-semibold">Article introuvable</h1>
        <p className="text-muted-foreground">Cet article n'existe pas ou a été déplacé.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 mt-2 h-11 px-6 text-sm rounded-lg btn-primary bg-primary text-primary-foreground">
          Retour au blog
        </Link>
      </section>
    );
  }

  return (
    <article className="w-full max-w-3xl px-6 mx-auto pt-36 md:pt-44 pb-10">
      <Link
        to="/blog"
        onClick={() => window.scrollTo({ top: 0 })}
        className="inline-flex items-center gap-2 mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" strokeWidth={1.75} />
        Retour au blog
      </Link>

      <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-balance mb-8">{post.title}</h1>

      <div className="relative aspect-video overflow-hidden rounded-2xl mb-10">
        <ParallaxImage src={post.imageSrc} alt={post.title} className="size-full object-cover" />
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">{post.excerpt}</p>
        {post.content.map((paragraph, i) => (
          <AppearOnScroll key={i} variant="fade">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
          </AppearOnScroll>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;
