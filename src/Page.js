import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Page = ({ title, children }) => {
  return (
    <>
      <Typography variant='h1' gutterBottom>{title}</Typography>
      {children}
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}

export default Page
