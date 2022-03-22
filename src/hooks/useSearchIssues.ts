import useSWR from "swr"
import { githubFetcher } from '../fetchers/githubFetcher'
import { SearchIssueResult } from '../types/Issue'

export const useSearchIssues = (username?: string, repo?: string) => {
  const { data, error } = useSWR<SearchIssueResult>(
    `/search/issues?q=repo:${username}/${repo}+state:open`, 
    githubFetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}