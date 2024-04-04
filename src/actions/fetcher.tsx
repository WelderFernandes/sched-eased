import useSWR from 'swr'

async function fetcher(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function useFetcher(url: string) {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return { data, error, isLoading }
}

export default useFetcher
