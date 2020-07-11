import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles((theme) => ({
  routeCard: {
    height: '100%'
  }
}))

export default function RouteCard (props) {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={4}>
      <Card variant='outlined' className={classes.routeCard}>
        {props.children}
      </Card>
    </Grid>
  )
}
