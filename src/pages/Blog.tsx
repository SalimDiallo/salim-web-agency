import PageHero from "@/components/sections/common/PageHero";
import BlogList from "@/components/sections/blog/BlogList";
import { posts } from "@/data/site";

const Blog = () => {
  return (
    <>
      <PageHero
        tag="Blog"
        title="Idées & conseils"
        description="Web, design, performance. Sans jargon."
      />
      <BlogList posts={posts} />
    </>
  );
};

export default Blog;
