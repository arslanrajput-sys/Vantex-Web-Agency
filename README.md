# VantexWeb Agency Website

A production-ready VantexWeb agency site built with Next.js App Router, TypeScript, and Tailwind CSS. Next.js generates a static site in `out/`; Cloudflare Workers Static Assets serves it globally.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Worker Builds settings

This repository is configured for the Cloudflare **Worker Builds** screen shown in the dashboard. Use these exact values:

| Cloudflare setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

No output-directory field is needed. `wrangler.jsonc` already points Cloudflare to `./out` through `assets.directory`.

The build and deployment sequence is:

```bash
npm run build
npx wrangler deploy
```

The repository pins Node.js `22.16.0` in `.node-version`, matching the version detected in the Cloudflare build log.

## How deployment works

- `npm run build` runs `next build` and creates the fully static site in `out/`.
- `npx wrangler deploy` uploads `worker.ts` and the `out/` static assets as one Worker deployment.
- Static page and asset requests are served by Cloudflare Static Assets.
- Contact forms submit asynchronously to FormSubmit and keep visitors on the website.
- A Cloudflare Worker sends the customer confirmation email through Resend after FormSubmit accepts the lead.

To test the same runtime locally:

```bash
npm run preview:cloudflare
```

Wrangler prints the local preview URL, normally [http://localhost:8787](http://localhost:8787).

## Cloudflare variables and secrets

Open **Workers & Pages > vantex-web-agency > Settings > Variables and Secrets**.

Add these as build variables when their production values differ from the defaults:

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL and sitemap base | Recommended |

Add these Worker variables to enable customer confirmation emails:

| Variable | Purpose | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | Resend API key stored as an encrypted secret | Yes |
| `RESEND_FROM_EMAIL` | Verified Resend sender, for example `VantexWeb Studio <hello@vantexwebstudio.com>` | Yes |

Before setting these values, verify `vantexwebstudio.com` in Resend. The API key stays in Cloudflare and is never included in browser code.

Public contact details are centralized in `lib/site.ts`. The AJAX FormSubmit destination is derived from that shared email address.

## Content updates

- Contact information: `lib/site.ts`
- Canonical URL: `NEXT_PUBLIC_SITE_URL`, with the production fallback in `lib/site.ts`
- Services and service-page content: `lib/services.ts`
- Portfolio projects: `lib/portfolio.ts`
- Pricing packages: `components/sections.tsx`, in the `packages` array
- Contact-form package ranges: `components/contact-form.tsx`, in `budgetOptions`
- FAQ content: `components/faq-data.ts`, in `faqs`
- Logo: `public/logo.svg` and `components/logo.tsx`
- Shared SEO metadata, social cards, robots directives, and site-wide schema: `lib/seo.ts`
- Page-specific metadata and structured data: each route under `app/`

## Deployment structure

```text
app/                 Next.js pages and static metadata routes
components/          Reusable interface components
public/_headers      Cloudflare Static Assets headers
worker.ts            Cloudflare static-assets Worker
next.config.mjs      Next.js static-export configuration
wrangler.jsonc       Worker entrypoint and static-assets configuration
out/                 Generated deployable artifact
```

## Notes

- The deployed website does not require a Node.js server.
- `public/_headers` is copied into `out/` and applied by Workers Static Assets.
- Animations respect `prefers-reduced-motion`.
- The homepage shows three selected projects; `/portfolio/` contains the complete live portfolio.
- `/about/` and `/contact/` provide dedicated studio and project-inquiry experiences.
