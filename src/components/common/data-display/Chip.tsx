import { ReactNode } from "react"

type ChipProps = {
    children?:ReactNode
}

export default function Chip({children}: ChipProps) {
  return (
    <div>{children}</div>
  )
}