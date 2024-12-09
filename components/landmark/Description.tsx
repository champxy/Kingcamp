type Props = {
    Description: string
}
export default function Description({Description}: Props) {
  return (
    <article className="mt-3">
        <p className="text-muted-foreground font-light leading-7">{Description}</p>
    </article>
  )
}