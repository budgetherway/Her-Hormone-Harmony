"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-sage/30 bg-sage/10 p-6 text-forest">
        Thanks for reaching out. We read every message and reply within a
        few days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-forest">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 outline-none focus:border-forest focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-forest">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 outline-none focus:border-forest focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-forest">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 outline-none focus:border-forest focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-terracotta-dark">
          Something went wrong. Mind trying again in a moment?
        </p>
      )}
    </form>
  );
}
