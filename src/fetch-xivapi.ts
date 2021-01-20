import bent from 'bent'

export const fetch = bent('https://xivapi.com', 'json', 200)

export async function fetchAllPages (url: string) {
  const results = []
  for (let page = 1; ; ++page) {
    const data = await fetch(url + `?page=${page}`)
    results.push(...data.Results)
    if (page === data.Pagination.PageTotal) {
      return results
    }
  }
}
