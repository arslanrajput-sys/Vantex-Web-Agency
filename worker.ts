interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}

interface ContactSubmission {
  name?: string;
  phone?: string;
  email?: string;
  businessName?: string;
  inquiryType?: string;
  budget?: string;
  message?: string;
  companyWebsite?: string;
}

interface ResendMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  tag: string;
  idempotencyKey: string;
}

const leadEmail = "hello@vantexwebstudio.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character,
  );
}

function clean(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

async function sendWithResend(env: Env, message: ResendMessage) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": message.idempotencyKey,
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      html: message.html,
      ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      tags: [{ name: "category", value: message.tag }],
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "Unavailable");
    console.error("Resend delivery failed", { status: response.status, tag: message.tag, details });
  }

  return response.ok;
}

function requestIsSameOrigin(request: Request) {
  const origin = request.headers.get("Origin");
  return !origin || origin === new URL(request.url).origin;
}

async function sendContactEmails(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ success: false, message: "Method not allowed." }, 405);
  if (!requestIsSameOrigin(request)) return json({ success: false, message: "Invalid request origin." }, 403);
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    return json({ success: false, message: "Email delivery is not configured." }, 503);
  }

  try {
    const submitted = await request.json<ContactSubmission>();
    const name = clean(submitted.name, 120);
    const phone = clean(submitted.phone, 60);
    const email = clean(submitted.email, 254).toLowerCase();
    const businessName = clean(submitted.businessName, 160);
    const inquiryType = clean(submitted.inquiryType, 160);
    const budget = clean(submitted.budget, 80);
    const message = clean(submitted.message, 5000);
    const honeypot = clean(submitted.companyWebsite, 200);

    if (honeypot) return json({ success: true });
    if (!name || !phone || !emailPattern.test(email) || !budget || message.length < 20) {
      return json({ success: false, message: "Please complete all required fields correctly." }, 400);
    }

    const safe = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      businessName: escapeHtml(businessName || "Not provided"),
      inquiryType: escapeHtml(inquiryType || "Not selected"),
      budget: escapeHtml(budget),
      message: escapeHtml(message).replace(/\r?\n/g, "<br>"),
    };
    const submissionId = crypto.randomUUID();
    const leadText = [
      "New Website Lead - VantexWeb",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Business name: ${businessName || "Not provided"}`,
      `Inquiry type: ${inquiryType || "Not selected"}`,
      `Estimated budget: ${budget}`,
      "",
      "Project details:",
      message,
    ].join("\n");
    const leadHtml = `<h2>New Website Lead - VantexWeb</h2><table role="presentation" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px"><tr><th align="left" style="border-bottom:1px solid #ddd">Name</th><td style="border-bottom:1px solid #ddd">${safe.name}</td></tr><tr><th align="left" style="border-bottom:1px solid #ddd">Phone</th><td style="border-bottom:1px solid #ddd">${safe.phone}</td></tr><tr><th align="left" style="border-bottom:1px solid #ddd">Email</th><td style="border-bottom:1px solid #ddd"><a href="mailto:${safe.email}">${safe.email}</a></td></tr><tr><th align="left" style="border-bottom:1px solid #ddd">Business name</th><td style="border-bottom:1px solid #ddd">${safe.businessName}</td></tr><tr><th align="left" style="border-bottom:1px solid #ddd">Inquiry type</th><td style="border-bottom:1px solid #ddd">${safe.inquiryType}</td></tr><tr><th align="left" style="border-bottom:1px solid #ddd">Estimated budget</th><td style="border-bottom:1px solid #ddd">${safe.budget}</td></tr></table><h3>Project details</h3><p>${safe.message}</p>`;

    const leadDelivered = await sendWithResend(env, {
      to: leadEmail,
      replyTo: email,
      subject: "New Website Lead - VantexWeb",
      text: leadText,
      html: leadHtml,
      tag: "contact-lead",
      idempotencyKey: `contact-lead-${submissionId}`,
    });
    if (!leadDelivered) {
      return json({ success: false, message: "Your request could not be delivered. Please email us directly." }, 502);
    }

    const greeting = safe.name;
    const confirmationText = `Hi ${name},\n\nThank you for reaching out to VantexWeb Studio. We've received your message and will review your requirements carefully. You can expect a response within 1 business day.\n\nBest regards,\nArslan E.\nFounder, VantexWeb Studio\nvantexwebstudio.com`;
    const confirmationHtml = `<p>Hi ${greeting},</p><p>Thank you for reaching out to VantexWeb Studio. We've received your message and will review your requirements carefully. You can expect a response within 1 business day.</p><p>Best regards,<br>Arslan E.<br>Founder, VantexWeb Studio<br><a href="https://vantexwebstudio.com">vantexwebstudio.com</a></p>`;
    const confirmationDelivered = await sendWithResend(env, {
      to: email,
      subject: "We received your VantexWeb inquiry",
      text: confirmationText,
      html: confirmationHtml,
      tag: "contact-confirmation",
      idempotencyKey: `contact-confirmation-${submissionId}`,
    });
    if (!confirmationDelivered) {
      return json(
        {
          success: false,
          leadDelivered: true,
          message: "Your request was received, but the confirmation email could not be sent. Please email us directly.",
        },
        502,
      );
    }

    return json({ success: true });
  } catch {
    return json({ success: false, message: "Your request could not be processed. Please try again." }, 400);
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      return sendContactEmails(request, env);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
