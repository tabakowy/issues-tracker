import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

import cls from "./Button.module.scss"

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(cls.button, className)} {...props}>
      {children}
    </button>
  )
}
