import { Link } from 'react-router-dom'
import { useDateTimeFormater } from '../hooks/useDateTimeFormater'
import { Issue } from '../types/Issue'
import IssueLabel from './IssueLabel'
import CommentSVG from './svg/CommentSVG'
import IssueSVG from './svg/IssueSVG'
import PullRequestSVG from './svg/PullRequestSVG'

type IssueItemProps = Issue & {
  username?: string,
  repo?: string
}

export default function IssueItem(issue: IssueItemProps) {
  const { timeAgo, formated } = useDateTimeFormater(new Date(issue.created_at))

  return (
    <Link
      to={`/${issue.username}/${issue.repo}/issues/${issue.number}`}
      className='p-5 flex flex-col sm:flex-row justify-start items-start hover:bg-indigo-50 odd:bg-stone-100'
    >
      <div className='pr-4 pt-2'>
        <div className='flex flex-col justify-center items-center w-10'>
          {issue.pull_request && <PullRequestSVG />}
          {!issue.pull_request && <IssueSVG />}
          <span className='text-xs font-thin'>
            {issue.pull_request ? 'PR' : 'Issue'}
          </span>
        </div>
      </div>
      <div className='flex-grow' >
        <h2 className='text-md font-semibold tracking-tight text-gray-900'>{issue.title}</h2>
        <h5 className='text-xs text-gray-600'>opened <span title={formated}>{timeAgo}</span> by <span className='italic'>{issue.user.login}</span></h5>
        <div className='flex flex-col md:flex-row gap-2 md:gap-5 mt-2'>
          {issue.labels.map(label => <IssueLabel key={label.id} {...label} />)}
        </div>
      </div>
      {issue.comments > 0 &&
        <div className='flex flex-col justify-center items-center w-10 mt-2 sm:mt-0'>
          <CommentSVG />
          <div className="text-xs font-light">{issue.comments}</div>
        </div>
      }
    </Link>
  )
}
