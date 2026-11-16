import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start gap-6 py-24">
      <h1 className="heading-lg">This page doesn't exist</h1>
      <p className="lede">The link may be out of date. You can find tests, conditions and clinic hours from the home page.</p>
      <Button asChild className="h-12 px-6 text-base font-bold">
        <Link to="/">Go to the home page</Link>
      </Button>
    </div>
  )
}
