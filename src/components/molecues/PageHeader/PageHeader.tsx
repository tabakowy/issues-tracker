import clsx from "clsx"
import { HTMLAttributes } from "react"

import cls from "./PageHeader.module.scss"

type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string
}

export function PageHeader({ title, children, className, ...props }: PageHeaderProps) {
  return (
    <header className={clsx(cls.pageHeader, className)} {...props}>
      <h1 className={cls.title}>{title}</h1>
      {children}
    </header>
  )
}
