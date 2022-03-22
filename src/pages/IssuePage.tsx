import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useGetIssue } from '../hooks/useGetIssue'
import { useDateTimeFormater } from '../hooks/useDateTimeFormater'
import Markdown from '../components/Markdown'
import Comments from '../components/Comments'
import { Comment } from '../types/Comment'


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
      <nav className='fixed top-0 mt-24 h-12 container border-b border-blue-500 text-xl pb-4 z-50 backdrop-blur-sm bg-slate-100/80 flex gap-1 sm:gap-2 items-center'>
        <div className='m-1 sm:m-2'>
        <Link to={`/${username}/${repo}`} className="rounded-md bg-blue-500 p-2 text-white text-xs text-center sm:text-sm block">Go back</Link>
        </div>
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
      </nav>
      <section className='min-h-screen overflow-y-auto m-1 sm:m-2 mt-36 sm:mt-36'>  
        <Comments username={username} repo={repo} issue={issue} mainComment={data} />
      </section>
    </>
  )
}
