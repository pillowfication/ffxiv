import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Typography variant='h5' gutterBottom>{title}</Typography>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.node
}

export default Section
