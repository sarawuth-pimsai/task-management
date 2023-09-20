import { ReactNode } from "react"

type TypographyProps = {
    children?:ReactNode
}

export default function Typography({children}: TypographyProps) {
  return (
    <div>{children}</div>
  )
}