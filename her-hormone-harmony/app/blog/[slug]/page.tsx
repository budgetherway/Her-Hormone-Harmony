import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/Container";
import CategoryPill from "@/components/CategoryPill";
import NewsletterBox from "@/components/NewsletterBox";
import HandbookCTA from "@/components/HandbookCTA";
import PostCard from "@/components/PostCard";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Lets a post's own markdown decide where the free-guide opt-in appears,
// per the "mid-article content upgrade" rule in the writing guide.
const mdxComponents = {
  NewsletterInline: () => <NewsletterBox compact />,
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const related = getRelatedPosts(post);

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        {category && <CategoryPill category={category} />}
        <h1 className="mt-4 text-3xl md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-ink/50">{post.readingTime}</p>

        <div className="prose-article mt-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <HandbookCTA label={post.ctaLabel} />

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="text-xl">More on {category?.name}</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
