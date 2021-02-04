import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import StainButton from './StainButton'
import FruitIcon from './FruitIcon'
import FruitsList from './FruitsList'
import { calculateFruits, Stain, Color, Fruit } from './ffxiv-chocobo-color'
import { stains, fruits } from './ffxiv-chocobo-color/data'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  fruitsCount: {
    display: 'inline-block',
    width: '2.5em',
    textAlign: 'right',
    fontSize: '1.25em',
    overflow: 'visible'
  },
  fruitsIcon: {
    margin: theme.spacing(0, 1)
  },
  arrowForward: {
    margin: theme.spacing(0, 1),
    verticalAlign: 'text-bottom'
  }
}))

interface Props {
  solution: {
    fromStain: Stain
    toStain: Stain
    fruits: Fruit[]
    resultantColor: Color
  }
}

const Solution = ({ solution }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('chocobo-color')
  const locale = i18n.language

  return (
    <>
      <Grid item xs={12} md={10} lg={8}>
        <Box textAlign='center'>
          <Typography>
            {translate(locale, solution.fromStain, 'name')} <StainButton inline stain={solution.fromStain} />
            <ArrowForwardIcon className={classes.arrowForward} />
            {translate(locale, solution.toStain, 'name')} <StainButton inline stain={solution.toStain} />
          </Typography>
        </Box>
      </Grid>
      {solution.fruits.length > calculateFruits(stains[36], solution.toStain).fruits.length && (
        <Grid item xs={12} md={10} lg={8}>
          <Alert severity='info'>You might save fruits by resetting to Desert Yellow with a Han Lemon first.</Alert>
        </Grid>
      )}
      <Grid item xs={12} md={10} lg={8}>
        <Typography variant='h6' gutterBottom>{t('fruitsNeeded')}</Typography>
        {solution.fruits.length > 0
          ? [
              Fruit.XelphatolApple,
              Fruit.MamookPear,
              Fruit.OGhomoroBerries,
              Fruit.DomanPlum,
              Fruit.Valfruit,
              Fruit.CieldalaesPineapple
            ]
              .map(fruit => ({ fruit, count: solution.fruits.filter(solFruit => solFruit === fruit).length }))
              .filter(({ count }) => count > 0)
              .map(({ fruit, count }) => (
                <div key={fruit}>
                  <Typography component='span' className={classes.fruitsCount}>{count}×</Typography>
                  <FruitIcon fruit={fruit} className={classes.fruitsIcon} />
                  <Typography component='span'>{translate(locale, fruits[fruit], 'name')}</Typography>
                </div>
              ))
          : <Typography>{t('noFruits')}</Typography>
        }
      </Grid>
      {solution.fruits.length > 0 && (
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant='h6' gutterBottom>{t('fruitsOrder')}</Typography>
          <FruitsList fruits={solution.fruits} />
        </Grid>
      )}
    </>
  )
}

export default Solution
