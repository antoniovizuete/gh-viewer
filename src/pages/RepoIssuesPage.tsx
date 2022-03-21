import { useParams } from 'react-router'

export default function RepoIssuesPage() {
  const { username, repo } = useParams()
 
  return (
   <div>{`${username} ${repo}`}</div>
  )
}
