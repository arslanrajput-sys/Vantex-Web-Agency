# VantexWeb Agency Website

A production-ready VantexWeb landing page built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons. The project exports to static HTML and deploys natively to **Cloudflare Pages**, with the contact endpoint running as a **Cloudflare Pages Function**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare production build

```bash
npm run build
```

The complete static website is generated in `out/`. The build also copies Cloudflare’s `_headers` and `_routes.json` files into that directory.

The repository pins Node.js `22.16.0` in `.node-version`, matching Cloudflare Pages’ current v3 build image.

To test the generated site and Pages Function together in Cloudflare’s local runtime:

```bash
npm run preview:cloudflare
```

The preview is normally available at [http://localhost:8788](http://localhost:8788).

## Deploy through Cloudflare Pages Git integration

Use the **Pages** workflow rather than the Next.js Workers/OpenNext preset:

1. Open **Workers & Pages** in Cloudflare.
2. Select **Create application → Pages → Connect to Git**.
3. Select `arslanrajput-sys/Vantex-Web-Agency`.
4. Configure:

| Cloudflare setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` or `None` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Cloudflare Pages Git integration deploys `out/` automatically; it does not need a separate deploy command.

## Deploy with Wrangler

The repository includes `wrangler.jsonc` with `pages_build_output_dir: "./out"`.

For a brand-new account/project, create the Pages project once if Wrangler asks:

```bash
npx wrangler pages project create vantex-web-agency --production-branch main
```

```bash
npm run build
npm run deploy
```

If you use the application screen shown in Cloudflare’s newer Git build interface, use:

| Field | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |

Do not use the generic `npx wrangler deploy` command for this Pages configuration. The project script runs `wrangler pages deploy`.

## Contact form setup

The browser submits to `/api/contact`, implemented at `functions/api/contact.ts`. Cloudflare automatically deploys that file as a Pages Function. The function validates the request and forwards it to an HTTPS form webhook without exposing the endpoint in browser code.

1. Create an endpoint with Formspree or another HTTPS form service.
2. In Cloudflare, open **Workers & Pages → vantex-web-agency → Settings → Variables and Secrets**.
3. Add `CONTACT_FORM_ENDPOINT` as an encrypted secret.
4. Use the production and preview environments as needed.

For local Pages preview, create a `.dev.vars` file:

```text
CONTACT_FORM_ENDPOINT=https://your-secure-form-endpoint.example
```

`.dev.vars` is ignored by Git. Without this value, `/api/contact` deliberately returns a setup message instead of silently losing the inquiry.

## Build-time environment variables

Add these under the Cloudflare project’s build variables when using custom production values:

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL and sitemap base | Recommended |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email in the page and schema | Recommended |

Only variables prefixed with `NEXT_PUBLIC_` are embedded into static browser output. Keep `CONTACT_FORM_ENDPOINT` secret.

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
app/                         Next.js pages and static metadata routes
components/                  Reusable interface components
functions/api/contact.ts     Cloudflare Pages Function
public/_headers              Cloudflare security and cache headers
public/_routes.json          Runs Functions only for /api/*
next.config.mjs              Static-export configuration
wrangler.jsonc               Cloudflare Pages configuration
out/                         Generated deployable artifact
```

## Notes

- The website does not require a Node.js server after build.
- Static pages are served directly from Cloudflare’s edge network.
- Only `/api/*` invokes a Pages Function; regular page and asset requests remain static.
- Animations respect `prefers-reduced-motion`.
- Concept portfolio work and sample testimonials are labeled clearly.
