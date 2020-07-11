import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function RouteCardContainer (props) {
  return (
    <Grid container spacing={2} {...props}>
      {props.children}
    </Grid>
  )
}
