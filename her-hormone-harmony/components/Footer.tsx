import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gold/40 bg-ivory-dim">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-forest">Her Hormone Harmony</p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">
            Wellness, cycle syncing, and natural living for women who want a
            plan, not another lecture about self-care.
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium text-forest">Explore</p>
          <ul className="space-y-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium text-forest">Legal</p>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </Container>

      <Container className="border-t border-gold/30 py-6">
        <p className="text-xs leading-relaxed text-ink/60">
          Some links on this site are affiliate links, which means we may
          earn a small commission at no extra cost to you. See our{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
          details. Content on Her Hormone Harmony is for educational
          purposes and is not a substitute for medical advice.
        </p>
        <p className="mt-3 text-xs text-ink/50">
          &copy; {year} Her Hormone Harmony. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
