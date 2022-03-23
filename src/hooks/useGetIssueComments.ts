import useSWR from 'swr'
import { githubFetcher } from '../fetchers/githubFetcher'
import { Comment } from '../types/Comment'

export const useGetIssueComments = (username?: string, repo?: string, issue?: string) => {
  const { data, error } = useSWR<Comment[]>(
    `/repos/${username}/${repo}/issues/${issue}/comments`,
    githubFetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
