# Dr. Srinija Kummaraganti: practice website

Website for Dr. Srinija Kummaraganti, consultant interventional pulmonologist and allergy specialist at TrueMed Diagnostics and Clinics, Kondapur, Hyderabad.

React 19, Vite 7, Tailwind CSS 3 and shadcn/ui (Radix). Every page is pre-rendered to static HTML at build time, so it loads fast, works for search engines that do not run JavaScript, and can be hosted on any static host.

## Editing content

All text, contact details, hours, tests and conditions live in one file: [`src/content/site.ts`](src/content/site.ts).
See [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) for how to edit it and the medical advertising rules that apply.

## Getting started

Requires Node.js 20.19 or later (22 recommended, see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-check, build, and pre-render every page into `dist/` |
| `npm run preview` | Serve `dist/` locally to check the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript only |

The build ends by listing any content that still looks like a placeholder (registration number, phone, photo and so on). Set `STRICT_CONTENT=1` to make those warnings fail the build.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home: hero with spirometry curve, symptom picker, tests, doctor, first visit, FAQ, hours |
| `/about/` | Doctor profile, qualifications, research, registration |
| `/tests/`, `/tests/<slug>/` | Tests and procedures, one page each |
| `/conditions/`, `/conditions/<slug>/` | Conditions, one page each |
| `/visit/` | Address, hours, map and appointment form |
| `/privacy/`, `/medical-disclaimer/` | Legal pages |

Each page gets its own title, description, canonical link, Open Graph tags and JSON-LD (Physician, MedicalTest or MedicalProcedure, MedicalWebPage with MedicalCondition, BreadcrumbList). `sitemap.xml`, `robots.txt` and `404.html` are generated at build time.

## Appointment form

The form validates input, asks for consent, and then:

- sends the request by email through [Web3Forms](https://web3forms.com) when `VITE_WEB3FORMS_KEY` is set, or
- opens WhatsApp with the request already filled in when it is not.

No patient data is stored by the website.

## Deployment

### GitHub Pages (current)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. It reads the Pages base path automatically, so the same build works at `https://<user>.github.io/dr-kgbs-website/` and on a custom domain.

1. Settings → Pages → Source: **GitHub Actions**.
2. Optional: Settings → Secrets and variables → Actions:
   - secret `WEB3FORMS_KEY` to send form requests by email
   - variable `SITE_URL` (for example `https://www.drsrinijapulmo.com`) once a custom domain is connected

GitHub's terms say Pages is not intended for running an online business. For the long term, Cloudflare Pages is free, has data centres in Hyderabad, and needs no code changes.

### Cloudflare Pages or any static host

Build command `npm run build`, output folder `dist`, environment variables as in `.env.example` (`BASE_PATH=/`).

## Branches

- `main`: what is live. Deploys automatically.
- `develop`: work in progress. CI runs lint and build on every push and pull request.

## Project layout

```text
src/
  content/site.ts      all site content (edit this)
  content/types.ts     content shapes
  pages/               one component per page type
  components/          layout, booking form, symptom picker, curve, shared blocks
  components/ui/       shadcn/ui primitives
  lib/seo.ts           routes, titles, descriptions, structured data
  entry-server.tsx     build-time renderer used by scripts/prerender.mjs
scripts/prerender.mjs  writes static HTML, sitemap and robots.txt
docs/                  content guide, SEO plan, research
```
