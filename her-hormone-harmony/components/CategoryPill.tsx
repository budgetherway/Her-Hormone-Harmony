import Link from "next/link";
import { Category } from "@/lib/categories";

const styles: Record<Category["color"], string> = {
  sage: "bg-sage/15 text-sage-dark border-sage/30",
  gold: "bg-gold/20 text-gold-dark border-gold/40",
  terracotta: "bg-terracotta/15 text-terracotta-dark border-terracotta/30",
  blush: "bg-blush/20 text-blush-dark border-blush/40",
  forest: "bg-forest/10 text-forest-dark border-forest/25",
};

export default function CategoryPill({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`inline-block rounded-full border px-3 py-1 text-sm font-medium no-underline transition-opacity hover:opacity-75 ${styles[category.color]}`}
    >
      {category.shortName}
    </Link>
  );
}
