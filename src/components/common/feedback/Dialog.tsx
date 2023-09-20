import { ReactNode } from "react"

type DialogProps = {
    children?:ReactNode
}

export default function Dialog({children}: DialogProps) {
  return (
    <div>{children}</div>
  )
}