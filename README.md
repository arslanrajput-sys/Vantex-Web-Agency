# VantexWeb Agency Website

A production-ready, responsive landing page for VantexWeb, built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Next.js build settings.
4. Add the environment variables listed below.
5. Deploy.

No database or paid package is required.

## Contact form setup

The browser submits to the server-side route at `app/api/contact/route.ts`. The route validates the request and forwards it to a secure HTTPS webhook, so no endpoint or secret is exposed in browser code.

1. Create a form endpoint with Formspree or another HTTPS form service.
2. Copy `.env.example` to `.env.local`.
3. Set `CONTACT_FORM_ENDPOINT` to the endpoint URL.
4. Add the same variable in the Vercel project settings.

Without this variable, the form returns a clear setup message and direct-email fallback. Never put private keys in variables prefixed with `NEXT_PUBLIC_`.

## Environment variables

| Variable | Purpose | Required |
| --- | --- | --- |
| `CONTACT_FORM_ENDPOINT` | Server-side form forwarding endpoint | For live submissions |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL and sitemap base | Recommended |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email in the page and schema | Recommended |

## Content updates

- Contact information and site URL: `.env.local` / Vercel environment variables
- Portfolio projects: `components/sections.tsx`, in the `projects` array
- Pricing packages: `components/sections.tsx`, in the `packages` array
- Contact-form package ranges: `components/contact-form.tsx`, in the `budgetOptions` array
- FAQ content: `components/faq.tsx`, in the `faqs` array
- Logo: replace `public/logo.svg` while preserving its filename, or update `components/logo.tsx`
- HD horizontal logo master: `public/vantexweb-logo-hd.png`
- SEO metadata: `app/layout.tsx`
- Structured data: `app/page.tsx`

## Project structure

```text
app/
  api/contact/route.ts
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  comparison.tsx
  contact-form.tsx
  faq.tsx
  footer.tsx
  hero.tsx
  logo.tsx
  navbar.tsx
  section-heading.tsx
  sections.tsx
  trust-bar.tsx
public/
  favicon.svg
  logo.svg
  og-image.svg
  vantexweb-logo-hd.png
```

## Notes

- The three featured portfolio pieces are intentionally labeled as concept projects.
- Sample testimonials are explicitly labeled and are not presented as real client endorsements.
- Animations respect `prefers-reduced-motion`.
- The global reveal, cursor-light, scroll-progress, and hero motion system lives in `components/motion-system.tsx` and `components/hero.tsx`.
