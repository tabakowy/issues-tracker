import clsx from "clsx"
import { ButtonHTMLAttributes, ComponentProps } from "react"
import { Trash } from "tabler-icons-react"

import { Button } from "@/components/atoms/Button"

import cls from "./DeleteActionButton.module.scss"

export function DeleteActionButton({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button className={clsx(cls.deleteActionButton, className)} title="Delete" {...props}>
      <Trash size={18} />
    </Button>
  )
}
