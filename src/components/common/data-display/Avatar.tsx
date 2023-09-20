type AvatarProps = {
    src:string
}

export default function Avatar({src, ...imgProps}: AvatarProps, ) {
  return (
    <div><img src={src} {...imgProps} /></div>
  )
}