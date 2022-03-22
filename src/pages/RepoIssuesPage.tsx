import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSearchIssues } from '../hooks/useSearchIssues'



export default function RepoIssuesPage() {
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

  return (
   data?.items.map(issue => (
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
