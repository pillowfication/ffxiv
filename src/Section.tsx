import React from 'react'
import Typography from '@material-ui/core/Typography'

interface Props {
  title?: React.ReactNode
  children?: React.ReactNode
}

const Section = ({ title, children }: Props): React.ReactElement => {
  return (
    <section>
      {title !== undefined && <Typography variant='h5' gutterBottom>{title}</Typography>}
      {children}
    </section>
  )
}

export default Section
