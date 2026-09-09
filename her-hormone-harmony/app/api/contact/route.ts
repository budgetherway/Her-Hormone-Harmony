import { NextRequest, NextResponse } from "next/server";

// Logs contact form submissions. Wire this up to an email service
// (Resend, Postmark, SendGrid, etc.) so messages actually reach an inbox,
// then remove the console.log.
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    message.trim().length === 0
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  console.log("New contact message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
