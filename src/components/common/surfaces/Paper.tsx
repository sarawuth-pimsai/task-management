import { ReactNode } from 'react'

type PaperProps = {
    children?:ReactNode
}

export default function Paper({children}: PaperProps) {
  return (
    <div>{children}</div>
  )
}