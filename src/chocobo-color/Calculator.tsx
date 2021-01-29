import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Section from '../Section'
import ShadeButton from './ShadeButton'
import StainButton from './StainButton'
import FruitIcon from './FruitIcon'
import FruitsList from './FruitsList'
import {
  isValidStain,
  calculateFruitsDistance,
  translate as translateChocoboColor,
  Color,
  Shade,
  Stain,
  Fruit
} from './ffxiv-chocobo-color'
import { stains, fruits } from './ffxiv-chocobo-color/data'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const SHADES_MAP: Record<number, { shade: Shade, color: Color }> = {
  2: {
    shade: Shade.White,
    color: new Color(255, 255, 255)
  },
  4: {
    shade: Shade.Red,
    color: new Color(210, 28, 28)
  },
  5: {
    shade: Shade.Brown,
    color: new Color(170, 114, 54)
  },
  6: {
    shade: Shade.Yellow,
    color: new Color(240, 220, 44)
  },
  7: {
    shade: Shade.Green,
    color: new Color(150, 204, 60)
  },
  8: {
    shade: Shade.Blue,
    color: new Color(74, 130, 243)
  },
  9: {
    shade: Shade.Purple,
    color: new Color(166, 98, 228)
  }
}

const VALID_STAINS = Object.values(stains)
  .filter(isValidStain)
  .sort((a, b) => a.shade - b.shade || a.shadeIndex - b.shadeIndex)

const useStyles = makeStyles(theme => ({
  transitionArrow: {
    display: 'block',
    margin: theme.spacing(2, 'auto'),
    fontSize: '2em'
  },
  palette: {
    margin: theme.spacing(2, 0)
  },
  fruitsCount: {
    display: 'inline-block',
    width: '2.5em',
    textAlign: 'right',
    fontSize: '1.25em',
    overflow: 'visible'
  },
  fruitsIcon: {
    margin: theme.spacing(0, 1)
  }
}))

const Calculator = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('chocobo-color')
  const [currentStain, setCurrentStain] = useState(stains[36]) // Desert Yellow
  const [targetStain, setTargetStain] = useState(VALID_STAINS[0])
  const [solution, setSolution] = useState<Fruit[] | null>(null)
  const locale = i18n.language

  const handleInputCurrentStain = (_: any, stain: Stain) => {
    stain && setCurrentStain(stain)
  }

  const handleInputTargetStain = (_: any, stain: Stain) => {
    stain && setTargetStain(stain)
  }

  const handleSelectShade = (shadeId: number) => {
    setTargetStain(VALID_STAINS.find(stain => stain.shade === shadeId))
  }

  const handleSelectStain = (stain: Stain) => {
    setTargetStain(stain)
  }

  const handleClickCalculate = () => {
    setSolution(calculateFruitsDistance(currentStain.color, targetStain.color, 3))
  }

  return (
    <Section title={t('calculator')}>
      <Grid container justify='center' spacing={4}>
        <Grid item xs={12} md={10} lg={8}>
          <Autocomplete
            options={VALID_STAINS}
            groupBy={option => translateChocoboColor('shade', SHADES_MAP[option.shade].shade, locale)}
            getOptionLabel={option => translate(locale, option, 'name')}
            renderInput={params => <TextField {...params} variant='filled' label={t('currentStain')} />}
            value={currentStain}
            onChange={handleInputCurrentStain}
          />
          <ArrowDownwardIcon className={classes.transitionArrow} />
          <Autocomplete
            options={VALID_STAINS}
            groupBy={option => translateChocoboColor('shade', SHADES_MAP[option.shade].shade, locale)}
            getOptionLabel={option => translate(locale, option, 'name')}
            renderInput={params => <TextField {...params} variant='filled' label={t('targetStain')} />}
            value={targetStain}
            onChange={handleInputTargetStain}
          />
          <div className={classes.palette}>
            {Object.entries(SHADES_MAP)
              .sort((a, b) => Number(a[0]) - Number(b[0]))
              .map(([shadeId, val]) => (
                <ShadeButton
                  key={shadeId}
                  shade={val.shade}
                  color={val.color}
                  selected={targetStain.shade === Number(shadeId)}
                  onClick={handleSelectShade.bind(null, Number(shadeId))}
                />
              ))
            }
            <br />
            {VALID_STAINS
              .filter(stain => stain.shade === targetStain.shade)
              .map(stain => (
                <StainButton
                  key={stain.id}
                  stain={stain}
                  selected={targetStain.id === stain.id}
                  onClick={handleSelectStain.bind(null, stain)}
                />
              ))
            }
          </div>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleClickCalculate}
          >
            {t('calculate')}
          </Button>
        </Grid>
        {solution && (
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant='h6' gutterBottom>Fruits needed</Typography>
            {solution.length > 0
              ? [
                  Fruit.XelphatolApple,
                  Fruit.MamookPear,
                  Fruit.OGhomoroBerries,
                  Fruit.DomanPlum,
                  Fruit.Valfruit,
                  Fruit.CieldalaesPineapple
                ]
                  .map(fruit => ({ fruit, count: solution.filter(solFruit => solFruit === fruit).length }))
                  .filter(({ count }) => count > 0)
                  .map(({ fruit, count }) => (
                    <div>
                      <Typography component='span' className={classes.fruitsCount}>×{count}</Typography>
                      <FruitIcon fruit={fruit} className={classes.fruitsIcon} />
                      <Typography component='span'>{translate(locale, fruits[fruit], 'name')}</Typography>
                    </div>
                  ))
              : <Typography>No fruits</Typography>
            }
          </Grid>
        )}
        {solution && solution.length > 0 && (
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant='h6' gutterBottom>Feeding order</Typography>
            <FruitsList fruits={solution} />
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default Calculator
