import fetch from 'node-fetch'

const XIVAPI = 'https://xivapi.com'

export default async function fetchXIVAPI (endpoint: string, qs?: Record<string, string>): Promise<any> {
  const url = new URL(XIVAPI + endpoint)
  if (qs !== undefined) {
    for (const [key, value] of Object.entries(qs)) {
      url.searchParams.append(key, value)
    }
  }

  const response = await fetch(url)
  const json = await response.json()

  return json
}

// export async function fetchAllPages (endpoint: string, qs?: Record<string, string>) {
//   const results: any[] = []
//   const _qs = Object.assign({}, qs)
//
//   for (let page = 1; ; ++page) {
//     _qs.page = String(page)
//     const json = await fetchXIVAPI(endpoint, _qs)
//     if (json.Results) {
//       results.push(...json.Results)
//     }
//     if (!json.Pagination || json.Pagination.Page === json.Pagination.PageTotal) {
//       break
//     }
//   }
//
//   return results
// }
//
// export async function getSearchResult (query: string, type: string, qs?: Record<string, string>) {
//   const results = await fetchAllPages('/search', { string: query, columns: 'Name,UrlType,Url' })
//   for (const result of results) {
//     if (result.Name === query && result.UrlType === type) {
//       return await fetchXIVAPI(result.Url, qs)
//     }
//   }
//   throw new Error(`Could not find item: ${query} (${type})`)
// }
