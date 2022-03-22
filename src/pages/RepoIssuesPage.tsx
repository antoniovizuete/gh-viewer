import { useParams } from 'react-router'
import IssueItem from '../components/IssueItem'
import { useSearchIssues } from '../hooks/useSearchIssues'

export default function RepoIssuesPage() {
  const { username, repo } = useParams()
  const { isError, isLoading, data } = useSearchIssues(username, repo)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{isError}</h1>
  }
  if (data?.total_count === 0) {
    return <h1>No issues found for {username}/{repo}</h1>
  }

  return (
   data?.items.map(issue => <IssueItem key={issue.id} {...issue} />)
  )
}
