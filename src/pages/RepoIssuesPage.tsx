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
      <nav className='fixed top-0 mt-24 h-12 container border-b border-blue-500 text-xl pb-4 z-50 backdrop-blur-sm bg-slate-100/80'>
        Showing <span className='font-bold'>{data?.items.length}</span> issues (of {data?.total_count}) for <span className='font-bold'>{username}/{repo}</span>
      </nav>
      <section className='min-h-screen overflow-y-auto mt-36 flex flex-col divide-y divide-blue-500'>
        {data?.items.map(issue => <IssueItem key={issue.id} {...issue} />)}
      </section>
    </>
  )
}
