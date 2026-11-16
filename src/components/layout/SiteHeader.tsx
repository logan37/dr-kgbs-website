import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'
import { telHref } from '@/lib/site'
import { navItems } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { openBooking } = useBooking()
  const [menuOpen, setMenuOpen] = useState(false)
  const { doctor, contact } = content

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 font-sans backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-page flex min-h-16 items-center justify-between gap-6 py-2">
        <Link to="/" className="flex flex-col py-1 text-ink no-underline">
          <span className="text-lg font-extrabold tracking-tight">{doctor.name}</span>
          <span className="text-[13px] font-medium text-muted-foreground">
            {doctor.tagline}, {content.clinic.locality}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'whitespace-nowrap py-3 text-[15px] font-semibold text-ink no-underline decoration-2 underline-offset-8 hover:underline',
                  isActive && 'text-primary underline',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden h-11 border-ink/30 font-semibold md:inline-flex lg:hidden">
            <a href={telHref}>Call {contact.phoneDisplay}</a>
          </Button>
          <Button onClick={() => openBooking()} className="hidden h-11 px-5 font-bold sm:inline-flex">
            Book a consultation
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="size-11 lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white font-sans">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-extrabold">{doctor.name}</SheetTitle>
                <SheetDescription className="text-left">{doctor.title}</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-4">
                <NavLink to="/" end onClick={() => setMenuOpen(false)} className="border-b py-4 text-lg font-semibold text-ink no-underline">
                  Home
                </NavLink>
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn('border-b py-4 text-lg font-semibold text-ink no-underline', isActive && 'text-primary')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <Button
                  className="h-12 text-base font-bold"
                  onClick={() => {
                    setMenuOpen(false)
                    openBooking()
                  }}
                >
                  Book a consultation
                </Button>
                <Button asChild variant="outline" className="h-12 text-base font-semibold">
                  <a href={telHref}>Call {contact.phoneDisplay}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
