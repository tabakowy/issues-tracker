import clsx from "clsx"
import { HTMLAttributes } from "react"

import cls from "./Card.module.scss"

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <article className={clsx(cls.card, className)} {...props}>
      {children}
    </article>
  )
}

function Header({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={clsx(cls.header, className)} {...props}>
      {children}
    </header>
  )
}

function Content({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={clsx(cls.content, className)} {...props}>
      {children}
    </header>
  )
}

function Footer({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={clsx(cls.footer, className)} {...props}>
      {children}
    </footer>
  )
}

Card.Header = Header
Card.Content = Content
Card.Footer = Footer
