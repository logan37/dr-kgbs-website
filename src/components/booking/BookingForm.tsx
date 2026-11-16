import { useEffect, useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { content } from '@/content/site'
import { whatsappHref } from '@/lib/site'

const { booking, doctor } = content
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

interface Fields {
  name: string
  phone: string
  reason: string
  date: string
  session: string
  note: string
  consent: boolean
}

type Errors = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (f.name.trim().length < 2) errors.name = 'Enter your name.'
  const digits = f.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 13) errors.phone = 'Enter a 10-digit mobile number.'
  if (!f.reason) errors.reason = 'Choose what you would like to be seen for.'
  if (!f.consent) errors.consent = 'Tick the box so the clinic can contact you.'
  return errors
}

function toMessage(f: Fields) {
  return [
    booking.whatsappGreeting,
    '',
    `Name: ${f.name.trim()}`,
    `Mobile: ${f.phone.trim()}`,
    `Reason: ${f.reason}`,
    `Preferred day: ${f.date || 'Earliest available'}`,
    `Session: ${f.session}`,
    f.note.trim() ? `Note: ${f.note.trim()}` : '',
  ]
    .filter((line, i) => line !== '' || i === 1)
    .join('\n')
}

interface BookingFormProps {
  initialReason?: string
  onDone?: () => void
  idPrefix?: string
}

export function BookingForm({ initialReason = '', onDone }: BookingFormProps) {
  const id = useId()
  const [fields, setFields] = useState<Fields>({
    name: '',
    phone: '',
    reason: booking.reasons.includes(initialReason) ? initialReason : '',
    date: '',
    session: booking.sessions[0],
    note: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)
  const [minDate, setMinDate] = useState<string>()

  // Set after hydration so server and client render the same markup.
  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10))
  }, [])

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }

    if (!FORM_KEY) {
      window.open(whatsappHref(toMessage(fields)), '_blank', 'noopener')
      toast.success('WhatsApp opened with your request. Press send to finish.')
      onDone?.()
      return
    }

    setSending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `Appointment request for ${doctor.name}`,
          from_name: 'Website appointment form',
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          reason: fields.reason,
          preferred_day: fields.date || 'Earliest available',
          session: fields.session,
          note: fields.note.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) throw new Error(data.message || 'Request failed')
      toast.success(booking.successMessage)
      setFields((f) => ({ ...f, name: '', phone: '', note: '', date: '', consent: false }))
      onDone?.()
    } catch {
      toast.error('The request did not go through. Try again, or message the clinic on WhatsApp.', {
        action: { label: 'Open WhatsApp', onClick: () => window.open(whatsappHref(toMessage(fields)), '_blank', 'noopener') },
      })
    } finally {
      setSending(false)
    }
  }

  const err = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="font-sans text-sm font-medium text-destructive">
        {errors[key]}
      </p>
    ) : null

  const describedBy = (key: keyof Fields) => (errors[key] ? `${id}-${key}-error` : undefined)
  const inputClass = 'h-12 bg-white font-serif text-base'

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 font-sans">
      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-name`}>Your name</Label>
        <Input
          id={`${id}-name`}
          autoComplete="name"
          value={fields.name}
          onChange={(e) => set('name', e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={describedBy('name')}
          className={inputClass}
        />
        {err('name')}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-phone`}>Mobile number</Label>
        <Input
          id={`${id}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91"
          value={fields.phone}
          onChange={(e) => set('phone', e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={describedBy('phone')}
          className={inputClass}
        />
        {err('phone')}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-reason`}>What would you like to see the doctor about?</Label>
        <Select value={fields.reason} onValueChange={(v) => set('reason', v)}>
          <SelectTrigger
            id={`${id}-reason`}
            aria-invalid={!!errors.reason}
            aria-describedby={describedBy('reason')}
            className="h-12 w-full bg-white font-serif text-base"
          >
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            {booking.reasons.map((r) => (
              <SelectItem key={r} value={r} className="py-2.5 text-base">
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {err('reason')}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${id}-date`}>Preferred day (optional)</Label>
          <Input
            id={`${id}-date`}
            type="date"
            min={minDate}
            value={fields.date}
            onChange={(e) => set('date', e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${id}-session`}>Morning or evening</Label>
          <Select value={fields.session} onValueChange={(v) => set('session', v)}>
            <SelectTrigger id={`${id}-session`} className="h-12 w-full bg-white font-serif text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {booking.sessions.map((s) => (
                <SelectItem key={s} value={s} className="py-2.5 text-base">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-note`}>Anything the clinic should know (optional)</Label>
        <Textarea
          id={`${id}-note`}
          rows={3}
          maxLength={500}
          value={fields.note}
          onChange={(e) => set('note', e.target.value)}
          className="bg-white font-serif text-base"
        />
        <p className="text-sm text-muted-foreground">Please don't include detailed medical history here.</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id={`${id}-consent`}
            checked={fields.consent}
            onCheckedChange={(v) => set('consent', v === true)}
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy('consent')}
            className="mt-0.5 size-5 bg-white"
          />
          <Label htmlFor={`${id}-consent`} className="block text-sm font-normal leading-relaxed text-ink-soft">
            {booking.consentText.replace(' See the privacy notice.', '')}{' '}
            <Link to="/privacy/" className="font-semibold text-primary underline underline-offset-2">
              Privacy notice
            </Link>
          </Label>
        </div>
        {err('consent')}
      </div>

      <Button type="submit" size="lg" disabled={sending} className="h-13 min-h-[52px] text-base font-bold">
        {sending ? 'Sending…' : FORM_KEY ? 'Request appointment' : 'Request appointment on WhatsApp'}
      </Button>

      <p className="font-serif text-sm leading-relaxed text-ink-soft">{booking.emergencyNote}</p>
    </form>
  )
}
