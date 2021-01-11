import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Page from '../src/Page'
import Section from '../src/Section'
import generateHyur from '../src/name-generator/generate-hyur'
import generateElezen from '../src/name-generator/generate-elezen'
import generateLalafell from '../src/name-generator/generate-lalafell'
import generateMiqote from '../src/name-generator/generate-miqote'
import generateRoegadyn from '../src/name-generator/generate-roegadyn'
import { randomElement, translate } from '../src/name-generator/utils'
import { Race, Clan, Gender } from '../src/name-generator/types'
import i18n from '../src/i18n'
import { I18n, TFunction } from 'next-i18next'

const RACES = [
  Race.Hyur,
  Race.Elezen,
  Race.Lalafell,
  Race.Miqote,
  Race.Roegadyn
]
const CLANS: { [key: string]: [Clan, Clan] } = {
  [Race.Hyur]: [Clan.Midlander, Clan.Highlander],
  [Race.Elezen]: [Clan.Wildwood, Clan.Duskwight],
  [Race.Lalafell]: [Clan.Plainsfolk, Clan.Dunesfolk],
  [Race.Miqote]: [Clan.SeekersOfTheSun, Clan.KeepersOfTheMoon],
  [Race.Roegadyn]: [Clan.SeaWolves, Clan.Hellsguard]
}
const GENDERS = [
  Gender.Male,
  Gender.Female
]
const GENERATORS = {
  [Race.Hyur]: generateHyur,
  [Race.Elezen]: generateElezen,
  [Race.Lalafell]: generateLalafell,
  [Race.Miqote]: generateMiqote,
  [Race.Roegadyn]: generateRoegadyn
}

const useStyles = makeStyles(theme => ({
  results: {
    padding: theme.spacing(4, 2),
    fontSize: '1.75em',
    '& > span': {
      display: 'block',
      margin: theme.spacing(1),
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }
}))

type Props = {
  t: TFunction,
  i18n: I18n
}

const NameGenerator = ({ t, i18n }: Props) => {
  const classes = useStyles()
  const [race, setRace] = useState<Race | null>(null)
  const [clan, setClan] = useState<Clan | null>(null)
  const [gender, setGender] = useState<Gender | null>(null)
  const [results, setResults] = useState<string[] | null>(null)
  const locale = i18n.language

  const handleSelectRace = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const race = event.target.value
    setRace(race === 'none' ? null : race as Race)
    setClan(null)
  }
  const handleSelectClan = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const clan = event.target.value
    setClan(clan === 'none' ? null : clan as Clan)
  }
  const handleSelectGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value
    setGender(gender === 'none' ? null : gender as Gender)
  }

  const handleClickGenerate = () => {
    const newResults = []
    for (let i = 0; i < 10; ++i) {
      const genRace = race || randomElement(RACES)
      const genClan = clan || randomElement(CLANS[genRace])
      const genGender = gender || randomElement(GENDERS)
      newResults.push(GENERATORS[genRace](genClan, genGender))
    }
    setResults(newResults)
  }

  return (
    <Page title={t('name-generator')}>
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>{t('race')}</InputLabel>
              <Select
                value={race || 'none'}
                onChange={handleSelectRace}
              >
                <MenuItem value='none'>{t('any-race')}</MenuItem>
                {RACES.map(race =>
                  <MenuItem key={race} value={race}>{translate('race', race, locale)}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>{t('clan')}</InputLabel>
              <Select
                value={clan || 'none'}
                onChange={handleSelectClan}
              >
                <MenuItem value='none'>{t('any-clan')}</MenuItem>
                {race && CLANS[race].map(clan =>
                  <MenuItem key={clan} value={clan}>{translate('clan', clan, locale)}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>{t('gender')}</InputLabel>
              <Select
                value={gender || 'none'}
                onChange={handleSelectGender}
              >
                <MenuItem value='none'>{t('any-gender')}</MenuItem>
                {GENDERS.map(gender =>
                  <MenuItem key={gender} value={gender}>{translate('gender', gender, locale)}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant='contained' color='primary' fullWidth onClick={handleClickGenerate}>Generate</Button>
          </Grid>
        </Grid>
        {results && (
          <div className={classes.results}>
            {results.map((result, index) => <span key={index}>{result}</span>)}
          </div>
        )}
      </Section>
    </Page>
  )
}

NameGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common', 'name-generator']
})

export default i18n.withTranslation('name-generator')(NameGenerator)
