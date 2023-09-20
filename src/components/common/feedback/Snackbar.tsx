type SnackbarProps = {
    isOpen?: boolean
    message?:string
    action?:() => void
}

export default function Snackbar({message}: SnackbarProps) {
  return (
    <div>{message}</div>
  )
}