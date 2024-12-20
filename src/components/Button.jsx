import clsx from 'clsx'
import Link from 'next/link'

export function Button({
  invert,
  secondary,
  href,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'hover:bg-white hover:text-neutral-950 bg-primary text-white'
      : secondary
      ? 'bg-white hover:bg-primary text-primary hover:text-white border border-primary'
      : 'bg-primary text-white hover:bg-neutral-800'
  )

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  )
}
