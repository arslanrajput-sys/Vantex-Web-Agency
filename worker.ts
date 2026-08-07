interface Env {
  ASSETS: Fetcher;
  CONTACT_FORM_ENDPOINT?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(message: string, status = 200) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json("Method not allowed.", 405);

  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return json("Please submit the form using the website.", 415);
    }

    const body = await request.json<Record<string, unknown>>();
    if (body.companyWebsite) return json("Thanks—your request has been received.");

    if (!body.name || !body.businessName || !body.email || !body.businessType || !body.budget || !body.details) {
      return json("Please complete every required field.", 400);
    }
    if (!emailPattern.test(String(body.email)) || String(body.details).trim().length < 20) {
      return json("Please enter a valid email and a little more project detail.", 400);
    }

    const endpoint = env.CONTACT_FORM_ENDPOINT;
    if (!endpoint) return json("The contact form is not connected yet. Please email hello@vantexwebstudio.com directly.", 503);
    if (!endpoint.startsWith("https://")) return json("The contact form endpoint is not configured securely.", 500);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...body, source: "VantexWeb website" }),
    });

    if (!response.ok) return json("We could not send your request. Please try again or email hello@vantexwebstudio.com.", 502);
    return json("Thanks—your request is in. We will be in touch soon.");
  } catch {
    return json("We could not process that request. Please try again.", 400);
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      return handleContact(request, env);
    }
    if (url.pathname.startsWith("/api/")) return json("Not found.", 404);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
