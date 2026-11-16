import { PageHeader } from '@/components/PageHeader'
import { BookingForm } from '@/components/booking/BookingForm'
import { ClinicAddress, ClinicHours } from '@/components/ClinicDetails'
import { WhatsAppIcon } from '@/components/icons'
import { content } from '@/content/site'
import { telHref, whatsappHref } from '@/lib/site'

export default function Visit() {
  const { clinic, contact, booking } = content
  return (
    <>
      <PageHeader title="Hours and location" crumbs={[{ label: 'Hours and location' }]} intro={`${clinic.name}, ${clinic.locality}, ${clinic.city}.`} />

      <div className="container-page flex flex-col gap-12 py-14 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <ClinicAddress />
          <ClinicHours />
          <div className="flex flex-col gap-2 font-sans">
            <a href={telHref} className="self-start py-1 text-lg font-bold text-ink underline-offset-4 hover:underline">
              Call {contact.phoneDisplay}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 self-start py-1 text-lg font-bold text-ink underline-offset-4 hover:underline"
            >
              <WhatsAppIcon className="size-5" /> WhatsApp the clinic
            </a>
            {booking.consultationFee && <p className="font-serif text-ink-soft">{booking.consultationFee}</p>}
            {booking.practoUrl && (
              <a href={booking.practoUrl} target="_blank" rel="noopener" className="self-start py-1 font-semibold text-primary">
                Book on Practo
              </a>
            )}
          </div>
          {clinic.mapEmbedUrl && (
            <iframe
              title={`Map showing ${clinic.name}`}
              src={clinic.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-video w-full rounded-xl border bg-mist"
            />
          )}
          {clinic.areasServed.length > 0 && (
            <p className="reading">
              Patients come to the clinic from {clinic.areasServed.slice(0, -1).join(', ')} and{' '}
              {clinic.areasServed[clinic.areasServed.length - 1]}.
            </p>
          )}
        </div>

        <section aria-labelledby="booking-heading" className="flex flex-1 flex-col gap-4 self-start rounded-2xl bg-white p-6 sm:p-9">
          <h2 id="booking-heading" className="font-sans text-2xl font-extrabold tracking-tight">
            {booking.heading}
          </h2>
          <p className="text-ink-soft">{booking.intro}</p>
          <BookingForm />
        </section>
      </div>
    </>
  )
}
