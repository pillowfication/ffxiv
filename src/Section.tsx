import React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  title?: React.ReactNode,
  children?: React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <section>
      {title && <Typography variant='h5' gutterBottom>{title}</Typography>}
      {children}
    </section>
  )
}

export default Section
