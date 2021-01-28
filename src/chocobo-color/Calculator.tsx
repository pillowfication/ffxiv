import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Section from '../Section'
import ShadeButton from './ShadeButton'
import StainButton from './StainButton'
import { translate as translateChocoboColor } from './ffxiv-chocobo-color'
import { stains, Stain, Shade, Color } from './ffxiv-chocobo-color/data'
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
    shade: Shade.Orange,
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
  },
}

const VALID_STAINS = Object.values(stains)
  .sort((a, b) => a.shade - b.shade || a.shadeIndex - b.shadeIndex)
  .filter(stain => SHADES_MAP[stain.shade])

const Calculator = () => {
  const { t, i18n } = useTranslation('chocobo-color')
  const [currentStain, setCurrentStain] = useState(stains[36]) // Desert Yellow
  const [targetStain, setTargetStain] = useState(VALID_STAINS[0])
  const locale = i18n.language

  const handleInputCurrentStain = (_: any, value: Stain) => {
    setCurrentStain(value)
  }

  const handleInputTargetStain = (_: any, value: Stain) => {
    setTargetStain(value)
  }

  const handleSelectShade = (shadeId: number) => {
    setTargetStain(VALID_STAINS.find(stain => stain.shade === shadeId))
  }

  const handleSelectStain = (stain: Stain) => {
    setTargetStain(stain)
  }

  return (
    <Section title={t('calculator')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            options={VALID_STAINS}
            groupBy={option => translateChocoboColor('shade', SHADES_MAP[option.shade].shade, locale)}
            getOptionLabel={option => translate(locale, option, 'name')}
            renderInput={params => <TextField {...params} variant='filled' label={t('currentStain')} />}
            value={currentStain}
            onChange={handleInputCurrentStain}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            options={VALID_STAINS}
            groupBy={option => translateChocoboColor('shade', SHADES_MAP[option.shade].shade, locale)}
            getOptionLabel={option => translate(locale, option, 'name')}
            renderInput={params => <TextField {...params} variant='filled' label={t('targetStain')} />}
            value={targetStain}
            onChange={handleInputTargetStain}
          />
        </Grid>
        <Grid item xs={12}>
          {Object.entries(SHADES_MAP)
            .sort((a, b) => Number(a[0]) - Number(b[0]))
            .map(([shadeId, val]) => (
              <ShadeButton
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
                stain={stain}
                selected={targetStain.id === stain.id}
                onClick={handleSelectStain.bind(null, stain)}
              />
            ))
          }
        </Grid>
      </Grid>
    </Section>
  )
}

export default Calculator
