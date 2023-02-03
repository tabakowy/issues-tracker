import clsx from "clsx"
import { ComponentProps } from "react"
import { HourglassEmpty, Lock } from "tabler-icons-react"

import { Button } from "@/components/atoms/Button"
import { IssueStatus } from "@/enums/IssueStatus.enum"
import { useIssuesStore } from "@/stores/useIssuesStore"
import { Issue } from "@/types/Issue"

import cls from "./UpdateIssueStatusButton.module.scss"

type UpdateIssueStatusButtonProps = ComponentProps<typeof Button> & { issueId: Issue["id"]; status: IssueStatus }

export function UpdateIssueStatusButton({ issueId, status, className, ...props }: UpdateIssueStatusButtonProps) {
  const { setNextStatus } = useIssuesStore()

  if (status === IssueStatus.CLOSED) return null

  return (
    <Button className={clsx(cls.updateStatusButton, className)} onClick={() => setNextStatus(issueId)} {...props}>
      {STATUS_BUTTON_CONTENT[status].icon}
      {STATUS_BUTTON_CONTENT[status].label}
    </Button>
  )
}

const STATUS_BUTTON_CONTENT = {
  [IssueStatus.OPEN]: {
    label: "Set as pending",
    icon: <HourglassEmpty size={18} />,
  },

  [IssueStatus.PENDING]: {
    label: "Close issue",
    icon: <Lock size={18} />,
  },
}
