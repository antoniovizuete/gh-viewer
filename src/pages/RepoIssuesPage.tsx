import { useState } from 'react'
import { useParams } from 'react-router'
import PagedIssues from '../components/PagedIssues'
import PageNavbar from '../components/PageNavbar'

export default function RepoIssuesPage() {
  const { username, repo } = useParams()
  const [pageIndex, setPageIndex] = useState(0);

  const handlePaginateClick = (next: number) => () => {
    setPageIndex(prev => prev + next)
  }
  return (
    <>
      <PageNavbar to="/">
        <span className='flex-grow text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Showing results for <span className='font-bold'>{username}/{repo}</span></span>
        <div className='w-20'>
          <button className='rounded-l-md p-2 bg-blue-500 text-white text-xs' onClick={handlePaginateClick(-1)}>&lt;</button>
          <button className='rounded-r-md p-2 bg-blue-500 text-white text-xs' onClick={handlePaginateClick(1)}>&gt;</button>
        </div>
      </PageNavbar>
      <section className='min-h-screen overflow-y-auto mt-36 flex flex-col divide-y divide-slate-300'>
        <PagedIssues username={username} repo={repo} index={pageIndex} />
      </section>
    </>
  )
}
