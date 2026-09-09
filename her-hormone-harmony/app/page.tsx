import Link from "next/link";
import Container from "@/components/Container";
import PhaseWheel from "@/components/PhaseWheel";
import PostCard from "@/components/PostCard";
import NewsletterBox from "@/components/NewsletterBox";
import { categories } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";
import { HANDBOOK_TITLE, HANDBOOK_SUBTITLE, HANDBOOK_URL } from "@/lib/constants";

const phaseSlugs = [
  "menstrual-phase",
  "follicular-phase",
  "ovulatory-phase",
  "luteal-phase",
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);
  const phases = phaseSlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-tight md:text-5xl">
              Eat, move, and rest with your cycle. Not against it.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/75">
              Her Hormone Harmony breaks cycle syncing down by phase, so you
              know what your body actually needs this week, not a generic
              wellness routine that ignores your hormones entirely.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#free-guide"
                className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory no-underline hover:bg-forest-dark"
              >
                Get the free 7-day guide
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest no-underline hover:bg-forest hover:text-ivory"
              >
                Browse the blog
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <PhaseWheel />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl">Find your phase</h2>
          <p className="mt-2 max-w-xl text-ink/70">
            Your needs shift across the month. Start with whichever phase
            you&apos;re in right now.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, i) =>
              phase ? (
                <Link
                  key={phase.slug}
                  href={`/category/${phase.slug}`}
                  className={`block rounded-3xl border border-ink/10 bg-white/40 p-6 no-underline transition-transform hover:-translate-y-1 ${
                    i % 2 === 1 ? "sm:translate-y-4" : ""
                  }`}
                >
                  <p className="text-xs text-ink/50">{phase.cycleWindow}</p>
                  <p className="mt-1 font-display text-xl text-forest">
                    {phase.name}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">{phase.description}</p>
                </Link>
              ) : null
            )}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl">Latest from the blog</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <p className="text-ink/60">
                Articles will appear here once the first batch is published.
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <NewsletterBox id="free-guide" />
        </Container>
      </section>

      <section className="py-12">
        <Container className="rounded-3xl border border-terracotta/30 bg-terracotta/10 p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
            <div>
              <p className="font-display text-2xl text-forest md:text-3xl">
                {HANDBOOK_TITLE}
              </p>
              <p className="mt-2 text-ink/75">{HANDBOOK_SUBTITLE}</p>
              <p className="mt-4 max-w-lg text-[0.95rem] text-ink/70">
                Every phase, one place: grocery lists, workouts, recipes, and
                the reasoning behind all of it, so you&apos;re not
                relearning your cycle every month.
              </p>
            </div>
            <Link
              href={HANDBOOK_URL}
              className="inline-block rounded-full bg-terracotta px-6 py-3 text-center text-sm font-medium text-ivory no-underline hover:bg-terracotta-dark"
            >
              Get the Handbook
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
