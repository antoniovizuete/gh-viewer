import { useNavigate, useParams } from 'react-router'
import IssueItem from '../components/IssueItem'
import PageNavbar from '../components/PageNavbar'
import { useSearchIssues } from '../hooks/useSearchIssues'

export default function RepoIssuesPage() {
  const navigate = useNavigate()
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

  if (!Array.isArray(data?.items)) {
    navigate("/not-found")
    return <></>
  }

  return (
    <>
      <PageNavbar to="/">
        <span className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Showing <span className='font-bold'>{data?.items.length}</span> issues (of {data?.total_count}) for <span className='font-bold'>{username}/{repo}</span></span>
      </PageNavbar>
      <section className='min-h-screen overflow-y-auto mt-36 flex flex-col divide-y divide-slate-300'>
        {data?.items.map(issue => (
          <IssueItem 
            key={issue.id} 
            repo={repo}
            username={username}
            {...issue}
          />))}
      </section>
    </>
  )
}
