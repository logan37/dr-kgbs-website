import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'
import { BookingForm } from './BookingForm'

export function BookingDialog() {
  const { open, setOpen, reason } = useBooking()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] overflow-y-auto bg-background p-6 sm:max-w-lg sm:p-8">
        <DialogHeader className="text-left">
          <DialogTitle className="font-sans text-2xl font-extrabold tracking-tight">{content.booking.heading}</DialogTitle>
          <DialogDescription className="font-serif text-base text-ink-soft">{content.booking.intro}</DialogDescription>
        </DialogHeader>
        {/* key resets the form each time it opens with a different reason */}
        <BookingForm key={`${open}-${reason}`} initialReason={reason} onDone={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
