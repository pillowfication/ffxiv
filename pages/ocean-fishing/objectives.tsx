import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import Page from '../../src/Page'
import Section from '../../src/Section'
import OceanFishIcon from '../../src/ocean-fishing/OceanFishIcon'
import { contentBonuses } from '../../src/ocean-fishing/ocean-fishing/data'
import { translate } from '../../src/utils'
import { useTranslation } from '../../src/i18n'

const CONTENT_BONUSES = Object.values(contentBonuses)
  .sort((a, b) => a.order - b.order)
  .filter(contentBonus => !/Target number adjusted for party size/.test(contentBonus.requirement_en))

const useStyles = makeStyles(theme => ({
  contentBonusesTable: {
    '& th': {
      padding: theme.spacing(1, 2)
    },
    '& td': {
      padding: theme.spacing(0.5, 1)
    }
  },
  check: {
    padding: 10
  },
  unchecked: {
    opacity: 0.4
  },
  checked: {
    color: 'green'
  },
  bonusContainer: {
    margin: theme.spacing(2, 0),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },
  bonus: {
    position: 'relative'
  },
  bonusPercentage: {
    position: 'absolute',
    left: 0,
    right: 0
  },
  bigger: {
    fontSize: '1.5em'
  },
  calculatorGoal: {
    textAlign: 'justify',
    textAlignLast: 'justify',
    '& > *': {
      display: 'inline-block'
    }
  }
}))

function getOverrides (contentBonusId: number) {
  switch (contentBonusId) {
    case 2: return [1]
    case 6: return [5]
    case 18: return [17]
    case 19: return [17, 18]
    default: return []
  }
}

function getOverriddenBy (contentBonusId: number) {
  switch (contentBonusId) {
    case 1: return [2]
    case 5: return [6]
    case 17: return [18, 19]
    case 18: return [19]
    default: return []
  }
}

function cleanObjective (objective: string) {
  return objective.replace(/<[^<>]*?\/>/g, '')
}

function cleanRequirement (requirement: string) {
  const str = requirement.replace(/^(Requirement:|Bedingung:|Condition :|達成条件：)/, '').trim()
  return str[0].toUpperCase() + str.slice(1)
}

const Objectives = () => {
  const classes = useStyles()
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

  const handleClickChecked = (contentBonusId: number) => {
    const newChecked = { ...checked, [contentBonusId]: !checked[contentBonusId]}
    if (newChecked[contentBonusId]) {
      getOverrides(contentBonusId).forEach(contentBonus => { newChecked[contentBonus] = true })
    } else {
      getOverriddenBy(contentBonusId).forEach(contentBonus => { newChecked[contentBonus] = false })
    }
    setChecked(newChecked)
  }

  const handleInputBasePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasePoints(Math.max(0, Number(event.target.value)))
  }

  return (
    <Page title={`${t('title')} - ${t('objectivesPage.title')}`}>
      <Section>
        <TableContainer>
          <Table className={classes.contentBonusesTable}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align='center'>{t('objectivesPage.objective')}</TableCell>
                <TableCell align='center'>{t('objectivesPage.requirement')}</TableCell>
                <TableCell align='center'>{t('objectivesPage.bonus')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CONTENT_BONUSES.map(contentBonus =>
                <TableRow key={contentBonus.id}>
                  <TableCell>
                    <IconButton
                      className={clsx(classes.check, checked[contentBonus.id] ? classes.checked : classes.unchecked)}
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
      <Section title={t('objectivesPage.calculator')}>
        <div className={classes.bonusContainer}>
          {filteredContentBonuses.length > 0
            ? filteredContentBonuses.map(contentBonus =>
              <div className={classes.bonus}>
                <OceanFishIcon key={contentBonus.id} type='content-bonus' id={contentBonus.id} />
                <br />
                <Typography variant='body2' className={classes.bonusPercentage}>{contentBonus.bonus - 100}%</Typography>
              </div>
            )
            : <Typography>No contentBonuses selected</Typography>
          }
          <Typography className={classes.bigger}>&nbsp;= {totalBonus - 100}%</Typography>
        </div>
        <Grid container justify='center'>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item xs={8}>
                <TextField
                  type='number'
                  fullWidth
                  label={t('objectivesPage.basePoints')}
                  InputProps={{
                    endAdornment: <InputAdornment position='end'>×{totalBonus}%</InputAdornment>
                  }}
                  value={basePoints}
                  onChange={handleInputBasePoints}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {Math.floor(basePoints * totalBonus / 100).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box m={2} />
              </Grid>
              <Grid item xs={8}>
                <div className={classes.calculatorGoal}>
                  <Typography>The Major-General</Typography>&nbsp;
                  <Typography component='div' align='right' className={classes.bigger}>
                    {Math.ceil(5000 / totalBonus * 100).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{totalBonus}%</Typography></Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {(5000).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <div className={classes.calculatorGoal}>
                  <Typography>Hybodus</Typography>&nbsp;
                  <Typography component='div' align='right' className={classes.bigger}>
                    {Math.ceil(10000 / totalBonus * 100).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{totalBonus}%</Typography></Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {(10000).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <div className={classes.calculatorGoal}>
                  <Typography>“Ocean Fisher”</Typography>&nbsp;
                  <Typography component='div' align='right' className={classes.bigger}>
                    {Math.ceil(16000 / totalBonus * 100).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{totalBonus}%</Typography></Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {(16000).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={8}>
                <div className={classes.calculatorGoal}>
                  <Typography>“Master of the Sea”</Typography>&nbsp;
                  <Typography component='div' align='right' className={classes.bigger}>
                    {Math.ceil(20000 / totalBonus * 100).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{totalBonus}%</Typography></Box>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {(20000).toLocaleString(locale)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </Page>
  )
}

Objectives.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default Objectives
