
type LoadingProps = {
    isLoading:boolean
}

export default function Loading({isLoading}: LoadingProps) {
  return (
    isLoading ? <div>Loading</div> : null
  )
}