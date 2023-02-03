import clsx from "clsx"
import { HTMLAttributes } from "react"

import cls from "./Avatar.module.scss"

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  userName: string
}

export function Avatar({ userName, className, ...props }: AvatarProps) {
  return (
    <div className={clsx(cls.avatar, className)} title={userName} {...props}>
    {userName[0]}
    </div>
  )
}
