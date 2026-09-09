import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Her Hormone Harmony makes money from links on this site.",
};

export default function AffiliateDisclosurePage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl md:text-4xl">Affiliate Disclosure</h1>

      <div className="prose-article mt-8">
        <p>
          Some links on Her Hormone Harmony are affiliate links. If you
          click one and make a purchase, we may earn a small commission.
          This does not change the price you pay.
        </p>
        <p>
          We only link to products we&apos;d genuinely recommend, whether
          that&apos;s a supplement, a kitchen tool, a cycle-tracking app, or
          our own <em>Complete Cycle Syncing Handbook</em>. Commission
          never decides what we recommend. If something doesn&apos;t hold
          up, we don&apos;t link to it, paid or not.
        </p>
        <p>
          This disclosure exists to comply with FTC guidelines on affiliate
          marketing. Articles that contain affiliate links carry a short
          reminder near the top of the post, and this page is linked in the
          footer of every page on the site.
        </p>
        <p>
          Questions about a specific link or recommendation are always
          welcome through the <a href="/contact">Contact</a> page.
        </p>
      </div>
    </Container>
  );
}
