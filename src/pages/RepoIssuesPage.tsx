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
    <>
      <nav className='border-b border-blue-500 text-xl pb-4'>
        Showing <span className='font-bold'>{data?.total_count}</span> issues for <span className='font-bold'>{username}/{repo}</span>
      </nav>
      <section className='flex flex-col divide-y divide-blue-500'>
        {data?.items.map(issue => <IssueItem key={issue.id} {...issue} />)}
      </section>
    </>
  )
}
