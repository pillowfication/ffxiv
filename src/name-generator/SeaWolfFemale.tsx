import React, { useState } from 'react'
import { makeStyles, alpha } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import { roegadynDictionary } from './ffxiv-name-generator/data'
import { translate, Clan, Gender } from './ffxiv-name-generator'
import { formatName, conjugateRoegadyn, combineRoegadyn } from './ffxiv-name-generator/src/utils'
import { useTranslation } from '../i18n'

const WORDS = Object.keys(roegadynDictionary)

const useStyles = makeStyles(theme => ({
  rules: {
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: alpha(theme.palette.text.secondary, 0.5),
    paddingLeft: theme.spacing(2),
    '& > dd:not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  }
}))

const SeaWolfFemale = (): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation('name-generator')
  const [forenameWord1, setForenameWord1] = useState('')
  const [forenameWord2, setForenameWord2] = useState('')
  const [surnameWord1, setSurnameWord1] = useState('')
  const [surnameWord2, setSurnameWord2] = useState('')
  const forename = combineRoegadyn(conjugateRoegadyn(forenameWord1, 'A'), conjugateRoegadyn(forenameWord2, 'N'))
  const surname = (surnameWord1 !== '' || surnameWord2 !== '')
    ? combineRoegadyn(conjugateRoegadyn(surnameWord1, 'A'), conjugateRoegadyn(surnameWord2, 'N'), 'Syn')
    : ''
  const name = formatName(forename, surname)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.SeaWolf, locale)} (${translate('gender', Gender.Female, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={WORDS}
                getOptionLabel={word => {
                  const entry = roegadynDictionary[word]
                  return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word
                }}
                value={forenameWord1}
                onChange={setForenameWord1}
                label='Forename - First word'
                placeholder='Enter a Roegadyn word'
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={WORDS}
                getOptionLabel={word => {
                  const entry = roegadynDictionary[word]
                  return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word
                }}
                value={forenameWord2}
                onChange={setForenameWord2}
                label='Forename - Second word'
                placeholder='Enter a Roegadyn word'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Sea Wolf forenames are formed from two words of the ancient Roegadyn language, typically a descriptor and a noun.<br />E.g. “Merlwyb” = “Merl” (Sea) + “Wyb” (Woman)
          </Typography>
          <Typography paragraph>
            For female forenames, the second word is almost always one of the following:
          </Typography>
          <ul>
            <Typography component='li'>“Swys” (Sister)</Typography>
            <Typography component='li'>“Thota” (Daughter)</Typography>
            <Typography component='li'>“Wyda” (Willow)</Typography>
            <Typography component='li'>“Geim” (Jewel)</Typography>
            <Typography component='li'>“Wyb” (Woman)</Typography>
            <Typography component='li'>“Rael” (Doe)</Typography>
            <Typography component='li'>“Lona” (Gatherer)</Typography>
            <Typography component='li'>“Bhyda” (Bride)</Typography>
          </ul>
          <Typography>
            Words are conjugated according to the following rules (with exceptions):
          </Typography>
          <dl className={classes.rules}>
            <Typography component='dt'><b>N → A</b>. To conjugate a noun to an adjective, add “‑i”.</Typography>
            <Typography component='dd'>“Ais” (Ice) + “i” = “Ais<b>i</b>” (Icy)</Typography>
            <Typography component='dt'><b>V → N</b>. To conjugate a verb to a noun, add “‑a”.</Typography>
            <Typography component='dd'>“Braen” (Break) + “a” = “Braen<b>a</b>” (Breaker)</Typography>
            <Typography component='dt'><b>V → A</b>. To conjugate a verb to an adjective, add “‑n”.</Typography>
            <Typography component='dd'>“Floer” (Lead) + “n” = “Floer<b>n</b>” (Leading)</Typography>
          </dl>
          <Typography paragraph>
            When combining words, double letters are collapsed.<br />E.g. “Rost<b>n</b>” (Rusty) + “<b>N</b>oez” (Walnut) = “Rost<b>n</b>oez” (Rusty Walnut)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={WORDS}
                getOptionLabel={word => {
                  const entry = roegadynDictionary[word]
                  return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word
                }}
                value={surnameWord1}
                onChange={setSurnameWord1}
                label='Surname - First word'
                placeholder='Enter a Roegadyn word'
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={WORDS}
                getOptionLabel={word => {
                  const entry = roegadynDictionary[word]
                  return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word
                }}
                value={surnameWord2}
                onChange={setSurnameWord2}
                label='Surname - Second word'
                placeholder='Enter a Roegadyn word'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The surname is made from the father’s name with “Wyn” (Daughter) added to the end.<br />E.g. “Hezzfyr<b>syn</b>” = “Hezz” (Hot) + “Fyr” (Fire) + “Wyn” (Daughter)
          </Typography>
          <Typography paragraph>
            Although both “Thota” and “Wyn” mean “Daughter”, “Thota” is used exclusively for forenames, and “Wyn” is exclusively for surnames.
          </Typography>
        </Grid>
        {name.length > 0 && (
          <Grid item xs={12}>
            <MyNameIs name={name} />
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default SeaWolfFemale
