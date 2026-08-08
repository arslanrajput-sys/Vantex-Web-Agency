interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}

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
  return value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character] ?? character);
}

async function sendAutoresponse(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ message: "Method not allowed." }, 405);
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin && origin !== requestUrl.origin) return json({ message: "Invalid request origin." }, 403);
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) return json({ message: "Confirmation email is not configured." }, 503);

  try {
    const body = await request.json<{ email?: string; name?: string }>();
    const email = body.email?.trim() || "";
    const name = body.name?.trim() || "there";
    if (!emailPattern.test(email)) return json({ message: "Invalid email address." }, 400);

    const greeting = escapeHtml(name.slice(0, 120));
    const text = `Hi ${name},\n\nThank you for reaching out to VantexWeb Studio. We've received your message and will review your requirements carefully. You can expect a response within 1 business day.\n\nBest regards,\nArslan E.\nFounder, VantexWeb Studio\nvantexwebstudio.com`;
    const html = `<p>Hi ${greeting},</p><p>Thank you for reaching out to VantexWeb Studio. We've received your message and will review your requirements carefully. You can expect a response within 1 business day.</p><p>Best regards,<br>Arslan E.<br>Founder, VantexWeb Studio<br><a href="https://vantexwebstudio.com">vantexwebstudio.com</a></p>`;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [email],
        subject: "We received your VantexWeb inquiry",
        text,
        html,
        tags: [{ name: "category", value: "contact-confirmation" }],
      }),
    });
    if (!response.ok) return json({ message: "Confirmation email could not be sent." }, 502);
    return json({ success: true });
  } catch {
    return json({ message: "Confirmation email could not be processed." }, 400);
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/autoresponse" || url.pathname === "/api/autoresponse/") {
      return sendAutoresponse(request, env);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
