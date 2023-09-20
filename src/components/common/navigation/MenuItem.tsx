import { ReactNode } from "react"

type MenuItemProps = {
    children?:ReactNode
}

export default function MenuItem({children}: MenuItemProps) {
  return (
    <div>{children}</div>
  )
}