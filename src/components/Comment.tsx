import { useDateTimeFormater } from '../hooks/useDateTimeFormater'
import { Comment as CommentType } from '../types/Comment'
import Markdown from './Markdown'

type CommentProps = {
  comment: CommentType
}
export default function Comment({ comment }: CommentProps) {
  const { timeAgo, formated } = useDateTimeFormater(new Date(comment.created_at))
  return (
    <article className='rounded-md border border-blue-500'>
      <nav className='p-2 border-b border-blue-500 bg-blue-100 flex justify-between items-center'>
        <div>{comment.user.login}</div>
        <span title={formated}>{timeAgo}</span>
      </nav>
      <section className='p-5'>
        <Markdown body={comment.body} />
      </section>
    </article>
  )
}
