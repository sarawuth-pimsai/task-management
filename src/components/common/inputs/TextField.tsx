type TextFieldProps = {
    label:string
}

export default function TextField({label}: TextFieldProps) {
  return (
    <div>{label}</div>
  )
}