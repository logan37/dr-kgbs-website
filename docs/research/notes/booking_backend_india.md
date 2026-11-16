# Booking and Enquiry Backend Options for a Single-Doctor Pulmonology Practice (Hyderabad, India)

Research date: 16 Nov 2026. Most pricing figures come from third-party aggregators because vendors either do not publish them or the official page could not be retrieved. Each is flagged. Verify all prices on official pages before committing.

## Q1. Simple options: form-to-email, WhatsApp (Business app vs Cloud API), click-to-chat

### Takeaway
At launch, a static-site form backend (Web3Forms free: 250 submissions/month) plus a `wa.me` click-to-chat button to the clinic's WhatsApp Business app costs nothing and covers the need. The WhatsApp Business Platform (Cloud API) has charged per delivered template message since July 2025. Since 1 Oct 2026, utility messages are also charged inside the 24-hour window, and service messages are free only up to 1,000 per number per month. That makes the API worthwhile only for automated reminders at volume.

### Cited Findings
- Web3Forms free plan gives 250 submissions/month. Reviews say it allows 1 email recipient per form, with webhooks and Google Sheets sync on paid plans only — [Web3Forms pricing](https://web3forms.com/pricing); [splitforms comparison](https://splitforms.com/blog/formspree-vs-web3forms)
- Formspree free plan: about 50 submissions/month with a 30-day archive. One review lists paid at $15/mo ($10/mo yearly) for 200 submissions — [splitforms](https://splitforms.com/blog/formspree-vs-web3forms); [Jotform blog](https://www.jotform.com/blog/formspree-alternative/). Sources disagree on Web3Forms Pro pricing ($149/yr vs $18/mo), so it is unverified.
- One 2026 blog says Netlify Forms "is getting expensive" — [formgrid.dev](https://formgrid.dev/blog/netlify-forms-is-getting-expensive-here-are-the-best-alternatives-in-2026). I did not verify current Netlify limits.
- Meta WhatsApp Business Platform charges per message from 1 July 2025, and only for delivered messages. Rates vary by category (Marketing, Utility, Authentication) and recipient country. Templates can be sent any time. Free-form "service" messages are allowed only inside a 24-hour customer service window (CSW) opened by the user's message — [Meta developer docs: Pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing.md)
- From 1 Oct 2026, service messages are charged after a free tier of 1,000 per business phone number per month, with no rollover. Utility templates sent inside an open CSW are now charged too (they had been free since July 2025). Click-to-WhatsApp-ad entry points open a 7-day free window — [Meta pricing docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing.md)
- India: the marketing rate rose on 1 Jan 2026. INR billing launched 1 Jan 2026 for India-based customers, who must migrate to INR by 31 Dec 2026, and non-INR accounts stop delivering from 1 Jan 2027 — [Meta pricing docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing.md)
- India per-message rates (third-party, approximate): marketing about ₹0.86 (up from ₹0.7846 on 1 Jan 2026), utility about ₹0.115, and service after the free 1,000 at about ₹0.115 — [Free Press Journal](https://www.freepressjournal.in/tech/how-much-does-india-have-to-pay-for-whatsapp-messages-from-october-1); [TelecomTalk](https://telecomtalk.info/whatsappbusiness-price-reveal-telegram-arattai-may-benefit/1012403/); [Route Mobile](https://routemobile.com/?p=24920). AiSensy quotes higher figures (marketing ₹1.09, utility ₹0.145), which probably include its markup — [AiSensy](https://m.aisensy.com/blog/whatsapp-business-pricing/)
- Meta's own page lists India as a standalone market but publishes the INR figures only in the rate-card CSV/PDF, which I could not read — [Meta pricing docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing.md)

### Inferences
- An appointment confirmation or reminder is a **utility** template. At about ₹0.115 each, 300 reminders/month costs roughly ₹35 in Meta fees, before any BSP (AiSensy, Interakt, etc.) subscription, which usually dominates the cost. Marketing templates (health tips, camp promotions) cost about 7x more and need opt-in.
- The WhatsApp Business **app** (free, manual, one phone plus linked devices) is enough for a single doctor's front desk. A `https://wa.me/91XXXXXXXXXX?text=...` link with a prefilled message needs no backend.
- Health data sent through form services and WhatsApp passes through foreign processors (US-hosted form services, Meta). Under DPDP, the clinic stays the Data Fiduciary. It should state this in its notice and keep symptom fields optional or minimal.

### Gaps
- I did not retrieve official INR per-message rates from Meta's rate card. Third-party figures conflict.
- No source checked on Cloudflare Workers plus email (e.g., Resend or MailChannels) for current free limits. My background knowledge is that MailChannels' free Workers integration ended in 2024; this is unverified.
- Template approval rules beyond categorisation (e.g., Meta reclassifying utility templates containing promotional content as marketing) were not verified from 2025-26 sources.

## Q2. Scheduling tools: Cal.com, Calendly, Google Calendar, Zoho Bookings, Indian healthcare platforms

### Takeaway
Generic schedulers are cheap and embeddable but are not built for Indian OPD workflows: token or queue systems, walk-ins, WhatsApp reminders, UPI. Indian doctor platforms such as Eka Care (free app tier; paid ₹4,999–₹37,999/yr; 0%-commission booking link with WhatsApp credits) and Practo Ray (about ₹999–₹1,999/month) fit better. Practo's marketplace listing (Prime, per-lead fees) has a history of doctor complaints.

### Cited Findings
**Cal.com**
- Hosted: free individual tier, Teams $12/user/mo (annual), Organizations $28/user/mo, Enterprise custom. Some sources list Teams at $15–16, possibly stale — [Koalendar](https://koalendar.com/blog/cal-com-pricing); [schedulingkit](https://www.schedulingkit.com/pricing-guides/cal-com-pricing)
- Third-party sources report that in 2026 Cal.com moved its main product to closed source and relaunched the open-source code as "Cal.diy", an MIT community edition for individual self-hosting without Teams, routing forms or workflows — [dev.to teardown](https://dev.to/beton/calcom-pricing-teardown-2026-4j40); [Koalendar](https://koalendar.com/blog/cal-com-pricing). **Unverified against Cal.com's official announcement. Treat as uncertain.**

**Google Calendar appointment schedules**
- A free personal account gets one booking page with unlimited appointments. Paid bookings (via Stripe) and automated email reminders need an eligible Workspace plan (Workspace Individual qualifies) — [Google Calendar Help](https://support.google.com/calendar/answer/10729749?hl=en); [Google Workspace Admin Help: paid appointments](https://support.google.com/a/answer/13765946); [Workspace Updates blog, Jul 2023](https://workspaceupdates.googleblog.com/2023/07/paid-appointment-bookings-in-google-calendar.html)
- Payments go through Stripe only. Stripe availability for Indian merchants was not checked (see Gaps).

**Zoho Bookings**
- About $6/user/mo Basic and $9 Premium (annual). Premium adds online payments and integrations — [FitGap](https://us.fitgap.com/products/005250/zoho-bookings); [Capterra India](https://www.capterra.in/software/1012142/zoho-bookings). An Indian reseller quotes ₹300 and ₹500/user/mo (annual) — [itforsme](https://itforsme.in/pricing/zoho-bookings-india). INR figures are unverified.

**Practo Ray (practice management)**
- Third-party listings put Clinic Management at about ₹1,999/mo, or ₹1,499/mo on a 1-year plan and ₹999/mo on a 4-year plan. Ray Connect call add-on is ₹1,499–₹2,499/mo. Practo does not publish pricing officially — [Techjockey](https://www.techjockey.com/detail/practo-ray); [FitGap](https://us.fitgap.com/products/ray-by-practo); [G2 (no vendor pricing)](https://www.g2.com/products/ray-by-practo/pricing)
- Doctors have complained about Practo marketplace economics. A urologist reported a ₹350–450 "connection fee" per patient enquiry, and others say Practo Prime costs were passed on to patients — [Medical Dialogues](https://medicaldialogues.in/news/health/doctors/urologist-slams-practo-for-unethical-charges-on-patient-inquiries-138562) (article date not confirmed; may be pre-2025); [Voxya complaint 2023](https://voxya.com/consumer-complaints/doctors-exploited-by-practo-practo-taking-37-share-from-doctor-s-consultation-fee/181175)
- Practo has faced past privacy controversy over patient data (2019) — [HuffPost India](https://www.huffingtonpost.in/entry/medical-data-practo-privacy-spying_in_5cd2e1aee4b0a7dffccfa40d) (old, pre-2025)

**Eka Care (Eka Doc)**
- Free app: tracks appointments from WhatsApp, walk-ins and Google — [App Store listing](https://apps.apple.com/us/app/id1598859349)
- Vendor page (cardiology variant): Plus ₹4,999/yr, Pro ₹9,999/yr, Pro + Pharmacy ₹16,999/yr, Pro + iPad ₹37,999/yr. Includes a "Personalised Booking Link (0% Commission)" and 1,200 Eka Credits for WhatsApp communications — [eka.care](https://www.eka.care/eka-for-doctors/emr-ehr-medical-software/cardiologists). A third-party listing gives higher figures (Plus ₹16,999/yr) — [Krowdbase](https://www.krowdbase.com/software/eka-care). The conflict is unresolved; the vendor page is more authoritative.
- A competitor blog cites about ₹1.00 per WhatsApp message on Eka beyond credits. This comes from a biased source and is unverified — [codingclave](https://codingclave.com/blog/doctor-appointment-booking-system-2026)

**Payments: Razorpay**
- Standard plan: 2% + 18% GST on the fee (about 2.36% effective), with no setup or annual fee. UPI network MDR is 0%, but Razorpay still charges its 2% platform fee on UPI — [Razorpay blog: pricing explained](https://razorpay.com/blog/razorpay-payment-gateway-pricing-explained/); [Razorpay: UPI charges MDR vs platform fee](https://razorpay.com/blog/upi-charges-explained-mdr-vs-platform-fees/)
- New merchants activated on or after 1 Jul 2026 get a 0% platform fee for 90 days, up to ₹5 lakh GMV — [Razorpay blog](https://razorpay.com/blog/razorpay-0-percent-platform-fee-offer-90-days-new-merchants-2026/)
- One Razorpay post mentions 0.4% MDR on UPI P2M above ₹2,000 from 15 Oct 2026, but another says UPI stays at zero MDR. **Conflicting and unconfirmed by NPCI/RBI** — [Razorpay blog on UPI MDR](https://razorpay.com/blog/upi-mdr-for-merchants-in-payment-gateway-explained/)

### Inferences
- For a ₹800–1,000 consult, a Razorpay fee of about ₹19–24 per booking is acceptable. Many Indian specialists don't take prepayment, though, and collect at the counter by UPI QR (no gateway fee). Online prepayment is optional at launch.
- Eka Care's 0%-commission booking link, linkable from the website, plus included WhatsApp credits is the lowest-effort "real" booking system that fits Indian OPD practice. Its ABDM integration is a bonus (see Q4).
- Cal.com and Calendly suit fixed-slot consults (e.g., teleconsults). They suit token-based walk-in OPDs at a diagnostics centre less well.

### Gaps
- Calendly pricing, Lybrate, Apollo 247 (doctor side), DocOn: **no sources retrieved**, so not covered.
- Whether Zoho Bookings or Cal.com offer native WhatsApp reminders in India is unverified.
- Stripe India support for Google Calendar paid bookings is not checked. Stripe restricted new Indian account onboarding around 2024 (background knowledge, unverified).

## Q3. Custom backend: Supabase or Firebase plus serverless, with admin dashboard

### Takeaway
Supabase offers a Mumbai region (ap-south-1). A Pro plan ($25/mo base) with a bookings table, row-level security, an edge function to send email or WhatsApp, and a small admin page is feasible. Most of the build effort goes to the admin UI, slot logic, reminders and DPDP features (consent logs, erasure). Build this only once the off-the-shelf options prove limiting.

### Cited Findings
- Supabase regions include "South Asia (Mumbai) ap-south-1". Each project is deployed to one primary region — [Supabase docs: Regions](https://supabase.com/docs/guides/platform/regions)
- Supabase Pro: $25/month, including 100K MAU, 8 GB disk and 250 GB bandwidth. Compute is billed separately, minus a $10 credit — [Supabase pricing](https://supabase.com/pricing); [jetadmin 2026 guide](https://www.jetadmin.io/blog/supabase-pricing-2026-guide-to-plans-limits-and-real-world-costs/)
- I found no published per-region price difference for Mumbai — [getdeploying](https://getdeploying.com/supabase)

### Inferences
- Rough effort for one developer: about 1–2 weeks for a working MVP covering the form, bookings table, admin list view, email/WhatsApp notification and consent capture, and 3–4+ weeks with slot management, reminders, payments and audit logs. This is an estimate, not sourced.
- The free tier pauses inactive projects (background knowledge, unverified for 2026), so a clinic should use Pro or accept that risk.
- DPDP does not impose general data localisation on ordinary fiduciaries; that applies only to SDFs for notified categories (see Q5). A Mumbai region is good practice and a selling point rather than a legal requirement.

### Gaps
- Firebase / Google Cloud Mumbai or Delhi region pricing and Firestore location options were not researched in this session.
- No source on DPDP-specific features in Supabase (audit logging, encryption at rest are standard Postgres/AWS features, but not verified).

## Q4. ABDM / HFR / HPR relevance

### Takeaway
HFR registration (facility) and HPR (professional) are free, voluntary and open to private clinics. They enable ABHA-linked "Scan and Share" OPD registration and incentive eligibility (DHIS). These are useful **in the clinic**, typically via an ABDM-compliant EMR such as Eka Care, but they are not needed for a marketing website. The host diagnostics centre may already be HFR-registered.

### Cited Findings
- HFR covers public and private facilities, including clinics, diagnostic labs and imaging centres. Enrolment is at facility.abdm.gov.in. HFR had 4.18 lakh facilities as of 5 Aug 2025 — [PIB document, Jul 2026](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc202676912801.pdf); [Digital Health News: ABDM for small clinics](https://www.digitalhealthnews.com/ayushman-bharat-digital-mission-abdm-for-small-clinics-independent-doctors)
- Scan and Share: QR-based OPD registration, available to HFR-registered facilities using ABDM-compliant HMIS. Reported to cut queue times from 30–40 to 5–10 minutes — [MoHFW press](https://mohfw.gov.in/press-info/7554); [ABDM onboarding manual (2023)](https://abdm.gov.in/strapicms/uploads/ABDM_Scan_and_Share_Onboarding_Manual_18_01_2023_1_0600fe7747.pdf)
- The Digital Health Incentive Scheme (DHIS) pays facilities and digital solution companies per ABDM transaction or registration. I found no per-registration rate for private clinics — [MoHFW press](https://www.mohfw.gov.in/press-info/7908)

### Inferences
- Website relevance is low: you could show an HFR ID or HPR verification as a trust signal. The real value comes if the practice adopts an ABDM-integrated EMR, which makes ABHA linking and Scan and Share work without custom work.
- A custom backend integrating directly with ABDM sandbox APIs is significant effort and not justified for one doctor.

### Gaps
- Current DHIS rates and validity (the scheme had been extended in phases) are not confirmed for 2026.
- Whether the doctor practises under the diagnostics centre's HFR facility ID or needs a separate one was not researched.

## Q5. DPDP Act 2023 and DPDP Rules 2025: status and obligations for a clinic website

### Takeaway
The DPDP Rules were notified on 13/14 Nov 2025 with phased commencement. Core fiduciary obligations (notice, consent, security safeguards, breach reporting, retention and erasure, rights) apply from **13 May 2027**. MeitY consulted in Jan–Feb 2026 on cutting this to 12 months (13 Nov 2026), but I found no notified amendment. A clinic collecting names, phones and symptoms is a Data Fiduciary and should build to the rules now.

### Cited Findings
- Rules notified 13 Nov 2025; some sources say gazetted 14 Nov — [Hogan Lovells](https://ca.hoganlovells.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-); [Wikipedia](https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Rules,_2025); [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/)
- Phasing: Board and definitions took effect immediately; Consent Manager registration at 12 months (Nov 2026); core obligations at 18 months (13 May 2027) — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/); [Legismith timeline](https://legismith.com/dpdp-rules-2025-timeline/); [consentos.in](https://consentos.in/learn/dpdp-compliance-timeline/)
- MeitY proposed cutting the deadline to 12 months (consultation closed 4 Feb 2026). As of a March 2026 report, feedback was pending. **No confirmed amendment found as of Nov 2026** — [Storyboard18](https://www.storyboard18.com/amp/digital/meity-seeks-industry-views-on-fast-tracking-dpdp-act-rollout-proposes-12-month-compliance-timeline-88332.htm); [SS Rana](https://ssrana.in/articles/meity-plans-to-cut-short-dpdp-compliance-timeline-and-notify-cross-border-restrictions-for-sdfs/); [dpdprules.org](https://dpdprules.org/blog/dpdp-18-months-to-12-months-proposal); [Takshashila, Jan 2026](https://takshashila.org.in/content/blogs/20260126-meity-considers-reducing-dpdpa-compliance-timelines.html). A Financial Express headline "Nov deadline for DPDP compliance" appeared (via Magzter), but the full text could not be read — [Magzter/FE](https://www.magzter.com/nl/stories/newspaper/Financial-Express-Mumbai/NOV-DEADLINE-FOR-DPDP-COMPLIANCE). **Status uncertain; check MeitY and the Gazette.**
- Notice: must be plain-language, standalone, and itemise the data and purposes. It must include a link to withdraw consent and contact details for a responsible person — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/)
- Breach: tell affected individuals without delay. Give the Data Protection Board an intimation without delay and a detailed report within 72 hours (extendable) — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/); [Legal500/Saga Legal](https://www.legal500.com/firms/237811-saga-legal/c-india/news-and-developments/the-privacy-timer-starts-now-analysing-the-dpdp-rules-and-its-18-month-countdown)
- Security: reasonable safeguards such as encryption, masking or tokenisation, access controls, logging and monitoring, **one-year log retention**, backups, and security clauses in processor contracts — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/)
- Retention: data and logs held for at least one year for processing purposes. India Briefing describes erasure after one year of inactivity with 48-hour advance notice — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/). (Background, unverified: the inactivity-erasure periods in the Third Schedule apply to specified large e-commerce, gaming and social-media fiduciaries, not to all fiduciaries. India Briefing's summary may overgeneralise.)
- Children: verifiable parental consent for under-18s, with healthcare processing exempted — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/)
- Penalties: up to ₹250 crore per breach type, graded by severity; described as calibrated for MSMEs. There is no formal small-business exemption — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/)
- SDF localisation applies only to designated SDFs for notified categories — [India Briefing](https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/); [SS Rana](https://ssrana.in/articles/meity-plans-to-cut-short-dpdp-compliance-timeline-and-notify-cross-border-restrictions-for-sdfs/)

### Inferences
- What the website should do, in order of priority:
  1. Show a consent notice at the form: what is collected (name, phone, optional symptoms), why (to arrange an appointment or reply), who processes it (form service, WhatsApp/Meta, booking platform), how to withdraw or erase, and a grievance contact.
  2. Use an unticked consent checkbox, separate from any marketing opt-in.
  3. Minimise data: make "symptoms" free text optional, or limit it to a short "reason for visit". Avoid uploads of reports through the public form.
  4. Keep a written retention policy, e.g., purge enquiries that didn't convert after N months. Clinical records follow medical-records rules, not website rules.
  5. Hold processor agreements or DPAs (Supabase, form service, BSP).
  6. Keep a breach-response contact and a 72-hour plan.
- The DPDP Act has no separate "sensitive" category, but health data raises breach harm and reputational risk, so encryption and access control matter more.

### Gaps
- Final status of the 12-month compression proposal; could not confirm from MeitY or the Gazette.
- Interaction with NMC or Telangana medical-record retention rules (commonly cited as 3 years for in-patient records under IMC Regulations 2002) was not verified in this session.
- No MeitY primary text was fetched; findings rely on law-firm and news summaries.

## Q6. Recommended architecture by stage

### Takeaway
Stage 1: static site, Web3Forms (or similar), a WhatsApp click-to-chat link, a consent notice, and a phone number. Stage 2: adopt an Indian clinic platform with a 0%-commission booking link and WhatsApp reminders (Eka Care, or Practo Ray if the clinic already uses Practo), with UPI or Razorpay optional. Stage 3: a custom Supabase (Mumbai) backend only if specific needs, such as a custom patient portal or integration with the diagnostics centre's systems, justify ongoing maintenance.

### Cited Findings
- Cost anchors: Web3Forms free at 250/mo — [Web3Forms](https://web3forms.com/pricing). Eka Doc Plus ₹4,999/yr with booking link and WhatsApp credits — [eka.care](https://www.eka.care/eka-for-doctors/emr-ehr-medical-software/cardiologists). Practo Ray about ₹999–1,999/mo — [Techjockey](https://www.techjockey.com/detail/practo-ray). WhatsApp utility about ₹0.115/msg — [Free Press Journal](https://www.freepressjournal.in/tech/how-much-does-india-have-to-pay-for-whatsapp-messages-from-october-1). Supabase Pro $25/mo with a Mumbai region — [Supabase docs](https://supabase.com/docs/guides/platform/regions). Razorpay 2% + GST — [Razorpay](https://razorpay.com/blog/razorpay-payment-gateway-pricing-explained/)

### Inferences
- **Launch (₹0 to about ₹500/mo):** static site; "Request appointment" form via Web3Forms to the clinic email, with consent checkbox and minimal fields; `wa.me` button to the clinic's WhatsApp Business app (free, quick replies, away messages); tap-to-call; Google Business Profile with booking link. Staff confirm manually. Lowest DPDP surface, but email inboxes holding symptom data still need 2FA and periodic purging.
- **Growing (about ₹5k–20k/yr plus messaging):** move to Eka Care, Practo Ray or a similar EMR with a public booking link embedded or linked from the site. Get automatic WhatsApp or SMS confirmations and reminders, queue management, and ABDM/ABHA readiness. Optionally take prepaid teleconsults via Razorpay Payment Pages or UPI QR. Prefer 0%-commission direct links over marketplace listings (Practo Prime or per-lead fees).
- **Full custom (dev effort of weeks plus about $25–50/mo):** Supabase (Mumbai) plus edge functions; WhatsApp Cloud API through a BSP or direct for utility templates; Razorpay; an admin dashboard with RLS and audit logs; consent records and a retention job. Justified only for unique workflows, such as booking a scan at the diagnostics centre alongside a consult, or multi-doctor expansion.
- Vendor lock-in: a platform booking link keeps the website decoupled, so switching vendors only means changing a URL.

### Gaps
- No comparative user-review data on Eka vs Practo Ray vs DocOn for Hyderabad pulmonologists.
- Whether the host diagnostics clinic already runs an HMIS or booking system that the doctor could reuse is unknown, and it may decide the choice.
