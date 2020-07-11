import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function Gutters (props) {
  return (
    <Grid container {...props}>
      <Grid item md={1} />
      <Grid item xs={12} md={10}>
        {props.children}
      </Grid>
      <Grid item md={1} />
    </Grid>
  )
}
