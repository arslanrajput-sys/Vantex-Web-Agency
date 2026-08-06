import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.companyWebsite) return NextResponse.json({ message: "Thanks—your request has been received." });
    if (!body.name || !body.businessName || !body.email || !body.businessType || !body.budget || !body.details) return NextResponse.json({ message: "Please complete every required field." }, { status: 400 });
    if (!emailPattern.test(String(body.email)) || String(body.details).trim().length < 20) return NextResponse.json({ message: "Please enter a valid email and a little more project detail." }, { status: 400 });
    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (!endpoint) return NextResponse.json({ message: "The contact form is not connected yet. Please email us directly." }, { status: 503 });
    if (!endpoint.startsWith("https://")) return NextResponse.json({ message: "The contact form endpoint is not configured securely." }, { status: 500 });
    const response = await fetch(endpoint, { method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"}, body:JSON.stringify({...body,source:"VantexWeb website"}), cache:"no-store" });
    if (!response.ok) return NextResponse.json({ message: "We could not send your request. Please try again or email us directly." }, { status: 502 });
    return NextResponse.json({ message: "Thanks—your request is in. We will be in touch soon." });
  } catch {
    return NextResponse.json({ message: "We could not process that request. Please try again." }, { status: 400 });
  }
}
