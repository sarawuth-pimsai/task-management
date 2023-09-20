import { ReactNode } from "react"

type StackProps = {
    children?:ReactNode
}

export default function Stack({children}: StackProps) {
  return (
    <div>{children}</div>
  )
}