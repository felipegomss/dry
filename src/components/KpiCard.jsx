export default function KpiCard({ title, prefix, text }) {
  return (
    <div className="rounded-2xl">
      <small className="text-sm font-medium leading-none text-primary">
        {prefix}
      </small>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-xl text-muted-foreground">{text}</p>
    </div>
  )
}
