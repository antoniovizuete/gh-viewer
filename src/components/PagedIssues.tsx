import { useNavigate } from 'react-router'
import { useSearchIssues } from '../hooks/useSearchIssues'
import IssueItem from './IssueItem'

export type PagedIssuesType = {
  username?: string
  repo?: string
  index: number
}

export default function PagedIssues({ username, repo, index }: PagedIssuesType) {
  const navigate = useNavigate()
  const { isError, isLoading, data } = useSearchIssues({ username, repo, index })

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{isError}</h1>
  }
  if (data?.total_count === 0) {
    return <h1>No issues found for {username}/{repo}</h1>
  }

  if (!Array.isArray(data?.items)) {
    navigate('/not-found')
    return <></>
  }

  return (<>
    {data?.items.map(issue => (
      <IssueItem
        key={issue.id}
        repo={repo}
        username={username}
        {...issue}
      />))}
  </>
  )
}
