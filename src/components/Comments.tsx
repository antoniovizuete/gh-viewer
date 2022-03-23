import { useGetIssueComments } from '../hooks/useGetIssueComments'
import { Comment as CommentType } from '../types/Comment'
import Comment from './Comment'

type CommentsProps = {
  username?: string,
  repo?: string,
  issue?: string,
  mainComment: CommentType
}
export default function Comments({ username, repo, issue, mainComment }: CommentsProps) {
  const { isError, isLoading, data } = useGetIssueComments(username, repo, issue)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{isError}</h1>
  }
  if (!data) {
    return <h1>No comments found for issue {username}/{repo} #{issue}</h1>
  }

  return (
    <>
      <div className='flex flex-col gap-5 mt-4'>
        <Comment comment={mainComment} />
        {data.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </>
  )
}
