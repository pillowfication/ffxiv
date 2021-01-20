import React, { useEffect, useState } from 'react'
import fetch from '../fetch-xivapi'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Pagination from './Pagination'
import renderJSON from './render-json'

const CACHE: { key: string, value: any }[] = []

function getCached (key: string) {
  return CACHE.find(item => item.key === key)
}
function addCached (key: string, value: any) {
  CACHE.push({ key, value })
  if (CACHE.length > 100) {
    CACHE.shift()
  }
}

const useStyles = makeStyles(theme => ({
  results: {
    padding: theme.spacing(2, 2, 2, 4),
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
    fontSize: '1.33em'
  }
}))

type Props = {
  url: string,
  onChangeUrl?: (url: string) => void
}

const Results = ({ url, onChangeUrl }: Props) => {
  const classes = useStyles()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const cached = getCached(url)
    if (cached) {
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
        <Paper className={classes.results}>
          {data ? renderJSON(data, { depth: 0, onChangeUrl, _isContent: url === '/content' || url === '/Content' }) : 'Loading...'}
        </Paper>
      <Pagination url={url} data={data} onChangeUrl={onChangeUrl} />
    </>
  )
}

export default Results
