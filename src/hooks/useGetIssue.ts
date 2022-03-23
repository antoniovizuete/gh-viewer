import useSWR from 'swr'
import { githubFetcher } from '../fetchers/githubFetcher'
import { Issue } from '../types/Issue'

export const useGetIssue = (username?: string, repo?: string, issue?: string) => {
  const { data, error } = useSWR<Issue>(
    `/repos/${username}/${repo}/issues/${issue}`,
    githubFetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
