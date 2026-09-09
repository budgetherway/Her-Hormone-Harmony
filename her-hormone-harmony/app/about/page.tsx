import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Her Hormone Harmony exists and what cycle syncing means to us.",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl md:text-4xl">About Her Hormone Harmony</h1>

      <div className="prose-article mt-8">
        <p>
          We started Her Hormone Harmony after getting tired of wellness
          advice that treats every day of the month the same. Eat this,
          run that far, sleep on this schedule, as if hormones hold still
          for anyone. They don&apos;t. And once we started eating and moving
          in sync with our cycles instead of fighting them, a lot of things
          that used to feel like willpower failures turned out to just be
          bad timing.
        </p>

        <p>
          That&apos;s the whole idea behind this site. Cycle syncing isn&apos;t
          a trend to us, it&apos;s the difference between forcing your body
          through the same routine for 28 days and actually working with
          what&apos;s happening inside it. Some weeks you have the energy
          for a hard workout and a big grocery list. Other weeks your body
          wants rest and iron-rich food, and that&apos;s not a setback, it&apos;s
          the plan working.
        </p>

        <h2>What you&apos;ll find here</h2>
        <p>
          Articles organized by phase (follicular, ovulatory, luteal,
          menstrual) plus dedicated coverage for PCOS, post-pill recovery,
          cortisol and stress, fertility awareness, and cycle-synced weight
          loss. Every post is meant to be useful on its own. If you want the
          whole system in one place, that&apos;s what{" "}
          <em>The Complete Cycle Syncing Handbook</em> is for: a
          phase-by-phase guide to your hormones, your energy, and yes, your
          cravings.
        </p>

        <h2>What we&apos;re not</h2>
        <p>
          We&apos;re not doctors, and nothing on this site replaces a
          conversation with one. If something here contradicts your own
          medical care, trust your doctor over a blog post every time. What
          we are is genuinely obsessed with the research on hormones and
          cycles, and committed to explaining it like a friend would, not a
          textbook.
        </p>
      </div>
    </Container>
  );
}
