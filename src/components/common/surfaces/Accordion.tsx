import { ReactNode } from 'react'

type AccordionProps = {
    children?:ReactNode
}

export default function Accordion({children}: AccordionProps) {
  return (
    <div>{children}</div>
  )
}