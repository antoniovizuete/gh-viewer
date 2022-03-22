import { User } from './User'

export type Label = {
  id: number,
  name: string,
  description: string,
  color: string,
}

export type Issue = {
  id: number,
  number: number,
  title: string,
  body: string,
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