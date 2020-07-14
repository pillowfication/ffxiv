import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

export default function Page (props) {
  const { title } = props

  return (
    <>
      <Typography variant='h1' gutterBottom>{title}</Typography>
      {props.children}
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}
