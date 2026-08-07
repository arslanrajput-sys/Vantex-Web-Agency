import { Bot, Code2, Gauge, MousePointerClick, RefreshCw } from "lucide-react";
import type { ServiceSlug } from "@/lib/services";

const icons = {
  "custom-website-design-development": Code2,
  "landing-page-design": MousePointerClick,
  "website-redesign-optimization": RefreshCw,
  "ai-chatbot-integration": Bot,
  "seo-performance-optimization": Gauge,
} satisfies Record<ServiceSlug, typeof Code2>;

export function ServiceIcon({ slug, size = 22 }: { slug: ServiceSlug; size?: number }) {
  const Icon = icons[slug];
  return <Icon size={size} aria-hidden="true"/>;
}
