import { ReactNode } from 'react'

type ListsProps = {
    children?:ReactNode
}

export default function Lists({children}: ListsProps) {
  return (
    <div>{children}</div>
  )
}