import { Route, Routes } from 'react-router'
import { Toaster } from '@/components/ui/sonner'
import { BookingDialog } from '@/components/booking/BookingDialog'
import { MobileActionBar } from '@/components/layout/MobileActionBar'
import { RouteEffects } from '@/components/layout/RouteEffects'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { BookingProvider } from '@/context/BookingContext'
import About from '@/pages/About'
import ConditionPage from '@/pages/ConditionPage'
import ConditionsIndex from '@/pages/ConditionsIndex'
import Home from '@/pages/Home'
import { Disclaimer, Privacy } from '@/pages/Legal'
import NotFound from '@/pages/NotFound'
import TestPage from '@/pages/TestPage'
import TestsIndex from '@/pages/TestsIndex'
import Visit from '@/pages/Visit'

export default function App() {
  return (
    <BookingProvider>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-3 font-sans font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<TestsIndex />} />
            <Route path="/tests/:slug" element={<TestPage />} />
            <Route path="/conditions" element={<ConditionsIndex />} />
            <Route path="/conditions/:slug" element={<ConditionPage />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/medical-disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
      <MobileActionBar />
      <BookingDialog />
      <RouteEffects />
      <Toaster theme="light" position="top-center" richColors closeButton />
    </BookingProvider>
  )
}
