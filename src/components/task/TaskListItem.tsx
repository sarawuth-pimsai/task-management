import { ReactNode } from "react"

type TaskListItemProps = {
    children?:ReactNode
}

export default function TaskListItem({children}: TaskListItemProps) {
  return (
    <div>{children}</div>
  )
}