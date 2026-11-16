// Shapes for the content in site.ts. Editors do not need to change this file.

export interface Link {
  label: string
  href: string
}

export interface Qualification {
  degree: string
  institution: string
}

export interface Publication {
  title: string
  journal: string
  year?: string
  url?: string
}

export interface OpeningHours {
  /** Shown to visitors, e.g. "Monday to Saturday" */
  days: string
  /** Shown to visitors, one line per session */
  sessions: string[]
  /** For search engines. Two-letter days: Mo Tu We Th Fr Sa Su */
  schema: { days: string[]; opens: string; closes: string }[]
}

export interface Symptom {
  id: string
  label: string
  explanation: string
  commonCauses: string
  test: string
  duration: string
  /** Condition or test page this symptom links to, e.g. "/conditions/asthma/" */
  learnMore?: string
}

export interface TestPage {
  slug: string
  name: string
  /** Short name for menus and cards */
  shortName: string
  /** One or two sentences, used on cards and as the page's search description */
  summary: string
  category: 'Diagnostic test' | 'Procedure' | 'Treatment'
  intro: string[]
  whoItsFor: string[]
  howToPrepare: string[]
  whatHappens: string[]
  duration: string
  performedBy: string
  afterwards?: string
  relatedConditions: string[]
}

export interface ConditionPage {
  slug: string
  name: string
  shortName: string
  summary: string
  overview: string[]
  symptoms: string[]
  causes: string[]
  whenToSeeADoctor: string
  relatedTests: string[]
  treatment: string[]
}

export interface Faq {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  context: string
  quote: string
}

export interface SiteContent {
  site: {
    /** Full address of the live site with no trailing slash, e.g. "https://www.example.com" */
    url: string
    language: string
    titleSuffix: string
    description: string
    /** Absolute or root-relative path to a 1200x630 JPG/PNG. Leave empty to omit. */
    shareImage: string
    themeColor: string
  }
  doctor: {
    name: string
    fullName: string
    degrees: string
    title: string
    tagline: string
    registration: string
    photo: { src: string; alt: string }
    yearsInPractice: number
    philosophy: string
    bio: string[]
    qualifications: Qualification[]
    memberships: string[]
    publications: Publication[]
    languages: string[]
    profiles: Link[]
  }
  clinic: {
    name: string
    unit: string
    streetAddress: string
    locality: string
    city: string
    region: string
    postalCode: string
    country: string
    landmark: string
    mapsUrl: string
    mapEmbedUrl: string
    geo: { latitude: number; longitude: number } | null
    hours: OpeningHours[]
    areasServed: string[]
  }
  contact: {
    phone: string
    phoneDisplay: string
    /** Digits only with country code, e.g. "919876543210" */
    whatsapp: string
    email: string
  }
  booking: {
    heading: string
    intro: string
    reasons: string[]
    sessions: string[]
    whatsappGreeting: string
    successMessage: string
    emergencyNote: string
    consentText: string
    consultationFee: string
    practoUrl: string
  }
  rating: { value: string; count: string; url: string } | null
  home: {
    heading: string
    intro: string
    credentialLine: string
    curveCaption: string
    symptomsHeading: string
    symptomsIntro: string
    symptoms: Symptom[]
    testsHeading: string
    testsIntro: string
    firstVisitHeading: string
    firstVisitSteps: { title: string; text: string }[]
    faqHeading: string
    faqIntro: string
  }
  tests: TestPage[]
  conditions: ConditionPage[]
  faqs: Faq[]
  testimonials: { show: boolean; items: Testimonial[] }
  legal: {
    privacy: { heading: string; paragraphs: string[] }[]
    disclaimer: string[]
    lastUpdated: string
  }
}
