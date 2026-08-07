# VantexWeb Agency Website

A production-ready VantexWeb agency site built with Next.js App Router, TypeScript, and Tailwind CSS. Next.js generates a static site in `out/`; Cloudflare Workers Static Assets serves it globally, while the Worker handles `/api/contact`.

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
- Only `/api/*` is routed through the Worker first.
- `/api/contact` validates and forwards contact requests without exposing the webhook URL to browser code.

To test the same runtime locally:

```bash
npm run preview:cloudflare
```

Wrangler prints the local preview URL, normally [http://localhost:8787](http://localhost:8787).

## Cloudflare variables and secrets

Open **Workers & Pages > vantex-web-agency > Settings > Variables and Secrets**.

Add this encrypted runtime secret:

| Variable | Purpose | Required |
| --- | --- | --- |
| `CONTACT_FORM_ENDPOINT` | HTTPS Formspree endpoint or another form webhook | Required for contact-form delivery |

Add these as build variables when their production values differ from the defaults:

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL and sitemap base | Recommended |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email in the page and structured data | Recommended |

Only variables prefixed with `NEXT_PUBLIC_` are embedded into static browser output. Keep `CONTACT_FORM_ENDPOINT` encrypted.

For local Worker testing, create `.dev.vars`:

```text
CONTACT_FORM_ENDPOINT=https://your-secure-form-endpoint.example
```

`.dev.vars` is ignored by Git. Without this secret, `/api/contact` deliberately returns a setup message instead of silently losing a lead.

## Content updates

- Contact information and canonical URL: Cloudflare build environment variables
- Portfolio projects: `components/sections.tsx`, in the `projects` array
- Pricing packages: `components/sections.tsx`, in the `packages` array
- Contact-form package ranges: `components/contact-form.tsx`, in `budgetOptions`
- FAQ content: `components/faq-data.ts`, in `faqs`
- Logo: `public/logo.svg` and `components/logo.tsx`
- HD horizontal logo master: `public/vantexweb-logo-hd.png`
- SEO metadata: `app/layout.tsx`
- Structured data: `app/page.tsx`

## Deployment structure

```text
app/                 Next.js pages and static metadata routes
components/          Reusable interface components
public/_headers      Cloudflare Static Assets headers
worker.ts            Cloudflare Worker and contact endpoint
next.config.mjs      Next.js static-export configuration
wrangler.jsonc       Worker entrypoint and static-assets configuration
out/                 Generated deployable artifact
```

## Notes

- The deployed website does not require a Node.js server.
- `public/_headers` is copied into `out/` and applied by Workers Static Assets.
- Animations respect `prefers-reduced-motion`.
- Concept portfolio work and sample testimonials are labeled clearly.
