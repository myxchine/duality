import React from "react"

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block w-fit rounded-lg border border-accent/20 bg-accent50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm dark:border-accent/30 dark:bg-accent/20"
        {...props}
      >
        <span className="bg-gradient-to-b from-accent to-accent bg-clip-text text-transparent dark:from-accent dark:to-accent">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }
