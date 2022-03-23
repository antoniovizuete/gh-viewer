const GH_API_BASE_URL = 'https://api.github.com'

export const githubFetcher = (endpoint: string, ...args: any[]) => {
  const url = `${GH_API_BASE_URL}${endpoint}`
  return fetch(url, ...args).then(res => res.json())
}
