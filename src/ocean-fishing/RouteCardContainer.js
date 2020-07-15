import React from 'react'
import Grid from '@material-ui/core/Grid'

const RouteCardContainer = (props) => {
  return (
    <Grid container spacing={2} {...props}>
      {props.children}
    </Grid>
  )
}

export default RouteCardContainer
