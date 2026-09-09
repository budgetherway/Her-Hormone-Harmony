import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-ivory/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/logo.jpg"
            alt="Her Hormone Harmony"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-display text-lg text-forest">
            Her Hormone Harmony
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[0.95rem] md:flex">
          <Link href="/blog" className="text-ink no-underline hover:text-terracotta-dark">
            Blog
          </Link>
          <Link href="/about" className="text-ink no-underline hover:text-terracotta-dark">
            About
          </Link>
          <Link href="/contact" className="text-ink no-underline hover:text-terracotta-dark">
            Contact
          </Link>
        </nav>

        <Link
          href="/#free-guide"
          className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-ivory no-underline transition-colors hover:bg-forest-dark"
        >
          Get the free guide
        </Link>
      </Container>
    </header>
  );
}
