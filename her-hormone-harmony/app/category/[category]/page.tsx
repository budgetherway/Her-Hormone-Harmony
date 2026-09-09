import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { categories, getCategory } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <Container className="py-16">
      {category.cycleWindow && (
        <p className="text-sm text-ink/50">{category.cycleWindow}</p>
      )}
      <h1 className="mt-1 text-3xl md:text-4xl">{category.name}</h1>
      <p className="mt-3 max-w-xl text-ink/70">{category.description}</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-ink/60">
            Articles for this phase are coming soon.
          </p>
        )}
      </div>
    </Container>
  );
}
