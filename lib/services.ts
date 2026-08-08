export type ServiceSlug =
  | "custom-website-design-development"
  | "landing-page-design"
  | "website-redesign-optimization"
  | "ai-chatbot-integration"
  | "seo-performance-optimization";

export type Service = {
  slug: ServiceSlug;
  number: string;
  name: string;
  shortDescription: string;
  detail: string;
  includes: readonly string[];
  bestFor: string;
  outcome: string;
};

export const services: readonly Service[] = [
  {
    slug: "custom-website-design-development",
    number: "01",
    name: "Custom Website Design & Development",
    shortDescription: "Premium, responsive websites built around your brand and business goals.",
    detail: "A complete website engagement that connects positioning, page structure, visual direction, copy hierarchy, and development. The result is tailored to your business instead of adapted from a generic template.",
    includes: ["Website strategy and sitemap", "Custom responsive interface", "Conversion-focused page structure", "Forms and essential integrations", "Launch testing and handoff"],
    bestFor: "Service businesses and growing brands that need a credible, differentiated website built properly from the ground up.",
    outcome: "A polished digital home that makes the business easier to understand, trust, and contact.",
  },
  {
    slug: "landing-page-design",
    number: "02",
    name: "Landing Page Design",
    shortDescription: "Conversion-focused landing pages designed to generate leads and sales.",
    detail: "One focused experience for one audience, campaign, or offer. We remove distractions, strengthen the message, and create a deliberate path from first impression to inquiry or purchase.",
    includes: ["Offer and audience positioning", "Conversion-led page wireframe", "Custom visual design", "Lead form or booking path", "Campaign tracking setup"],
    bestFor: "Paid advertising, new offers, lead magnets, product launches, and businesses that need a focused campaign destination.",
    outcome: "A clearer campaign journey with fewer reasons to hesitate and a stronger reason to act.",
  },
  {
    slug: "website-redesign-optimization",
    number: "03",
    name: "Website Redesign & Optimization",
    shortDescription: "Modernize outdated websites and improve usability, mobile experience, and performance.",
    detail: "We assess what is holding the existing site back, keep what remains valuable, and rebuild the experience around clearer content, stronger credibility, and easier action on every screen.",
    includes: ["Website and content audit", "Information architecture cleanup", "Modern visual redesign", "Mobile UX improvements", "Performance and conversion refinement"],
    bestFor: "Businesses with an established offer whose current website looks dated, feels confusing, loads slowly, or no longer represents the quality of their work.",
    outcome: "A more useful website that protects existing brand equity while removing the friction costing attention and inquiries.",
  },
  {
    slug: "ai-chatbot-integration",
    number: "04",
    name: "AI Chatbot & Receptionist Integration",
    shortDescription: "An AI website receptionist that answers customer questions, collects lead details, supports booking, and routes inquiries well.",
    detail: "We configure the chatbot around your services, customer questions, and real workflows—not novelty. It can talk with visitors, answer useful questions, collect lead information, help with booking or inquiries, and hand each conversation to the right next step.",
    includes: ["Conversation and intent planning", "Business knowledge and FAQ setup", "Lead and inquiry collection", "Booking, CRM, or team handoff", "Escalation and fallback paths"],
    bestFor: "Businesses that receive repeat questions, need a receptionist-style first response, want after-hours lead capture, or need visitors routed to the right service faster.",
    outcome: "A practical AI receptionist that gives customers useful answers, captures qualified information, and keeps the team focused on the conversations that need a person.",
  },
  {
    slug: "seo-performance-optimization",
    number: "05",
    name: "SEO & Performance Optimization",
    shortDescription: "Improve website speed, technical SEO, mobile performance, and search visibility.",
    detail: "We strengthen the technical and on-page foundations search engines and visitors rely on: crawlability, metadata, content hierarchy, internal structure, responsive behavior, and loading performance.",
    includes: ["Technical SEO review", "Metadata and page hierarchy", "Core performance improvements", "Image and asset optimization", "Indexing and analytics checks"],
    bestFor: "Websites with slow pages, weak technical foundations, inconsistent search presentation, or content that is difficult for visitors and search engines to navigate.",
    outcome: "A faster, cleaner foundation that supports discoverability and creates a better experience after the click.",
  },
];
