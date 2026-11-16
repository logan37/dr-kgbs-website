# Frontend Stack and Hosting for an SEO-Critical Doctor Practice Website

Context: the current site is React 19 + Vite 7 + Tailwind 3 + shadcn/ui, a single-page app with one catch-all `BrowserRouter` route, deployed to a GitHub Pages subpath. The goal is 20-40 statically prerendered pages. Research date: 16 Nov 2026. I used about 18 tool calls. Wherever I could, I used official docs (React Router, Next.js, Astro, Vercel, GitHub, Cloudflare, web.dev). Several pricing and CMS points come from third-party blogs, and I flag those where they appear.

## Q1. Prerendering while staying on React + Vite (vite-react-ssg, Vike, React Router framework-mode prerender, react-snap)

### Takeaway
The best-maintained option that stays on React is React Router's own framework mode with `ssr: false` and a `prerender` list. React Router is now on v8 (8.5.1 is listed as latest), and it emits a real `index.html` per route. vite-react-ssg has effectively been handed off to React Router: it targets RR v6 and hasn't checked off React 19 support. react-snap is unmaintained. Vike is maintained and capable, but it means adopting a second framework's conventions.

### Cited Findings
- **React Router prerender (framework mode only).** Pre-rendering is "available in Framework Mode only" and is configured in `react-router.config.ts` with `prerender: true` (all static paths), an array of paths, or an async function that gets `getStaticPaths()`. `prerender.concurrency` controls parallel rendering. — [React Router docs: Pre-Rendering](https://reactrouter.com/how-to/pre-rendering)
- With `ssr: false` plus `prerender`, there is no runtime server and you deploy to a static host. Each path emits `[url].html` and a `[url].data` file used for client-side navigation. Routes that aren't prerendered fall back to `index.html` or `__spa-fallback.html`, which needs a host rewrite (`/* /__spa-fallback.html 200`). — [React Router docs: Pre-Rendering](https://reactrouter.com/how-to/pre-rendering)
- Constraints under `ssr: false`: `action` and `headers` exports are prohibited (the build errors). Loaders are allowed only on prerendered routes. — [React Router docs: Pre-Rendering](https://reactrouter.com/how-to/pre-rendering)
- The docs site lists **8.5.1 as "latest"**, with 7.18.5 as the last v7. — [React Router docs](https://reactrouter.com/how-to/pre-rendering)
- A search snippet (releases.sh) reads "React Router 8 now supported — requires Node.js 22.22.0, React 19.2.7, Vite 7". I couldn't confirm which package this note belongs to or whether these are RR8's own minimums. — [releases.sh](https://releases.sh/release/rel_yXjj4FgLhCpbwfYM-QiGn-react-router-8-now-supported-requires-node-js-22-22-0-react-19-2-7-vite-7)
- An experimental `ssr: "unstable_api-only"` mode prerenders documents and keeps a runtime server for loaders and actions. It "may change in minor or patch releases". — [React Router docs](https://reactrouter.com/how-to/pre-rendering)
- A Render community thread shows developers struggling with rewrites when they mix SSG routes with an SPA fallback on static hosts. — [Render community](https://community.render.com/t/deploying-a-ssg-spa-react-router-v7-site-framework-mode-to-static-sites/38976)
- **vite-react-ssg:** 240 stars, 16 forks, 10 open issues, and no GitHub Releases published. The README says it "will continue to maintain SSG functionality for React Router v6 users" and recommends React Router v7's built-in SSG instead. "Support react19" is still unchecked on its roadmap. Adoption means switching to `vite-react-ssg build` and a `ViteReactSSG({ routes })` entry with a `RouteRecord[]` routes array. — [GitHub: Daydreamer-riri/vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)
- The latest version jsDelivr shows is 0.9.2. An ecosyste.ms mirror shows a last push on 2025-02-26, though that mirror may be stale. — [jsDelivr README 0.9.2](https://cdn.jsdelivr.net/npm/vite-react-ssg@0.9.2/README.md); [awesome.ecosyste.ms](https://awesome.ecosyste.ms/projects/github.com%2FDaydreamer-riri%2Fvite-react-ssg)
- **Vike:** the official docs recommend `vike-react` for React. Prerendering is enabled with `prerender: true` in config. — [vike.dev/vike-react](https://vike.dev/vike-react); [vike.dev/react](https://vike.dev/react)
- vike-react version data conflicts: npm showed 0.6.1, while DepScope lists v0.6.24 updated 2026-06-08. It is still pre-1.0. — [npm vike-react](https://www.npmjs.com/package/vike-react); [DepScope](https://depscope.dev/pkg/npm/vike-react)
- In April 2026, EdgeOne Pages added official Vike support, which suggests ongoing ecosystem activity. — [EdgeOne: Vike on EdgeOne Pages](https://pages.edgeone.ai/resources/vike-on-edgeone-pages)
- **react-snap:** a practitioner guide describes it as unmaintained but still working. Forks and replacements exist: snappy-prerender, prerendererest, react-static-prerender and react-snap-vite. I did not verify any of them. — [DEV Community write-up](https://dev.to/vijay_rathod_b9db92cb65f8/pre-rendering-a-160-post-react-spa-with-react-snap-the-gotcha-that-silently-breaks-your-seo-3ino); [prerendererest README](https://cdn.jsdelivr.net/npm/prerendererest@1.0.2/README.md); [snappy-prerender](https://www.producthunt.com/p/snappy-prerender/snappy-prerender)

### Inferences
- **Adoption effort from a single-route BrowserRouter SPA to React Router framework mode (low to moderate, about 1-3 dev days for 20-40 pages).** The work is:
  1. Add `@react-router/dev`, swap the Vite React plugin for the `reactRouter()` plugin, and add `react-router.config.ts` with `ssr: false`, `prerender: true` (or a list) and `basename`.
  2. Replace `main.tsx`/`index.html` with `app/root.tsx` (`Layout`, `<Meta/>`, `<Links/>`, `<Scripts/>`) and `app/routes.ts`.
  3. Move each page into a route module that exports `meta` for per-page title, description, canonical and OG tags.
  4. Guard any `window` or `localStorage` access in shadcn components (`useEffect`).
  5. Move the booking form's POST to an external function, because route `action` is prohibited under `ssr: false`.

  shadcn/ui and Tailwind carry over unchanged.
- The trade-off: every page still ships and hydrates the full React runtime and route JS. That is fine for INP on a small site, but the JS payload is heavier than Astro's zero-JS-by-default.
- Because RR v8 is the current major, start the migration on v8 directly rather than v7. Confirm the v8 framework-mode and prerender API against the v8 docs, since the page I fetched is versionless "latest".
- Rule out react-snap (headless-Chrome snapshotting) and vite-react-ssg (no React 19 or RR7+ focus) for a new 2026 build.

### Gaps
- Exact React Router v8 release date and v8-specific breaking changes: I didn't fetch the changelog.
- Vike's GitHub stars, release cadence and 1.0 status: I didn't fetch the repo.
- I found no 2025-2026 benchmark comparing Lighthouse or CWV across these React prerender options.

## Q2. Alternatives: Astro (React islands) or Next.js static export

### Takeaway
Astro 6 (stable since 10 March 2026, on Vite 7) is the most natural fit for a 20-40 page content site. It ships zero JS by default, has built-in Fonts and image handling, and its Markdown/MDX content collections are the cleanest authoring model. Existing shadcn React components can be reused as islands only where interactivity is needed. Next.js `output: 'export'` works, but it loses image optimization, server actions, redirects and headers, and gives no real advantage over React Router prerender for this site.

### Cited Findings
- **Astro 6** was released on **March 10, 2026**. Highlights:
  - a redesigned `astro dev` built on Vite's Environment API
  - a built-in **Fonts API** that handles downloading, self-hosting, fallbacks and preload hints
  - stable **Live Content Collections**
  - a stable **CSP API**
  - a rebuilt Cloudflare adapter that uses `workerd` in dev, prerendering and production
  - **Node 22+** required, with **Vite 7** used across all `@astrojs` packages
  - an experimental queued rendering mode that is "up to 2x faster rendering" in early benchmarks

  — [Astro blog: Astro 6](https://astro.build/blog/astro-6)
- Astro 6 moves to Zod 4, so content collection schemas need a compatibility check. — [noqta.tn Astro 6 guide](https://noqta.tn/en/blog/astro-6-content-first-web-framework-developer-guide-2026); [alternativeto.net](https://alternativeto.net/news/2026/3/astro-6-0-brings-new-astro-dev-built-in-fonts-api-live-content-collections-and-csp-api)
- Astro remains framework-agnostic, with official React support through its islands architecture. I found no React-island change specific to Astro 6. — [InfoQ: Astro v6 beta](https://www.infoq.com/news/2026/02/astro-v6-beta-cloudflare)
- **Next.js static export:** `output: 'export'` generates one HTML file per route into `out/`. Server Components run at build time. — [Next.js docs: Static Exports](https://nextjs.org/docs/app/guides/static-exports) (last updated 2026-08-09)
- Features unsupported under static export: dynamic routes without `generateStaticParams`, Route Handlers that read Request, cookies, rewrites, redirects, headers, Proxy (middleware), ISR, `next/image` with the default loader, Draft Mode and Server Actions. — [Next.js docs: Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- Next.js provides an official GitHub Pages template for static export. — [Next.js docs](https://nextjs.org/docs/app/guides/static-exports)

### Inferences
- **Astro migration effort: moderate, about 3-6 dev days.**
  1. Recreate the layout as `.astro` components.
  2. Install `@astrojs/react` and keep interactive shadcn pieces (mobile nav sheet, accordions, booking form) as `client:visible` or `client:idle` islands. Purely presentational shadcn markup (Card, Badge, Button) can be ported to `.astro` or rendered as React without a `client:` directive, which gives static HTML with no JS.
  3. Move condition, test and article pages into Markdown/MDX content collections with a Zod frontmatter schema (title, description, reviewedBy, lastReviewed, FAQ), which fits medical E-E-A-T well.
  4. Use `astro:assets` `<Image>` for AVIF/WebP generation at build, and the Fonts API for self-hosted, preloaded fonts.
  5. Add `@astrojs/sitemap`.

  Tailwind needs either the Tailwind 4 Vite plugin or staying on v3 via PostCSS. That is a judgement call, not verified here.
- **SEO and performance:** Astro, RR prerender and Next export all deliver full HTML to crawlers, so indexability is equivalent. Astro's advantage is much less JS, which helps INP and LCP on mid-range Android phones on Indian mobile networks.
- **Next.js:** heavier conceptual overhead (RSC, `"use client"` boundaries), plus loss of `next/image` optimization without a third-party loader. No compelling reason to choose it for a static brochure site unless the team already knows Next.js.
- **Ranking:**
  1. Astro 6 + React islands: best long-term content, SEO and performance fit.
  2. React Router v8 framework-mode prerender: least rewrite, keeps the SPA feel.
  3. Next.js static export.
  4. Vike.

### Gaps
- No verified 2025-26 benchmark comparing Astro and React Router prerender bundle sizes or CWV on comparable sites.
- I didn't verify shadcn/ui's official Astro installation guide or Tailwind 3-to-4 implications.
- Next.js current major version wasn't captured from the page.

## Q3. Hosting: GitHub Pages vs Cloudflare vs Netlify vs Vercel (custom domain, HTTPS, booking-form functions, free tiers, India performance)

### Takeaway
**Cloudflare (Workers with static assets, or legacy Pages) is the best free fit.** Static asset requests are free and unlimited. Free Workers cover a booking-form endpoint at 100k requests a day. Cloudflare has 22 Indian edge cities, including Hyderabad, Chennai and Mumbai. Vercel Hobby is **non-commercial only**, so a medical practice would need Pro at $20 per seat per month. GitHub Pages's terms exclude sites that "run your online business", and it has no functions. Netlify's free tier is now credit-based (300 credits), with bandwidth at 20 credits per GB.

### Cited Findings
- **GitHub Pages limits:** published sites can be no larger than 1 GB, with a soft bandwidth limit of 100 GB per month and a soft limit of 10 builds per hour (not applied to custom Actions workflows). It is not intended as free hosting to "run your online business, e-commerce site". It has no serverless functions. — [GitHub Docs: Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- **Cloudflare Workers free plan:**
  - 100,000 requests per day, resetting at midnight UTC (Error 1027 when exceeded)
  - 10 ms CPU per request
  - static assets: 20,000 files per version, 25 MiB maximum per file
  - 100 `_headers` rules and 2,100 `_redirects` rules
  - 100 Workers per account

  — [Cloudflare Docs: Workers limits](https://developers.cloudflare.com/workers/platform/limits/)
- Static asset requests are free and unlimited on Cloudflare Pages and on Workers static assets. — [Cloudflare Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/index.md)
- Third-party sources say Cloudflare now steers new projects to Workers with static assets rather than Pages. Pages still works but is described as the legacy path. — [morphllm comparison](https://www.morphllm.com/comparisons/cloudflare-pages-vs-workers); [DeployHQ](https://www.deployhq.com/blog/deployhq-static-hosting-vs-cloudflare-pages)
- Pages Free allows 500 builds per month with 1 concurrent build (third-party figure). — [DeployHQ](https://www.deployhq.com/blog/deployhq-static-hosting-vs-cloudflare-pages)
- **Cloudflare network:** 348 cities worldwide. The 22 Indian cities are Agra, Ahmedabad, Bangalore, Bhubaneswar, Chandigarh, **Chennai**, Coimbatore, **Hyderabad**, Jalandhar, Jamnagar, Kannur, Kanpur, Kochi, Kolkata, Ludhiana, **Mumbai**, Nagpur, New Delhi, Patna, Pune, Sambalpur and Udaipur. — [cloudflare.com/network](https://www.cloudflare.com/network/)
- **Vercel Hobby:** "Hobby teams are restricted to non-commercial personal use only. All commercial usage of the platform requires either a Pro or Enterprise plan." — [Vercel Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) (wording as returned in search results; that section was truncated in my fetch)
- Hobby includes 100 GB Fast Data Transfer, 1M CDN requests, 1M function invocations, 4 CPU-hrs, 5K image transformations and 100 deployments per day. If you exceed a limit you generally wait 30 days. Pro developer seats are **$20 per user per month**. — [Vercel Docs: Hobby plan](https://vercel.com/docs/plans/hobby) (last updated 2026-11-12)
- **Netlify:** the Free plan has a "300 credit limit". Production deploys cost 15 credits each, bandwidth 20 credits per GB, compute 10 credits per GB-hour and web requests 2 credits per 10k. The Personal plan is $9 per month for 1,000 credits. The pricing page didn't say what happens on overage, whether commercial use is allowed, or whether Netlify Forms is included. — [Netlify Pricing](https://www.netlify.com/pricing/)

### Inferences
- At 15 credits per production deploy, Netlify Free allows only about 20 deploys a month before bandwidth costs anything. That is a poor fit if a CMS triggers a rebuild on every edit.
- **Recommended setup:**
  - **Cloudflare Workers static assets** (or Pages) with the domain's DNS on Cloudflare, which gives free Universal SSL.
  - A tiny Worker (or Pages Function) at `/api/booking` that validates input, checks a Turnstile token, and forwards the request by email (e.g. via Resend or Brevo free tiers) or to WhatsApp/Google Sheets.
  - Moving off the GitHub Pages subpath also removes the `basename` complexity.
- Edge PoPs in Hyderabad, Chennai and Mumbai mean low TTFB for South Indian patients. I didn't find comparable official India PoP lists for Vercel or Netlify (see Gaps).
- If staying on GitHub Pages: it is acceptable for a static brochure site, but it gives no functions (the booking form must post to a third-party form service), no custom headers (cache-control, security headers) and no server redirects. There is also terms-of-service ambiguity for a business site.
- Custom domain and free HTTPS are standard on all four providers (well known, not re-verified here).

### Gaps
- Vercel's and Netlify's India edge locations: I didn't fetch their network maps.
- What happens on Netlify credit overage, and whether Netlify Forms sits within the credit model.
- Cloudflare Workers Builds free minutes: one source says 3,000 per month, unconfirmed against official docs.
- No independent 2026 TTFB benchmark from Indian cities across these hosts.

## Q4. Content management for a non-technical doctor

### Takeaway
For a 20-40 page site that changes rarely, Markdown/MDX content collections in the repo plus a Git-based CMS is the low-cost path. **Keystatic** is most often recommended for Astro, has an admin at `/keystatic`, and is free. **Decap** is the simplest and also free, but needs an auth setup. **TinaCMS** has the best visual editing, but Astro support is experimental and it relies on Tina Cloud. Sources caution that Git-based CMSs suit editors who update occasionally, not daily.

### Cited Findings
- Keystatic is called "the best Git-based CMS available for Astro and Next.js projects today". It ships Astro packages and its admin UI is at `/keystatic`. It lacks TinaCMS's visual in-page editing and workflow tools. — [Lucky Media: Keystatic vs TinaCMS](https://www.luckymedia.dev/compare/keystatic-vs-tina-cms)
- TinaCMS has the strongest editor experience, with drafts, review states and branch previews via Tina Cloud. Visual editing needs the `useTina` hook and React instrumentation, and Astro support is experimental. It has no native i18n and is single-user per document. — [Lucky Media: TinaCMS vs Keystatic](https://www.luckymedia.dev/compare/tina-cms-vs-keystatic); [wisp.blog](https://wisp.blog/compare/tina/keystatic)
- Decap CMS is the simplest to reason about, and an editor can learn the basics in about an hour. Its Astro setup requires authentication configuration. — [Lucky Media: Decap vs Keystatic](https://www.luckymedia.dev/compare/decap-cms-vs-keystatic)
- One guide warns against Git-based CMS "if non-technical editors need daily independence" and recommends testing a real draft-to-publish task with the editor first. — [Layer3 Labs: Git-based CMS guide (Sep 2026)](https://www.layer3labs.io/guides/git-based-cms)
- Overview of Astro CMS options, from no CMS to enterprise. — [bitdoze: Best headless CMS for Astro 2026](https://www.bitdoze.com/best-headless-cms-for-astro/)

### Inferences
- **Recommendation:** Astro content collections (Markdown/MDX) plus Keystatic in GitHub mode. Content stays in the repo with no vendor lock-in or cost, and every save becomes a commit that triggers a Cloudflare build. Medical pages need review anyway, so a developer or assistant can make edits, with the doctor approving through Keystatic or simple PR previews.
- Sanity (hosted, generous free tier) suits frequent, multi-person editing. For this scale it adds an API dependency and a build webhook. I didn't verify Sanity's 2026 free-tier numbers.
- If staying on React Router prerender, Markdown/MDX can still be loaded at build time (e.g. `import.meta.glob` plus an MDX Vite plugin), but there is no typed content-collections equivalent built in.

### Gaps
- No official 2026 free-tier figures for Sanity, Tina Cloud or Keystatic Cloud were fetched.
- No first-hand usability study of these CMSs with clinicians or non-technical users.

## Q5. Performance practices: fonts, images, Core Web Vitals targets

### Takeaway
The targets, measured at the 75th percentile of real visits split by mobile and desktop, are **LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1**. Static HTML from a nearby edge, self-hosted preloaded fonts, and build-time-optimized responsive images (AVIF/WebP with explicit dimensions) are the main levers.

### Cited Findings
- "LCP should occur within 2.5 seconds", INP should be "200 milliseconds or less", and CLS "0.1 or less". "A good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices." — [web.dev: Web Vitals](https://web.dev/articles/vitals)
- Astro 6's Fonts API handles font downloading, self-hosting, fallbacks and preload hints. — [Astro blog: Astro 6](https://astro.build/blog/astro-6)
- Next.js static export can't use `next/image` default optimization and needs a custom loader such as Cloudinary. — [Next.js docs: Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- Vercel Hobby image optimization is capped at 5K transformations a month. — [Vercel Hobby](https://vercel.com/docs/plans/hobby)

### Inferences
These are standard practices, not re-verified against a source in this pass:
- **Fonts:** self-host one variable font (or a system font stack) in WOFF2, subset to Latin, use `font-display: swap` with metric-matched fallbacks (`size-adjust`), and preload only the font used for headings and body above the fold.
- **Images:**
  - Generate AVIF/WebP at build (`astro:assets`, or `vite-imagetools` for RR).
  - Always set `width`/`height` or `aspect-ratio` to protect CLS.
  - Give the hero or doctor photo `fetchpriority="high"` and no lazy-loading.
  - Lazy-load everything below the fold.
  - Use `srcset`/`sizes` so phones get images around 400-800 px wide.
- **JS:** keep islands minimal (mobile menu, booking form). Defer analytics, and prefer Cloudflare Web Analytics or Plausible over GA4 to protect INP. Avoid carousels in the hero.
- **CLS:** reserve space for embedded Google Maps (use a static map image with click-to-load iframe) and for cookie or consent banners.
- **Caching:** serve hashed assets with `Cache-Control: immutable` via `_headers` on Cloudflare, which GitHub Pages can't do.
- **Measure:** PageSpeed Insights or CrUX for field data once there's traffic, and Lighthouse CI in GitHub Actions per PR.

### Gaps
- I didn't fetch web.dev's font and image best-practice articles in this pass, so the practices above are inferred, not sourced.
- No India-specific mobile CWV baselines (e.g. CrUX for Indian healthcare sites) were found.
