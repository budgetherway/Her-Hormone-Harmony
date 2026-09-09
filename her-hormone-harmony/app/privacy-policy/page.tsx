import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Her Hormone Harmony collects and uses your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: [Month Year]</p>

      <div className="prose-article mt-8">
        <p>
          This policy explains what information Her Hormone Harmony
          (&quot;we,&quot; &quot;us&quot;) collects when you visit this
          site, and how we use it. By using the site, you agree to the
          practices described here.
        </p>

        <h2>Information we collect</h2>
        <p>
          The 7-Day Hormone Balancing Food Guide and the Handbook are both
          delivered through Gumroad. When you click through to get either
          one, you&apos;ll be checking out on Gumroad&apos;s site, and
          Gumroad, not us, collects your email and payment details there.
          Their handling of that information is governed by{" "}
          <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer">
            Gumroad&apos;s own privacy policy
          </a>
          , not this one.
        </p>
        <p>
          On this site directly, we collect information when you use the
          contact form (whatever you include in your message), plus some
          information automatically through cookies and analytics tools,
          including your approximate location, browser type, device type,
          and which pages you visit.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to messages sent through the contact form</li>
          <li>To understand which content is useful, using aggregated analytics</li>
          <li>To improve the site and its content over time</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Third-party tools</h2>
        <p>
          We use Gumroad to sell and deliver the free guide and the
          Handbook, an analytics tool to understand site traffic, and
          Pinterest&apos;s tracking tag to measure how pins perform. Each
          of these providers has its own privacy policy governing how it
          handles data on our behalf.
        </p>

        <h2>Cookies</h2>
        <p>
          Cookies are small files stored on your device that help the site
          function and help us understand how it&apos;s used. You can
          disable cookies in your browser settings, though some site
          features may not work as well as a result.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us what information we hold about you, ask us to
          correct it, or ask us to delete it, by reaching out through the{" "}
          <a href="/contact">Contact</a> page. For anything Gumroad emails
          you directly (receipts, delivery of your guide or Handbook),
          use the unsubscribe or account options on Gumroad&apos;s side.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect information from children under 13.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Changes will be
          posted on this page with an updated date at the top.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through the{" "}
          <a href="/contact">Contact</a> page.
        </p>
      </div>
    </Container>
  );
}
