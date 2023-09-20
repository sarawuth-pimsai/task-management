import { ReactNode } from "react"

type AppBarProps = {
    children?:ReactNode
}

export default function AppBar({children}: AppBarProps) {
  return (
    <div>{children}</div>
  )
}