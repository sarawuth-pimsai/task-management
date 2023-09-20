import { ReactNode } from "react"

type MenuProps = {
    children?:ReactNode
}

export default function Menu({children}: MenuProps) {
  return (
    <div>{children}</div>
  )
}