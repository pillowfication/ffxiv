import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    marginBottom: theme.spacing(2)
  }
}))

type Props = {
  children?: React.ReactNode
}

const RouteCardContainer = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.cardsContainer}>
      {children}
    </Grid>
  )
}

export default RouteCardContainer
