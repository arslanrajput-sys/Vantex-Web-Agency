import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VantexWeb",
    short_name: "VantexWeb",
    description: "Custom websites for service businesses built to improve trust, generate leads, and turn visitors into customers.",
    start_url: "/",
    display: "standalone",
    background_color: "#07100f",
    theme_color: "#07100f",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
