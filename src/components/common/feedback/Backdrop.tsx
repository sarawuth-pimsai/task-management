import { ReactNode } from "react"

type BackdropProps = {
    children?:ReactNode
}

export default function Backdrop({children}: BackdropProps) {
  return (
    <div>{children}</div>
  )
}