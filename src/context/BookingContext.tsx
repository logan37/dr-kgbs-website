import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface BookingState {
  open: boolean
  reason: string
  openBooking: (reason?: string) => void
  setOpen: (open: boolean) => void
}

const BookingContext = createContext<BookingState | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState('')

  const openBooking = useCallback((nextReason?: string) => {
    setReason(nextReason ?? '')
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ open, reason, openBooking, setOpen }), [open, reason, openBooking])
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}
