type User = {
  login: string,
}

type Label = {
  id: number,
  name: string,
  description: string,
  color: string,
}

type Issue = {
  id: number,
  title: string,
  user: User,
  created_at: string,
  comments: number,
  labels: Label[],
  pull_request: Record<string, unknown>
}

export type SearchIssueResult = {
  total_count: number,
  incomplete_results: boolean,
  items: Issue[]
}