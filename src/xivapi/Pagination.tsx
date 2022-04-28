import React from 'react'
import Pagination from '@mui/material/Pagination'

interface Props {
  url: string
  data: any
  onChangeUrl: (url: string) => void
}

const XivPagination = ({ url, data, onChangeUrl }: Props): React.ReactElement | null => {
  const handleChangePage = (_: any, page: number): void => {
    const parsedUrl = new URL(url, 'https://xivapi.com')
    parsedUrl.searchParams.set('page', String(page))
    onChangeUrl(`${parsedUrl.pathname}?${parsedUrl.searchParams.toString()}`)
  }

  if (data?.Pagination == null) {
    return null
  } else {
    const pagination = data.Pagination
    return (
      <Pagination
        count={pagination.PageTotal}
        defaultPage={pagination.Page}
        showFirstButton
        showLastButton
        siblingCount={2}
        onChange={handleChangePage}
        sx={{ display: 'flex', justifyContent: 'center', m: 1 }}
      />
    )
  }
}

export default XivPagination
