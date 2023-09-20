import { ReactNode } from "react"

type ButtonProps = {
    children?:ReactNode
    onClick?:()=>void
}

export default function Button({children}: ButtonProps) {
  return (
    <button>{children}</button>
  )
}