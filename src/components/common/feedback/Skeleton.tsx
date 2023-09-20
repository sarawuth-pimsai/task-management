type SkeletonProps = {
    variant?:string
}

export default function Skeleton({variant}: SkeletonProps) {
  return (
    <div>{variant}</div>
  )
}