type LinksProps = {
    variant?:string
}

export default function Links({variant}: LinksProps) {
  return (
    <div>{variant}</div>
  )
}