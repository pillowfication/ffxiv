import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Section from '../Section'
import ShadeButton from './ShadeButton'
import StainButton from './StainButton'
import Solution from './Solution'
import ChocoboCompanionPreview from './ChocoboCompanionPreview'
import {
  isValidStain,
  calculateFruits,
  translate as translateChocoboColor,
  Color,
  Shade,
  Stain,
  Fruit
} from './ffxiv-chocobo-color'
import { stains } from './ffxiv-chocobo-color/data'
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
  const [solution, setSolution] = useState<{ fromStain: Stain, toStain: Stain, fruits: Fruit[], resultantColor: Color } | null>(null)
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
    const solution = calculateFruits(currentStain, targetStain)
    setSolution({
      fromStain: currentStain,
      toStain: targetStain,
      fruits: solution.fruits,
      resultantColor: solution.color
    })
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
          <Box my={2}>
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
          </Box>
          <Box my={4} textAlign='center'>
            <ChocoboCompanionPreview color={targetStain.color} />
          </Box>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleClickCalculate}
          >
            {t('calculate')}
          </Button>
        </Grid>
        {solution && <Solution solution={solution} />}
      </Grid>
    </Section>
  )
}

export default Calculator
