import clsx from "clsx"
import { HTMLAttributes } from "react"

import { Avatar } from "@/components/atoms/Avatar"
import { Card } from "@/components/atoms/Card"
import { DeleteActionButton } from "@/components/molecues/DeleteActionButton"
import { IssueStatusBadge } from "@/components/molecues/IssueStatusBadge"
import { UpdateIssueStatusButton } from "@/components/molecues/UpdateIssueStatusButton"
import { useIssuesStore } from "@/stores/useIssuesStore"
import { Issue } from "@/types/Issue"

import cls from "./Issues.module.scss"

export function Issues({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return <section className={clsx(cls.issues, className)}>{children}</section>
}

type IssueProps = HTMLAttributes<HTMLDivElement> & { issue: Issue }

function Issue({ issue, className, ...props }: IssueProps) {
  const { deleteIssueById } = useIssuesStore()

  return (
    <Card className={clsx(cls.issue, className)} {...props}>
      <Card.Header className={cls.header}>
        <Avatar userName={issue.user.name} />
        <div className={cls.user}>{issue.user.name}</div>
        <div>{issue.createdAt}</div>

        <DeleteActionButton className={cls.deleteButton} onClick={() => deleteIssueById(issue.id)} />
      </Card.Header>

      <Card.Content>
        <h2 className={cls.title}>{issue.title}</h2>
        {issue.description}
      </Card.Content>

      <Card.Footer className={cls.footer}>
        <IssueStatusBadge status={issue.status} />

        <UpdateIssueStatusButton issueId={issue.id} status={issue.status} className={cls.updateStatusButton} />
      </Card.Footer>
    </Card>
  )
}

Issues.Item = Issue
