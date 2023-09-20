import { ReactNode } from 'react'

type CommentListItemProps = {
    children?:ReactNode
}

export default function CommentListItem({children}: CommentListItemProps) {
  return (
    <div>{children}</div>
  )
}