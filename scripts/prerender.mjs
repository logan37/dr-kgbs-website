// Writes every page in src/lib/seo.ts (routePaths) as static HTML into dist/,
// plus 404.html, sitemap.xml and robots.txt. Runs after `vite build` and the SSR build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routePaths, NOT_FOUND_PATH, siteUrl, launchWarnings } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

function writePage(route, file) {
  const { html, head } = render(route)
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-route="${route}">${html}</div>`)
  const out = path.join(dist, file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, page)
}

for (const route of routePaths) {
  writePage(route, route === '/' ? 'index.html' : path.join(route, 'index.html'))
}
writePage(NOT_FOUND_PATH, '404.html')

const today = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routePaths.map((r) => `  <url><loc>${siteUrl}${r}</loc><lastmod>${today}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)

fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`\nPre-built ${routePaths.length} pages, 404.html, sitemap.xml and robots.txt.`)

const warnings = launchWarnings()
if (warnings.length) {
  console.log('\nBefore launch, update src/content/site.ts:')
  for (const w of warnings) console.log(`  - ${w}`)
  if (process.env.STRICT_CONTENT === '1') {
    console.error('\nSTRICT_CONTENT=1: failing the build until these are fixed.')
    process.exit(1)
  }
}
