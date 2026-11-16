import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/context/BookingContext'
import { telHref, whatsappHref } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons'

/** Fixed call, WhatsApp and booking buttons on small screens. */
export function MobileActionBar() {
  const { openBooking } = useBooking()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 font-sans lg:hidden">
      <Button asChild variant="outline" size="icon" className="size-[52px] shrink-0 border-ink/40">
        <a href={whatsappHref()} target="_blank" rel="noopener" aria-label="Message the clinic on WhatsApp">
          <WhatsAppIcon className="size-6" />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon" className="size-[52px] shrink-0 border-ink/40">
        <a href={telHref} aria-label="Call the clinic">
          <Phone className="size-6" />
        </a>
      </Button>
      <Button onClick={() => openBooking()} className="h-[52px] flex-1 text-base font-bold">
        Book a consultation
      </Button>
    </div>
  )
}
