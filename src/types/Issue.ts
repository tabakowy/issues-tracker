import { IssueStatus } from "@/enums/IssueStatus.enum"

export type Issue = {
  id: number
  title: string
  description: string
  status: IssueStatus
  createdAt: string
  tags?: string[]
  user: {
    name: string
  }
}
