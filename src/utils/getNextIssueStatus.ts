import { IssueStatus } from "@/enums/IssueStatus.enum"

export function getNextIssueStatus(currentStatus: IssueStatus) {
  switch (currentStatus) {
    case IssueStatus.OPEN:
      return IssueStatus.PENDING
    case IssueStatus.PENDING:
      return IssueStatus.CLOSED
  }
}
