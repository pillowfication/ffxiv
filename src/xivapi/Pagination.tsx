import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiPagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1)
  }
}))

type Props = {
  url: string,
  data: any,
  onChangeUrl: (url: string) => void
}

const Pagination = ({ url, data, onChangeUrl }: Props) => {
  const classes = useStyles()

  const handleChangePage = (_: any, page: number) => {
    const parsedUrl = new URL(url, 'https://xivapi.com')
    parsedUrl.searchParams.set('page', String(page))
    onChangeUrl(`${parsedUrl.pathname}?${parsedUrl.searchParams.toString()}`)
  }

  if (!data || !data.Pagination) {
    return null
  } else {
    const pagination = data.Pagination
    return (
      <div className={classes.pagination}>
        <MuiPagination
          count={pagination.PageTotal}
          defaultPage={pagination.Page}
          onChange={handleChangePage}
        />
      </div>
    )
  }
}

export default Pagination
