import { useEffect } from "react"

import { getMainLayout } from "@/components/layouts/MainLayout/MainLayout"
import { PageHeader } from "@/components/molecues/PageHeader"
import { Issues } from "@/components/organisms/Issues"
import { useIssuesStore } from "@/stores/useIssuesStore"
import { Issue } from "@/types/Issue"
import { createRandomIssues } from "@/utils/createRandomIssues"

export default function Home({ issues }: { issues: Issue[] }) {
  const { data, setData } = useIssuesStore((state) => state)

  useEffect(() => setData(issues), [issues, setData])

  return (
    <>
      <PageHeader title="Issues" />

      <Issues>
        {data.map((issue) => (
          <Issues.Item issue={issue} key={issue.id} />
        ))}
      </Issues>
    </>
  )
}

export async function getServerSideProps() {
  const issues: Issue[] = createRandomIssues(15)

  return {
    props: { issues },
  }
}

Home.getLayout = getMainLayout
