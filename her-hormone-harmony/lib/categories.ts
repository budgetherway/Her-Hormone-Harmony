export type CategoryColor = "sage" | "gold" | "terracotta" | "blush" | "forest";

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  color: CategoryColor;
  cycleWindow?: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "follicular-phase",
    name: "Follicular Phase",
    shortName: "Follicular",
    color: "sage",
    cycleWindow: "Roughly days 1\u201313",
    description:
      "Estrogen is rebuilding after your period. Food, workouts, and skin care that work with your rising energy.",
  },
  {
    slug: "ovulatory-phase",
    name: "Ovulatory Phase",
    shortName: "Ovulatory",
    color: "gold",
    cycleWindow: "Roughly days 14\u201316",
    description:
      "Your peak-energy window. Nutrition and training that make the most of it, plus fertility-aware guidance.",
  },
  {
    slug: "luteal-phase",
    name: "Luteal Phase",
    shortName: "Luteal",
    color: "terracotta",
    cycleWindow: "Roughly days 17\u201328",
    description:
      "Energy starts to dip and cravings show up. Support for mood, cravings, and slowing down on purpose.",
  },
  {
    slug: "menstrual-phase",
    name: "Menstrual Phase",
    shortName: "Menstrual",
    color: "blush",
    cycleWindow: "Roughly days 1\u20135",
    description:
      "Rest, pain relief, and replenishment for the days your body is doing the most work.",
  },
  {
    slug: "pcos-hormonal-imbalances",
    name: "PCOS & Hormonal Imbalances",
    shortName: "PCOS",
    color: "forest",
    description:
      "Insulin, androgens, and the day-to-day reality of managing PCOS with food and lifestyle.",
  },
  {
    slug: "weight-loss-metabolism",
    name: "Weight Loss & Metabolism",
    shortName: "Weight Loss",
    color: "terracotta",
    description:
      "Cycle-synced fat loss: training and eating with your hormones instead of fighting them.",
  },
  {
    slug: "general-cycle-syncing",
    name: "General Cycle Syncing",
    shortName: "Getting Started",
    color: "sage",
    description: "Beginner-friendly starting points for cycle syncing as a whole.",
  },
  {
    slug: "hormone-balancing-recipes",
    name: "Hormone Balancing Recipes",
    shortName: "Recipes",
    color: "gold",
    description: "Recipes organized around what your hormones need, phase by phase.",
  },
  {
    slug: "post-pill-syndrome-support",
    name: "Post-Pill Syndrome Support",
    shortName: "Post-Pill",
    color: "blush",
    description: "Coming off birth control and giving your body room to reset.",
  },
  {
    slug: "fertility-ovulation-tracking",
    name: "Fertility & Ovulation Tracking",
    shortName: "Fertility",
    color: "sage",
    description: "Cycle charting and fertility awareness, explained without the jargon.",
  },
  {
    slug: "cortisol-stress-management",
    name: "Cortisol & Stress Management",
    shortName: "Cortisol",
    color: "forest",
    description: "What chronic stress does to your cycle, and how to bring cortisol back down.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
