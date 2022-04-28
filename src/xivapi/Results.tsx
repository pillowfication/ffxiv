import React, { useEffect, useState } from 'react'
import fetch from '../fetch-xivapi'
import Paper from '@mui/material/Paper'
import Pagination from './Pagination'
import renderJSON from './render-json'

const CACHE: Array<{ key: string, value: any }> = []

function getCached (key: string): any {
  return CACHE.find(item => item.key === key)
}

function addCached (key: string, value: any): void {
  CACHE.push({ key, value })
  if (CACHE.length > 100) {
    CACHE.shift()
  }
}

interface Props {
  url: string
  onChangeUrl: (url: string) => void
}

const Results = ({ url, onChangeUrl }: Props): React.ReactElement => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const cached = getCached(url)
    if (cached !== undefined) {
      setData(cached.value)
    } else {
      // Use Suspense to avoid race thinggy
      setData(null)
      fetch(url)
        .then((json: any) => {
          addCached(url, json)
          setData(json)
        })
        .catch((err: any) => {
          setData(err)
        })
    }
  }, [url])

  return (
    <>
      <Pagination url={url} data={data} onChangeUrl={onChangeUrl} />
        <Paper variant='outlined' sx={{
          p: 2,
          pl: 4,
          fontFamily: 'monospace'
        }}>
          {data !== null ? renderJSON(data, { depth: 0, onChangeUrl, _isContent: url === '/content' || url === '/Content' }) : 'Loading...'}
        </Paper>
      <Pagination url={url} data={data} onChangeUrl={onChangeUrl} />
    </>
  )
}

export default Results
