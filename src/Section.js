import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

export default function Section (props) {
  const { title } = props
  return (
    <section>
      {title && <Typography variant='h5' gutterBottom>{title}</Typography>}
      {props.children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.node
}
