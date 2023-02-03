import { create } from "zustand"

import { IssueStatus } from "@/enums/IssueStatus.enum"
import { Issue } from "@/types/Issue"
import { getNextIssueStatus } from "@/utils/getNextIssueStatus"

type IssuesStore = {
  data: Issue[]
  setData: (data: Issue[]) => void
  setNextStatus: (id: number) => void
  deleteIssueById: (id: number) => void
}

export const useIssuesStore = create<IssuesStore>((set) => ({
  data: [],

  setData: (data) => set({ data }),

  setNextStatus: (id) =>
    set((state) => ({
      data: state.data.map((issue) => ({
        ...issue,
        status: issue.id === id ? getNextIssueStatus(issue.status) || IssueStatus.CLOSED : issue.status,
      })),
    })),

  deleteIssueById: (id) => set((state) => ({ data: state.data.filter((issue) => issue.id !== id) })),
}))


