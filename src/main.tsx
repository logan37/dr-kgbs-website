import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App'
import { basename } from './lib/base'
import { NOT_FOUND_PATH } from './lib/seo'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are pre-built to HTML at deploy time. Attach to that markup only when it was built for
// this URL (or is the 404 page); a server that falls back to another page's HTML gets a fresh render.
const prebuilt = container.dataset.route
let current = window.location.pathname.slice(basename.length) || '/'
if (!current.endsWith('/')) current += '/'

if (container.firstElementChild && (prebuilt === current || prebuilt === NOT_FOUND_PATH)) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
