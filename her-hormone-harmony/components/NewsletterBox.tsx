import Link from "next/link";
import { FREE_GUIDE_TITLE, FREE_GUIDE_URL } from "@/lib/constants";

export default function NewsletterBox({
  id,
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-sage/30 bg-sage/10 ${
        compact ? "p-6" : "p-8"
      }`}
    >
      <p className="font-display text-xl text-forest">{FREE_GUIDE_TITLE}</p>
      <p className="mt-2 max-w-md text-sm text-ink/75">
        A free, phase-by-phase starting point: what to eat and when,
        without overhauling your whole kitchen. Grab your copy instantly.
      </p>
      <Link
        href={FREE_GUIDE_URL}
        className="mt-4 inline-block rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory no-underline transition-colors hover:bg-forest-dark"
      >
        Get the free guide
      </Link>
    </div>
  );
}
