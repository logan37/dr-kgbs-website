import { Button } from '@/components/ui/button'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'
import { whatsappHref } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons'

/** Closing call to action used at the end of inner pages. */
export function BookingBand({ heading, reason }: { heading?: string; reason?: string }) {
  const { openBooking } = useBooking()
  const { doctor, clinic } = content
  return (
    <section className="bg-mist">
      <div className="container-page flex flex-col gap-6 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-[36em] flex-col gap-3">
          <h2 className="heading-lg text-3xl sm:text-4xl">{heading ?? `See ${doctor.name}`}</h2>
          <p className="lede text-lg">
            {clinic.name}, {clinic.locality}. Most tests are done in the same visit.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 font-sans">
          <Button onClick={() => openBooking(reason)} className="h-[54px] px-7 text-[17px] font-bold">
            Book a consultation
          </Button>
          <Button asChild variant="outline" className="h-[54px] border-[1.5px] border-ink bg-transparent px-6 text-[17px] font-bold">
            <a href={whatsappHref()} target="_blank" rel="noopener">
              <WhatsAppIcon className="size-5" />
              Ask on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
