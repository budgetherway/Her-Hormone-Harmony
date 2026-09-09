import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Her Hormone Harmony.",
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl">Get in touch</h1>
          <p className="mt-4 max-w-sm text-ink/75">
            Questions about a post, a partnership idea, or something on the
            Handbook? Send it over. We read everything and reply within a
            few days.
          </p>
          <p className="mt-6 text-sm text-ink/60">
            Prefer email? Reach us directly at{" "}
            <a href="mailto:hello@herhormoneharmony.com">
              hello@herhormoneharmony.com
            </a>
            .
          </p>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
