import type { Metadata } from "next";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import CategoryPill from "@/components/CategoryPill";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Phase-by-phase articles on cycle syncing, PCOS, cortisol, and hormone health.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-16">
      <h1 className="text-3xl md:text-4xl">The Blog</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Practical, phase-specific guidance. Filter by whatever&apos;s on
        your mind right now.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <CategoryPill key={c.slug} category={c} />
        ))}
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-ink/60">
            The first batch of articles is on its way. Check back soon.
          </p>
        )}
      </div>
    </Container>
  );
}
