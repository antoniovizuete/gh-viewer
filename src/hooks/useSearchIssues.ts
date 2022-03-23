import useSWR from 'swr'
import { PagedIssuesType } from '../components/PagedIssues'
import { githubFetcher } from '../fetchers/githubFetcher'
import { SearchIssueResult } from '../types/Issue'

export const useSearchIssues = ({ username, repo, index }: PagedIssuesType) => {
  const { data, error } = useSWR<SearchIssueResult>(
    `/search/issues?q=repo:${username}/${repo}+state:open+page:${index}+sort:created`,
    githubFetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
