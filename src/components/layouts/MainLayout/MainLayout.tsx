import clsx from "clsx"
import { HTMLAttributes, ReactElement } from "react"

import cls from "./MainLayout.module.scss"

function MainLayout({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(cls.mainLayout, className)} {...props}>
      <main>{children}</main>
    </div>
  )
}

export function getMainLayout(page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}