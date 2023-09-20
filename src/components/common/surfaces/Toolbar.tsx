import { ReactNode } from "react"

type ToolbarProps = {
    children?:ReactNode
}

export default function Toolbar({children}: ToolbarProps) {
  return (
    <div>{children}</div>
  )
}