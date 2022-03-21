import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

type Issue = {
  id: number,
  title: string,
  user: {
    login: string,
  }
  created_at: string,
  comments: number,
  labels: {
    id: number,
    name: string,
    description: string,
    color: string,
  }[],
  pull_request: Record<string, unknown>
}

export default function RepoIssuesPage() {
  const { username, repo } = useParams()
  const [issues, setIssues] = useState<Issue[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}/issues?state=open`)
      .then(res => res.json())
      .then(setIssues)
      .finally(() => setLoading(false))
  } ,[])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (issues.length === 0) {
    return <h1>No issues</h1>
  }
  return (
   issues.map(issue => (
     <ul key={issue.id}>
       <li>{issue.title}</li>
       <li>{issue.user.login}</li>
       <li>{issue.created_at}</li>
       <li>{issue.comments}</li>
       <ul>{issue.labels.map(label => (
        <li key={label.id}>{label.name}</li>
        ))}</ul>
        {issue.pull_request && "Pull Request"}
        {!issue.pull_request && "Issue"}
     </ul>
   ))
  )
}
