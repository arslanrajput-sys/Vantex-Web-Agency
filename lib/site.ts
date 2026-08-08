const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://vantexwebstudio.com").replace(/\/+$/, "");

export const site = {
  name: "VantexWeb",
  url: siteUrl,
  email: "hello@vantexwebstudio.com",
  phoneDisplay: "+1 (346) 458-0307",
  phoneHref: "+13464580307",
} as const;
