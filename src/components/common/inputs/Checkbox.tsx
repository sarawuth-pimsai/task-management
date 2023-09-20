type CheckboxProps = {
    label:string
}

export default function Checkbox({label}: CheckboxProps) {
  return (
    <div>{label}</div>
  )
}