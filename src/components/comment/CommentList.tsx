import { ReactNode } from 'react'

type CommentListProps = {
    children?:ReactNode
}

export default function CommentList({children}: CommentListProps) {
  return (
    <div>{children}</div>
  )
}