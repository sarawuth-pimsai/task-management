import { ReactNode } from "react"

type BreadcrumbsProps = {
    children?:ReactNode
}

export default function Breadcrumbs({children}: BreadcrumbsProps) {
  return (
    <div>{children}</div>
  )
}