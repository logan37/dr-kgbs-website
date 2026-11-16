import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getPageMeta } from '@/lib/seo'

/** Keeps the title and description in sync and resets scroll on client-side navigation. */
export function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
