import clsx from "clsx"
import { HTMLAttributes } from "react"

import cls from "./Badge.module.scss"

type BadgeProps = HTMLAttributes<HTMLDivElement>

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <div className={clsx(cls.badge, className)} {...props}>
      {children}
    </div>
  )
}
