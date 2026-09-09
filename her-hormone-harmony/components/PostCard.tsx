import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import CategoryPill from "./CategoryPill";

const borderColor: Record<string, string> = {
  sage: "border-sage",
  gold: "border-gold",
  terracotta: "border-terracotta",
  blush: "border-blush",
  forest: "border-forest",
};

export default function PostCard({ post }: { post: PostMeta }) {
  const category = getCategory(post.category);

  return (
    <article
      className={`border-l-2 py-1 pl-6 ${
        category ? borderColor[category.color] : "border-sage"
      }`}
    >
      {category && <CategoryPill category={category} />}
      <h3 className="mt-3 text-xl">
        <Link href={`/blog/${post.slug}`} className="text-forest no-underline hover:text-terracotta-dark">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 max-w-xl text-[0.95rem] text-ink/70">{post.excerpt}</p>
      <p className="mt-2 text-xs text-ink/50">{post.readingTime}</p>
    </article>
  );
}
