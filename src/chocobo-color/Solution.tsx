import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StainButton from './StainButton'
import FruitIcon from './FruitIcon'
import FruitsList from './FruitsList'
import { calculateFruits, Stain, Color, Fruit } from './ffxiv-chocobo-color'
import { stains, fruits } from './ffxiv-chocobo-color/data'
import translate from '../translate'
import { useTranslation } from '../i18n'

interface Props {
  solution: {
    fromStain: Stain
    toStain: Stain
    fruits: Fruit[]
    resultantColor: Color
  }
}

const Solution = ({ solution }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('chocobo-color')
  const locale = i18n.language

  return (
    <>
      <Grid item xs={12} md={10} lg={8}>
        <Grid container alignItems='center' justifyContent='center'>
          <StainButton inline stain={solution.fromStain} />
          <Typography>&nbsp;{translate(locale, solution.fromStain, 'name')}</Typography>
          <ArrowForwardIcon sx={{ mx: 1 }} />
          <StainButton inline stain={solution.toStain} />
          <Typography>&nbsp;{translate(locale, solution.toStain, 'name')}</Typography>
        </Grid>
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
              .map(fruit => ({
                fruit,
                count: solution.fruits.filter(solutionFruit => solutionFruit === fruit).length
              }))
              .filter(({ count }) => count > 0)
              .map(({ fruit, count }) => (
                <div key={fruit}>
                  <Typography component='span' sx={{
                    display: 'inline-block',
                    width: '2.5em',
                    fontSize: '1.25em',
                    textAlign: 'right'
                  }}>
                    {count}×
                  </Typography>
                  <Box display='inline-block' mx={1}>
                    <FruitIcon fruit={fruit} />
                  </Box>
                  <Typography component='span'>{translate(locale, fruits[fruit], 'name')}</Typography>
                </div>
              ))
          : <Typography><em>{t('noFruits')}</em></Typography>
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
