import { Issue } from '../types/SearchIssueResult'

export default function IssueItem(issue: Issue) {
  return (
    <>
      <li>{issue.title}</li>
      <li>{issue.user.login}</li>
      <li>{issue.created_at}</li>
      <li>{issue.comments}</li>
      <ul>{issue.labels.map(label => (
        <li key={label.id}>{label.name}</li>
      ))}</ul>
      {issue.pull_request && "Pull Request"}
      {!issue.pull_request && "Issue"}
    </>
  )
}
