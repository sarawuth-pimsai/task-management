import { ReactNode } from "react"

type ProgressProps = {
    children?:ReactNode
}

export default function Progress({children}: ProgressProps) {
  return (
    <div>{children}</div>
  )
}