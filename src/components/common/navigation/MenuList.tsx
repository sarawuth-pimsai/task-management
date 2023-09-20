import { ReactNode } from 'react'

type MenuListProps = {
    children?:ReactNode
}

export default function MenuList({children}: MenuListProps) {
  return (
    <div>{children}</div>
  )
}