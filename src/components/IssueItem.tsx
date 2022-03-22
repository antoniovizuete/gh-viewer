import { useTimeAgo } from '../hooks/useTimeAgo'
import { Issue } from '../types/SearchIssueResult'
import IssueLabel from './IssueLabel';
import CommentSVG from './svg/CommentSVG';
import IssueSVG from './svg/IssueSVG';
import PullRequestSVG from './svg/PullRequestSVG';

export default function IssueItem(issue: Issue) {
  const timeAgo = useTimeAgo(new Date(issue.created_at));

  return (
    <div className='p-5 flex justify-start items-start hover:bg-indigo-50 odd:bg-stone-100'>
      <div className='pr-4 pt-2'>
        <div className='flex flex-col justify-center items-center w-10'>
          {issue.pull_request && <PullRequestSVG />}
          {!issue.pull_request && <IssueSVG />}
          <span className='text-xs font-thin'>
            {issue.pull_request ? "PR" : "Issue"}
          </span>
        </div>
      </div>
      <div className='flex-grow' >
        <h2 className='text-md font-bold tracking-tight text-gray-900'>{issue.title}</h2>
        <h5 className='text-xs text-gray-600'>opened {timeAgo} by {issue.user.login}</h5>
        <div className='flex gap-5'>
          {issue.labels.map(label => <IssueLabel key={label.id} {...label} />)}
        </div>
      </div>
      {issue.comments > 0 && 
        <div className='flex flex-col justify-center items-center w-10'>
          <CommentSVG />
          {issue.comments}
        </div>
      }
    </div>
  )
}
