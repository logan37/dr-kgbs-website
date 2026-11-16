// Used only at build time by scripts/prerender.mjs to write each page as static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { basename } from './lib/base'
import { content } from './content/site'
import { getPageMeta, NOT_FOUND_PATH, renderHeadTags, routePaths } from './lib/seo'
import { siteUrl } from './lib/site'

export { routePaths, NOT_FOUND_PATH }

export function render(path: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={basename} location={`${basename}${path}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  const head = renderHeadTags(getPageMeta(path))
  return { html, head }
}

export { siteUrl }

/** Details in site.ts that still look like placeholders. Printed as warnings during the build. */
export function launchWarnings(): string[] {
  const w: string[] = []
  if (content.doctor.registration.includes('[')) w.push('doctor.registration still has a placeholder (required by NMC guidelines).')
  if (content.contact.phone.includes('12345')) w.push('contact.phone looks like the placeholder number.')
  if (!content.doctor.photo.src) w.push('doctor.photo.src is empty; an initials block is shown instead.')
  if (!content.site.shareImage) w.push('site.shareImage is empty; links shared on WhatsApp and social media will have no preview image.')
  if (!content.clinic.geo) w.push('clinic.geo is empty; add map coordinates for search engines.')
  if (siteUrl.includes('github.io')) w.push('The site address is a github.io URL; switch to the practice domain before launch.')
  return w
}
