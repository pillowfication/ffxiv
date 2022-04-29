import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import Page from '../../src/Page'
import Section from '../../src/Section'
import NavigationBar from '../../src/ocean-fishing/NavigationBar'
import OceanFishIcon from '../../src/ocean-fishing/OceanFishIcon'
import { contentBonuses, achievements } from '../../src/ocean-fishing/ffxiv-ocean-fishing/data'
import { cleanObjective, cleanRequirement } from '../../src/ocean-fishing/utils'
import translate from '../../src/translate'

const CONTENT_BONUSES = Object.values(contentBonuses)
  .sort((a, b) => a.order - b.order)
  .filter(contentBonus => contentBonus.id !== 0 && !contentBonus.requirement.en.includes('Target number adjusted for party size'))

function getOverrides (contentBonusId: number): number[] {
  switch (contentBonusId) {
    case 2: return [1]
    case 6: return [5]
    case 18: return [17]
    case 19: return [17, 18]
    default: return []
  }
}

function getOverriddenBy (contentBonusId: number): number[] {
  switch (contentBonusId) {
    case 1: return [2]
    case 5: return [6]
    case 17: return [18, 19]
    case 18: return [19]
    default: return []
  }
}

interface CalculatorRowProps {
  achievement: number
  requiredPoints: number
  totalBonus: number
}

const CalculatorRow = ({ achievement, requiredPoints, totalBonus }: CalculatorRowProps): React.ReactElement => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <>
      <Grid item xs={8}>
        <div className={'classes.calculatorGoal'}>
          <Typography className={'classes.reward'}>{translate(locale, achievements[achievement], 'reward')}</Typography>&nbsp;
          <Typography component='div' align='right' className={'classes.bigger'}>
            {Math.ceil(requiredPoints / totalBonus * 100).toLocaleString(locale)}
            <Box display='inline' ml={2}><Typography display='inline'>×{totalBonus}%</Typography></Box>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Typography className={'classes.bigger'}>= {requiredPoints.toLocaleString(locale)}</Typography>
      </Grid>
    </>
  )
}

const Bonuses = (): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [basePoints, setBasePoints] = useState(5000)
  const [checked, setChecked] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    5: true,
    7: true,
    8: true,
    9: true,
    17: true,
    18: true,
    19: true
  })
  const locale = i18n.language

  const filteredContentBonuses = CONTENT_BONUSES
    .filter(contentBonus => {
      if (!checked[contentBonus.id]) return false
      for (const override of getOverriddenBy(contentBonus.id)) {
        if (checked[override]) return false
      }
      return true
    })
  const totalBonus = filteredContentBonuses.reduce((acc, curr) => acc + curr.bonus - 100, 0) + 100

  const handleClickChecked = (contentBonusId: number): void => {
    const newChecked = { ...checked, [contentBonusId]: !checked[contentBonusId] }
    if (newChecked[contentBonusId]) {
      getOverrides(contentBonusId).forEach(contentBonus => { newChecked[contentBonus] = true })
    } else {
      getOverriddenBy(contentBonusId).forEach(contentBonus => { newChecked[contentBonus] = false })
    }
    setChecked(newChecked)
  }

  const handleInputBasePoints = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBasePoints(Math.max(0, Number(event.target.value)))
  }

  return (
    <Page title={[t('_title'), t('bonusesPage._title')]}>
      <NavigationBar page='/bonuses' />
      <Section>
        <TableContainer>
          <Table className={'classes.contentBonusesTable'}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align='center'>{t('bonusesPage.objective')}</TableCell>
                <TableCell align='center'>{t('bonusesPage.requirement')}</TableCell>
                <TableCell align='center'>{t('bonusesPage.bonus')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CONTENT_BONUSES.map(contentBonus =>
                <TableRow key={contentBonus.id}>
                  <TableCell>
                    <IconButton
                      className={'clsx(classes.check, checked[contentBonus.id] ? classes.checked : classes.unchecked)'}
                      onClick={handleClickChecked.bind(null, contentBonus.id)}
                    >
                      <CheckIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <OceanFishIcon type='content-bonus' id={contentBonus.id} />
                  </TableCell>
                  <TableCell>
                    <Typography>{cleanObjective(translate(locale, contentBonus, 'objective'))}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{cleanRequirement(translate(locale, contentBonus, 'requirement'))}</Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography>{contentBonus.bonus - 100}%</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
      <Section title={t('bonusesPage.calculator')}>
        <div className={'classes.bonusContainer'}>
          {filteredContentBonuses.length > 0
            ? filteredContentBonuses.map(contentBonus =>
              <div key={contentBonus.id} className={'classes.bonus'}>
                <OceanFishIcon type='content-bonus' id={contentBonus.id} />
                <br />
                <Typography variant='body2' className={'classes.bonusPercentage'}>{contentBonus.bonus - 100}%</Typography>
              </div>
            )
            : <Typography>No contentBonuses selected</Typography>
          }
          <Typography className={'classes.bigger'}>&nbsp;= {totalBonus - 100}%</Typography>
        </div>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item xs={8}>
                <TextField
                  type='number'
                  fullWidth
                  label={t('bonusesPage.basePoints')}
                  InputProps={{
                    endAdornment: <InputAdornment position='end'>×{totalBonus}%</InputAdornment>
                  }}
                  value={basePoints}
                  onChange={handleInputBasePoints}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className={'classes.bigger'}>= {Math.floor(basePoints * totalBonus / 100).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box m={2} />
              </Grid>
              <CalculatorRow achievement={2560} requiredPoints={5000} totalBonus={totalBonus} />
              <CalculatorRow achievement={2561} requiredPoints={10000} totalBonus={totalBonus} />
              <CalculatorRow achievement={2562} requiredPoints={16000} totalBonus={totalBonus} />
              <CalculatorRow achievement={2759} requiredPoints={20000} totalBonus={totalBonus} />
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'ocean-fishing']))
    }
  }
}

export default Bonuses
