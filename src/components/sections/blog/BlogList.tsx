import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import ParallaxImage from "@/components/animation/ParallaxImage";
import type { Post } from "@/data/site";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <section aria-label="Blog section" className="w-full max-w-6xl px-6 mx-auto py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <AppearOnScroll key={post.slug} variant="slide-up" delay={index * 0.08} className="h-full">
            <Link
              to={`/blog/${post.slug}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className="group flex flex-col h-full overflow-hidden card"
            >
              <div className="relative h-48 overflow-hidden">
                <ParallaxImage src={post.imageSrc} alt={post.title} className="size-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-background/70 backdrop-blur border border-border text-foreground">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 gap-3 p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-balance">{post.title}</h3>
                <p className="text-sm leading-snug text-muted-foreground flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Lire l'article
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </AppearOnScroll>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
