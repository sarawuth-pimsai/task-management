import { ReactNode } from "react"

type SelectProps = {
    children?:ReactNode
}

export default function Select({children}: SelectProps) {
  return (
    <div>{children}</div>
  )
}