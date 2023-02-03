import clsx from "clsx"
import { ComponentProps } from "react"

import { Badge } from "@/components/atoms/Badge"
import { IssueStatus } from "@/enums/IssueStatus.enum"

import cls from "./IssueStatusBadge.module.scss"

type IssueStatusBadgeProps = ComponentProps<typeof Badge> & {
  status: IssueStatus
}

export function IssueStatusBadge({ status, ...props }: IssueStatusBadgeProps) {
  return (
    <Badge className={clsx(cls.statusBadge, cls[status])} {...props}>
      {status}
    </Badge>
  )
}
