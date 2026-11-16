import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface Crumb {
  label: string
  to?: string
}

interface PageHeaderProps {
  title: string
  intro?: ReactNode
  crumbs: Crumb[]
  children?: ReactNode
}

export function PageHeader({ title, intro, crumbs, children }: PageHeaderProps) {
  return (
    <div className="border-b bg-white">
      <div className="container-page flex flex-col gap-5 py-10 sm:py-14">
        <Breadcrumb>
          <BreadcrumbList className="font-sans text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.map((c) => (
              <Fragment key={c.label}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {c.to ? (
                    <BreadcrumbLink asChild>
                      <Link to={c.to}>{c.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{c.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="heading-lg max-w-[22ch]">{title}</h1>
        {intro && <div className="lede max-w-[38em]">{intro}</div>}
        {children}
      </div>
    </div>
  )
}
