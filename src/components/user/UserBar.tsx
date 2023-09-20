import { ReactNode } from 'react'

type UserBarProps = {
    children?:ReactNode
}

export default function UserBar({children}: UserBarProps) {
  return (
    <div>{children}</div>
  )
}