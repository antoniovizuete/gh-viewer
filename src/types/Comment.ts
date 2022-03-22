import { User } from './User'

export type Comment = {
  id: number,
  body: string,
  user: User,
  created_at: string
}