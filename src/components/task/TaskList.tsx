import { ReactNode } from 'react'

type TaskListProps = {
    children?:ReactNode
}

export default function TaskList({children}: TaskListProps) {
  return (
    <div>{children}</div>
  )
}