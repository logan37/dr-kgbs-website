# Doctor Website Templates and Real-World Exemplars (single-specialist pulmonology / allergy / sleep practice, Kondapur, Hyderabad)

Research date: 2026-11-16. Target stack: React + Vite + Tailwind + shadcn/ui. Most marketplace listings do not show last-updated dates; where a date was not visible this is stated. Vendor and affiliate roundups are marketing and are flagged as such.

## 1. Code templates (React / Next.js / Astro / Tailwind / shadcn)

### Takeaway
No free template found matches the exact stack (Vite + React + Tailwind + shadcn/ui) for a single-doctor site. The closest code is **Linden Health** (MIT, Next.js 16 + Tailwind 4 + shadcn/ui; component source to borrow, but it is a multi-doctor clinic with a portal, so it is far bigger than this project needs) and **Viva Medical** (free Astro 7 + Tailwind v4, static, 7 pages; a good layout and information-architecture reference). Pragmatic path: keep the existing Vite + shadcn setup and port sections or patterns from these, rather than migrating to a new framework.

### Cited Findings
**Linden Health (GitHub: jknithin36/linden-health)**
- MIT licence. Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS 4, shadcn/ui on Base UI, Hugeicons, Motion, Recharts, TanStack Table, React Hook Form + Zod, date-fns — [GitHub](https://github.com/jknithin36/linden-health)
- Includes a marketing site, doctor search with filters, doctor profiles, services, a 5-step `/book` flow (care, doctor, time, details, review) that requires login, a patient portal, staff admin and doctor workspace. No blog (blog links show a "coming soon" toast). Only 5 commits and 0 stars at fetch time; last commit date was not shown — [GitHub](https://github.com/jknithin36/linden-health)

**Clear Care / "Clarity" (GitHub: letsopencals/template-clarity)**
- MIT licence. Published 2026-08-15, updated 2026-10-28. Next.js 15, Tailwind v4 (tokens in `globals.css`), Framer Motion, react-hook-form + Zod, Stripe Elements, NextAuth v5, Opencals Storefront SDK v0.3.8 — [Opencals blog](https://opencals.com/blog/templates/clarity)
- Features: department-first navigation, single-page booking (service, clinician, date, time, medical intake, confirm), "any clinician, next available", multi-location, passwordless sign-in, `MedicalClinic` structured data, robots.txt, sitemap.xml, copy centralised in `lib/site-config.ts` — [Opencals blog](https://opencals.com/blog/templates/clarity)
- Booking depends on an Opencals account and API key (vendor backend), hosted on Vercel; a vendor-made template that promotes its own SaaS — [Opencals blog](https://opencals.com/blog/templates/clarity)

**Viva Medical (Astro theme; repo web-stacked/healthcare-astro-theme)**
- Free and described as open-source; the theme's own licence was not shown on the Astro listing. Astro 7, Tailwind v4, TypeScript. 7 pages (Home, About, Services, Careers, Contact, Info/FAQ, 404), reusable hero/card/CTA/FAQ components, 6 colour themes, static output, view transitions. Author Allen S. Last-updated date not stated — [Astro themes](https://astro.build/themes/details/viva-medical-healthcare-astro-theme/); demo https://healthcare-astro-theme.pages.dev/

**Other Astro themes (from the astro.build directory; licence and price not verified for each)**
- "Medical – Hospital & Clinic Website Template" (Golden UI, premium, Astro 7+): doctor directory with filtering, telemedicine badges, availability status — [Astro themes](https://astro.build/themes/details/medical-hospital-clinic-website-template)
- "Dentist" (Golden UI): doctor profiles with bio, specialisations, education, certifications, awards, languages; listing says Astro 6 — [Astro themes](https://astro.build/themes/details/dentist-dental-clinic-website-theme/)
- "Dermica" (dermatology; bilingual EN/AR with RTL, Astro 7) — [Astro themes](https://astro.build/themes/details/dermica-dermatology-aesthetics-clinic-theme/)
- "Dokto – Doctor Appointments Landing Page" (Astro + Alpine.js) — [Astro themes](https://astro.build/themes/details/dokto-doctor-appointments-landing-page)

**Other GitHub templates**
- themixlyweb/nextjs-medical-website-template (ENT): Next.js 15, **Bootstrap 5 + SCSS** (not Tailwind). The free version has homepage sections only; doctor profiles, appointment forms and treatment pages are paid-only; README restricts the free version to personal/educational use despite an MIT label. 6 stars — [GitHub](https://github.com/themixlyweb/nextjs-medical-website-template)
- roman754/nextjs-therapy-website-template (Next.js 16, Tailwind, therapy practice) and A606A/dentics-landing (Next.js + Tailwind dental landing). Licence not verified — [GitHub search results](https://github.com/roman754/nextjs-therapy-website-template), [GitHub](https://github.com/A606A/dentics-landing)
- itsiamdev/Medix "Modern Medical Clinic Website" (React components); stack (Vite? shadcn?) and licence not confirmed — [GitHub](https://github.com/itsiamdev/Medix)

**ThemeForest / paid marketplaces**
- No ThemeForest listing was found that is React + Tailwind + single-doctor personal. Doccure is a React booking or clinic-management template (Bootstrap); a buyer comment notes it is a static template without a backend — [ThemeForest comments](https://themeforest.net/comments/29657303), [Doccure reviews](https://themeforest.net/item/doccure-bootstrap-react-template/reviews/28678319)
- "Healia" medical template has React 19 + Tailwind CSS 4 versions sold on Wrapmarket (hospital or clinic oriented) — [Wrapmarket](https://wrapmarket.com/item/healia-medical-healthcare-react-tailwind-css-website-template-W006H1DJ3)
- "Doctor landing page HTML template (Vite + Tailwind)" is sold on Gumroad by radditollc — [Gumroad](https://radditollc.gumroad.com/l/doctor-landing-page-html-template-vite-tailwind-css)

**shadcn ecosystem**
- shadcn.io (not affiliated with official shadcn/ui) lists medical blocks such as a clinic EMR sidebar and a medical-consultation chat block. These are app UI blocks, not marketing pages — [shadcn.io](https://www.shadcn.io/blocks/sidebar-clinic-emr), [shadcn.io](https://www.shadcn.io/blocks/chat-medical-consultation)
- shadcn.io has a Vite template category (React + shadcn/ui); none confirmed medical — [shadcn.io](https://www.shadcn.io/template/category/vite)
- Lovable hosts a "medical landing page" template (Lovable output is typically Vite + React + shadcn; not verified for this specific template) — [Lovable](https://lovable.dev/en/templates/websites/services/medical-landing-page)

### Inferences
- Linden Health is the only found template that shares the project's component layer (Tailwind 4 + shadcn/ui). Its marketing components (hero, doctor card, services grid, booking steps UI) could be copied into a Vite app with Next-specific bits (`next/link`, `next/image`, server components) swapped out. Its portal, admin and auth layers should be dropped.
- Clarity's booking is locked to Opencals. Its useful takeaways are the patterns: centralised `site-config.ts`, `MedicalClinic` JSON-LD, sitemap and robots.
- For a static single-doctor site, Astro would be the lighter choice for SEO. Migrating is out of scope given the current Vite stack, but Viva Medical's page set is a reasonable IA reference.

### Gaps
- Tailwind Plus catalogue and pricing could not be verified (the page fetched was behind a login). I found no evidence of a medical template in Tailwind Plus.
- Last-commit dates for Linden Health, Viva Medical and most GitHub repos were not visible. Accessibility and Lighthouse quality were not tested for any template.
- Licences for Astro premium themes, Dokto, Medix, the therapy template and Dentics were not verified.

## 2. Builder templates (Framer, Webflow, Wix, Squarespace)

### Takeaway
All four builders have many clinic templates, but few are dated and none are designed around India (WhatsApp, Practo, INR fees). They are useful as visual references only; none fits a code-owned React redesign.

### Cited Findings
- Framer: MediCareX (doctors, clinics; hero, FAQ, appointment contact page; teal design system) — [Framer](https://framer.com/templates/medicarex); MediSphere (doctor profiles, testimonials, booking section) — [Framer](https://www.framer.com/community/marketplace/templates/medisphere/); MedDocX (free Framer Marketplace template for multi-specialty clinics and individual doctors; project page dated 2026-07-14) — [Contra](https://contra.com/p/sWWBWbZs-med-doc-x-healthcare-website-template-or-framer); others include Healcure (self-described "#1" healthcare template, a seller claim), Medilea, Clinic Pro, MediPro — [Framer](https://www.framer.com/community/marketplace/templates/healcure/), [Framer](https://www.framer.com/marketplace/templates/medilea/)
- Webflow: Wellspring (private practices or family doctors; CMS blog and service pages) — [Webflow](https://webflow.com/templates/html/wellspring-clinic-website-template); Curalane (3 CMS collections, service and doctor detail pages, blog, appointment sections) — [Webflow](https://webflow.com/templates/html/curalane-website-template); Dr. Neuro, NextMD, Healio, VitaCure — [Webflow](https://webflow.com/templates/html/dr-neuro-website-template); Webestica "doctor personal website template" — [Webestica](https://www.webestica.com/webflow-templates/doctor-personal-website-template)
- Wix: "Doctor's Practice" template for clinics or private providers; several Wix medical templates bundle Wix Bookings — [Wix](https://www.wix.com/marketplace/template/f1fb9c5b-97e1-4d54-b683-689f34b3f6b1), [Wix health templates](https://www.wix.com/website/templates/html/health-wellness/health)
- Squarespace doctor and medical template galleries — [Squarespace](https://www.squarespace.com/website-templates/doctor), [Squarespace medical](https://www.squarespace.com/website-templates/medical)
- Affiliate review (marketing): Squarespace rated better for clinical polish, Wix for built-in booking; Wix said to need heavy editing to avoid looking generic; quoted prices Squarespace $23/mo Business, Wix from $17/mo — [Website Builder Expert](https://www.websitebuilderexpert.com/designing-websites/doctor-website-design/), [websitebuilderreport](https://websitebuilderreport.pages.dev/business/best-website-builder-for-doctors/)

### Inferences
- Curalane's and Wellspring's IA (separate service/condition detail pages + blog via CMS) matches what a condition-led specialist site needs. Copy the IA, not the platform.

### Gaps
- Prices and last-update dates for most Framer and Webflow templates were not shown. A Webflow "50% off until Dec 3" banner had no year attached. I found no independent (non-affiliate) 2025-2026 ranking of builder templates.

## 3. Real exemplar specialist doctor sites and shared patterns

### Takeaway
The best local exemplar is **drnalininagalla.com**, a single pulmonologist and sleep specialist in the same Hyderabad west corridor: credential-heavy hero, condition-led service pages, testimonials, a blog, a sleep quiz, and two clinic timetables with map links. **respireairwayclinics.com** (multi-doctor, with a Kondapur location) is the strongest local competitor model, with deep condition sub-pages and WhatsApp booking. Both have SEO and consistency weaknesses that a new site can beat.

### Cited Findings
**Dr. Nalini Nagalla — Pulmonologist & Sleep Specialist (Narsingi / Gachibowli)**
- Hero: "Pulmonologist & International Sleep Specialist", 24+ years' experience; rotating slides incl. "Stanford Certified Insomnia Expert"; credentials (MD, FSM, fellowship, CBT-I, polysomnography) shown as certificate images; claims the first CBT-I clinic in Telangana — [drnalininagalla.com](https://drnalininagalla.com/)
- Booking: "Book Appointment" page + phone + "Quick Call"; no WhatsApp, Practo or fees visible; languages not stated — [drnalininagalla.com](https://drnalininagalla.com/)
- Services grouped as Pulmonary (asthma, COPD, bronchoscopy, smoking cessation), Sleep (insomnia, apnea, sleep studies, CPAP), Light therapy; 3 testimonials; blog with locally targeted posts (e.g., "COPD in Hyderabad"); "Not Sleeping Well?" quiz CTA; two clinics with hours and map links — [drnalininagalla.com](https://drnalininagalla.com/)
- Homepage order: header with phone/booking → hero slider → intro + credential badges → what to expect → service cards → specialty headings → why choose → testimonials → consult CTA + quiz → blog → final CTA → footer — [drnalininagalla.com](https://drnalininagalla.com/)
- Weaknesses: no visible schema markup; inconsistent experience claims ("24+" vs "over 20"); footer misspelling "Dr. Nallini" — [drnalininagalla.com](https://drnalininagalla.com/)

**Respire Airway Clinics (ENT + pulmonology + sleep; Basheer Bagh, Jubilee Hills, Kondapur)**
- Nav: About, Breathe, ENT, Sleep (each with condition and procedure sub-pages), Doctors, Locations, FAQs, Blog, Contact — [respireairwayclinics.com](https://respireairwayclinics.com/)
- Condition pages include asthma, COPD, chronic cough, allergic rhinitis, "allergy doctor", sleep apnea, snoring, insomnia, home sleep study, CPAP, and a "sleep study cost" page — [respireairwayclinics.com](https://respireairwayclinics.com/)
- Booking: Book Appointment + Book Tele-Consultation buttons (to the contact page), phone per location, WhatsApp booking mentioned in the FAQ, "no referral needed"; no Practo or fees — [respireairwayclinics.com](https://respireairwayclinics.com/)
- Kondapur location is marked "NEW" (pulmonology at Argala Health Bridge, 10 AM–4 PM Mon–Sat). Its footer slug is `/locations/hitec-city`, which does not match — [respireairwayclinics.com](https://respireairwayclinics.com/)
- Homepage order: hero (tagline, booking buttons, hours, insurance note, years of experience) → problem framing → specialties → doctors → patient stories → FAQ → locations → CTA — [respireairwayclinics.com](https://respireairwayclinics.com/)

**Other local references**
- Sleep Therapeutics "Breathe Clinic" (Jubilee Hills allergy and asthma clinic; book-appointment link; phone hours Mon–Sat 10am–8pm) — [sleeptherapeutics.in](https://sleeptherapeutics.in/breathe-clinic)
- Hospital doctor-listing pages (Yashoda, including a Hitec City pulmonology listing) show per-doctor booking and OPD timings. These are competing SERP results for "pulmonologist Hyderabad" — [Yashoda](https://www.yashodahospitals.com/specialities/pulmonology/doctors/hitec-city/)

### Inferences
- Shared patterns: specialty and years in the hero; credentials up front; booking CTA plus phone in the header; condition-grouped services (Breathe / Sleep / Allergy); testimonials; FAQ; per-clinic timings with a map; a locally keyworded blog. A sleep self-assessment quiz is a distinctive engagement hook.
- Gaps the new site can fill: JSON-LD (Physician / MedicalClinic), consistent claims, a WhatsApp click-to-chat button, transparent fees, and Telugu/Hindi support. None of the exemplars fetched shows these.

### Gaps
- No international single-doctor pulmonology, allergy or sleep sites were fetched within the tool budget, so international exemplars are not covered.
- Third-party design-award or "best doctor website" roundups were not reviewed in depth (the websitebuilderexpert roundup is affiliate content).

## 4. What Indian doctor sites typically include (WhatsApp, Practo, language, fees)

### Takeaway
Local sites lean on phone and WhatsApp booking plus clinic timings. Fees are usually shown on Practo rather than on the doctor's own site. Neither exemplar showed Telugu/Hindi content. There is no official Practo booking embed; link out to the Practo profile instead.

### Cited Findings
- WhatsApp booking offered alongside phone and web on Respire — [respireairwayclinics.com](https://respireairwayclinics.com/)
- Fees appear on Practo listings (e.g., Respicare AS Rao Nagar, a pulmonologist/allergist/somnologist, listed at ₹600); Practo also shows booking and reviews — [Practo](https://www.practo.com/hyderabad/clinic/respicare-allergy-asthma-snoring-centre-as-rao-nagar), [Practo doctor profile](https://www.practo.com/hyderabad/doctor/sathya-prakash-pulmonologist-pulmonologist)
- Neither drnalininagalla.com nor Respire showed fees or language options — [drnalininagalla.com](https://drnalininagalla.com/), [respireairwayclinics.com](https://respireairwayclinics.com/)
- The only "Practo" booking widget found is an old WordPress plugin tested up to WP 4.5 with about 40 installs (outdated) — [WordPress plugin readme](https://cdn.jsdelivr.net/wp/practo/trunk/readme.txt), [pluginsdb](https://pluginsdb.com/plugins/practo)
- A vendor guide (unverified) recommends a "Book on Practo" link to the profile and says API access requires a Practo partnership — [rapidevelopers](https://www.rapidevelopers.com/md/lovable-integration/practo)
- Third-party tools (e.g., Poper) can display Practo reviews on a site; Practo reviews come only from verified completed appointments (vendor claim) — [Poper](https://www.poper.ai/widgets/practo-reviews/)

### Inferences
- Recommended local feature set: sticky WhatsApp click-to-chat (`wa.me`) plus tap-to-call; a "Book on Practo" outbound link if the doctor has a profile; a fee line (in INR) and timings per clinic; a Google Maps embed or link for Kondapur; and optionally a Telugu toggle for key pages, which would set the site apart since competitors lack it.

### Gaps
- No source quantified how common Telugu/Hindi content is on Hyderabad doctor sites. No official Practo partner or embed documentation was found.
- Indian regulation of doctor websites (e.g., NMC rules on advertising and testimonials) was out of scope here, but should be checked, since testimonials and "best" claims are common on exemplar sites.

## 5. Best-fit starting point and what to avoid

### Takeaway
Do not replace the stack. Keep React + Vite + Tailwind + shadcn/ui, borrow components and patterns from **Linden Health** (MIT, same Tailwind 4 + shadcn layer), take IA and page sets from **Viva Medical** and **drnalininagalla.com / Respire**, and take the SEO pattern (site-config, MedicalClinic JSON-LD, sitemap) from **Clarity**. Avoid Bootstrap-based or booking-SaaS-locked templates and outdated Practo widgets.

### Cited Findings
- Linden Health: MIT, Tailwind 4 + shadcn/ui, but includes a portal, admin, auth and login-gated booking that a single-doctor site does not need; very new or low-adoption (0 stars, 5 commits) — [GitHub](https://github.com/jknithin36/linden-health)
- Clarity: MIT, but booking tied to the Opencals API and Stripe — [Opencals blog](https://opencals.com/blog/templates/clarity)
- themixlyweb ENT template: Bootstrap/SCSS, key pages paywalled, contradictory licence terms — [GitHub](https://github.com/themixlyweb/nextjs-medical-website-template)
- Doccure (ThemeForest): Bootstrap React template; buyer comment says there is no backend — [ThemeForest](https://themeforest.net/comments/29657303)
- Practo WordPress plugin: tested only up to WP 4.5 (pre-2024, outdated) — [readme](https://cdn.jsdelivr.net/wp/practo/trunk/readme.txt)

### Inferences
- Avoid: Bootstrap or SCSS templates (stack mismatch), hospital or admin dashboard kits (Doccure, Hosptal, AuraClinic: wrong product type), vendor-locked booking templates unless that vendor is chosen deliberately, and builder templates (no code ownership).
- Since a React SPA built with Vite renders on the client, the team should plan prerendering or SSG (or accept the SEO trade-off) for condition pages. This matters because the competing exemplars rank on per-condition pages. That is an inference; the details belong to the stack-research track.

### Gaps
- No template was audited for accessibility (WCAG) or performance. "Poor accessibility" could not be assessed from listings alone.
