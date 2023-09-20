import { ReactNode } from "react"

type DrawerProps = {
    children?:ReactNode
}

export default function Drawer({children}: DrawerProps) {
  return (
    <div>{children}</div>
  )
}