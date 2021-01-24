import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
import { objectives } from '../../src/ocean-fishing/ocean-fishing/data'
import { translate } from '../../src/ocean-fishing/utils'
import { useTranslation } from '../../src/i18n'

const useStyles = makeStyles(theme => ({
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

function getOverrides (objectiveId: string) {
  switch (objectiveId) {
    case 'big-fish-in-a-small-pond': return ['small-fish-in-a-big-pond']
    case 'teach-a-man-to-fish': return ['give-a-man-a-fish']
    case 'ocean-fishing-enthusiast': return ['ocean-fishing-amateur']
    case 'ocean-fishing-fanatic': return ['ocean-fishing-amateur', 'ocean-fishing-enthusiast']
    default: return []
  }
}

function getOverriddenBy (objectiveId: string) {
  switch (objectiveId) {
    case 'small-fish-in-a-big-pond': return ['big-fish-in-a-small-pond']
    case 'give-a-man-a-fish': return ['teach-a-man-to-fish']
    case 'ocean-fishing-amateur': return ['ocean-fishing-enthusiast', 'ocean-fishing-fanatic']
    case 'ocean-fishing-enthusiast': return ['ocean-fishing-fanatic']
    default: return []
  }
}

const Objectives = () => {
  const classes = useStyles()
  const [basePoints, setBasePoints] = useState(5000)
  const [checked, setChecked] = useState<Record<string, boolean>>({
    'small-fish-in-a-big-pond': true,
    'big-fish-in-a-small-pond': true,
    'a-rare-catch': true,
    'give-a-man-a-fish': true,
    'bream-team-galadion-bay': true,
    'bream-team-southern-strait-of-merlthor': true,
    'bream-team-northern-strait-of-merlthor': true,
    'ocean-fishing-amateur': true,
    'ocean-fishing-enthusiast': true,
    'ocean-fishing-fanatic': true
  })
  const { t, i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  const filteredObjectives = Object.values(objectives)
    .filter(objective => {
      if (!checked[objective.id]) {
        return false
      }
      for (const override of getOverriddenBy(objective.id)) {
        if (checked[override]) {
          return false
        }
      }
      return true
    })
  const totalBonus = filteredObjectives.reduce((acc, curr) => acc + curr.bonus, 0)
  const totalBonusPercentage = (100 + totalBonus) / 100

  const handleClickChecked = (objectiveId: string) => {
    const newChecked = { ...checked, [objectiveId]: !checked[objectiveId]}
    if (newChecked[objectiveId]) {
      getOverrides(objectiveId).forEach(objective => { newChecked[objective] = true })
    } else {
      getOverriddenBy(objectiveId).forEach(objective => { newChecked[objective] = false })
    }
    setChecked(newChecked)
  }

  const handleInputBasePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasePoints(Math.max(0, Number(event.target.value)))
  }

  return (
    <Page title={`${t('title')} - ${t('objectivesPage.title')}`}>
      <Section>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align='center'>Objective</TableCell>
              <TableCell align='center'>Description</TableCell>
              <TableCell align='center'>Bonus</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(objectives).map(objective =>
              <TableRow key={objective.id}>
                <TableCell>
                  <IconButton
                    className={clsx(classes.check, checked[objective.id] ? classes.checked : classes.unchecked)}
                    onClick={handleClickChecked.bind(null, objective.id)}
                  >
                    <CheckIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <OceanFishIcon type='objective' id={objective.id} />
                </TableCell>
                <TableCell>
                  <Typography>{translate(locale, objective, 'name')}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{translate(locale, objective, 'description')}</Typography>
                </TableCell>
                <TableCell>
                  <Typography align='center'>{objective.bonus}%</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Section>
      <Section title={t('objectivesPage.calculator')}>
        <div className={classes.bonusContainer}>
          {filteredObjectives.length > 0
            ? filteredObjectives.map(objective =>
              <div className={classes.bonus}>
                <OceanFishIcon key={objective.id} type='objective' id={objective.id} />
                <br />
                <Typography variant='body2' className={classes.bonusPercentage}>{objective.bonus}%</Typography>
              </div>
            )
            : <Typography>No objectives selected</Typography>
          }
          <Typography className={classes.bigger}>&nbsp;= {totalBonus}%</Typography>
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
                    endAdornment: <InputAdornment position='end'>×{100 + totalBonus}%</InputAdornment>
                  }}
                  value={basePoints}
                  onChange={handleInputBasePoints}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.bigger}>= {Math.floor(basePoints * totalBonusPercentage).toLocaleString(locale)}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box m={2} />
              </Grid>
              <Grid item xs={8}>
                <div className={classes.calculatorGoal}>
                  <Typography>The Major-General</Typography>&nbsp;
                  <Typography component='div' align='right' className={classes.bigger}>
                    {Math.ceil(5000 / totalBonusPercentage).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{100 + totalBonus}%</Typography></Box>
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
                    {Math.ceil(10000 / totalBonusPercentage).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{100 + totalBonus}%</Typography></Box>
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
                    {Math.ceil(16000 / totalBonusPercentage).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{100 + totalBonus}%</Typography></Box>
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
                    {Math.ceil(20000 / totalBonusPercentage).toLocaleString(locale)}
                    <Box display='inline' ml={2}><Typography display='inline'>×{100 + totalBonus}%</Typography></Box>
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
