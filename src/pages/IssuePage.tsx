import { useParams } from 'react-router'
import { useGetIssue } from '../hooks/useGetIssue'
import { useDateTimeFormater } from '../hooks/useDateTimeFormater'
import Comments from '../components/Comments'
import PageNavbar from '../components/PageNavbar'


export default function IssuePage() {
  const { username, repo, issue } = useParams()
  const { isError, isLoading, data } = useGetIssue(username, repo, issue)
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{isError}</h1>
  }
  if (!data) {
    return <h1>No issues found for {username}/{repo} #{issue}</h1>
  }

  const { timeAgo } = useDateTimeFormater(new Date(data.created_at))

  return (
    <>
      <PageNavbar to={`/${username}/${repo}`}>
        <div className='flex-grow sm:flex sm:justify-between sm:items-center'>
          <span className='text-xs sm:text-sm md:text-md lg:text-lg block sm:inline font-medium'>{data.title}</span>
          <span className='text-gray-600 text-xs sm:text-sm md:text-md mr-2'>
            <span>by </span>
            <span className='italic'>{data.user.login}</span> 
            <span className='sm:hidden'> - </span>
            <span className='hidden sm:inline'> created </span>
            <span>{timeAgo}</span>
          </span>
        </div>
      </PageNavbar>
      <section className='min-h-screen overflow-y-auto m-1 sm:m-2 mt-36 sm:mt-36'>  
        <Comments username={username} repo={repo} issue={issue} mainComment={data} />
      </section>
    </>
  )
}
