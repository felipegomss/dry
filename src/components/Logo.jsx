import clsx from 'clsx'
import { useId } from 'react'

export function Logomark({ invert = false, filled = false, ...props }) {
  const id = useId()

  return (
    <svg
      viewBox="-20 -20 502.513 502.513"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-full w-full fill-primary transition-all duration-300'
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="25"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M385.894,204.222h-0.246c-26.398,0-47.875,21.477-47.875,47.876v65.98c0,4.212-3.427,7.638-7.639,7.638
	H301.03V79.873C301.03,35.831,265.199,0,221.156,0c-44.042,0-79.873,35.831-79.873,79.873v86.585h-25.04
	c-2.592,0-4.701-2.109-4.701-4.702v-50.728c0-23.03-18.736-41.766-41.767-41.766h-0.001c-22.624,0-41.03,18.407-41.03,41.032v73.086
	c0,36.324,29.553,65.875,65.879,65.875h46.66v198.256c0,8.284,6.716,15,15,15H286.03c8.284,0,15-6.716,15-15v-25.8h49.871
	c45.693,0,82.868-37.171,82.868-82.86v-86.755C433.769,225.699,412.292,204.222,385.894,204.222z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 165 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="40"
        y="25"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        fontFamily="Mona Sans"
        fontWeight={600}
        fontSize="24"
      >
        Dry Digital.
      </text>
    </svg>
  )
}
