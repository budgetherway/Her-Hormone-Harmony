import Link from "next/link";
import { HANDBOOK_TITLE, HANDBOOK_SUBTITLE, HANDBOOK_URL } from "@/lib/constants";

export default function HandbookCTA({ label }: { label: string }) {
  return (
    <aside className="my-10 rounded-2xl border border-terracotta/30 bg-terracotta/10 p-8">
      <p className="text-sm font-medium text-terracotta-dark">From the Handbook</p>
      <p className="mt-2 font-display text-2xl text-forest">{HANDBOOK_TITLE}</p>
      <p className="mt-1 text-sm text-ink/70">{HANDBOOK_SUBTITLE}</p>
      <p className="mt-4 max-w-md text-[0.95rem] text-ink/80">{label}</p>
      <Link
        href={HANDBOOK_URL}
        className="mt-5 inline-block rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-ivory no-underline transition-colors hover:bg-terracotta-dark"
      >
        Get the Handbook
      </Link>
    </aside>
  );
}
