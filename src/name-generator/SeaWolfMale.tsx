import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import { roegadynDictionary } from './ffxiv-name-generator/data'
import { translate, Clan, Gender } from './ffxiv-name-generator'
import { formatName, conjugateRoegadyn, combineRoegadyn } from './ffxiv-name-generator/src/utils'
import { useTranslation } from '../i18n'

const WORDS = Object.keys(roegadynDictionary)

const SeaWolfMale = (): React.ReactElement => {
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
    <Section title={`${translate('clan', Clan.SeaWolf, locale)} (${translate('gender', Gender.Male, locale)})`}>
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
          <Typography>
            Words are conjugated according to the following rules (with exceptions):
          </Typography>
          <Box component='dl' sx={{
            borderLeftWidth: '2px',
            borderLeftStyle: 'solid',
            borderLeftColor: 'text.secondary',
            paddingLeft: 2,
            '& > dd:not(:last-child)': {
              mb: 1
            }
          }}>
            <Typography component='dt'><b>N → A</b>. To conjugate a noun to an adjective, add “‑i”.</Typography>
            <Typography component='dd'>“Ais” (Ice) + “i” = “Ais<b>i</b>” (Icy)</Typography>
            <Typography component='dt'><b>V → N</b>. To conjugate a verb to a noun, add “‑a”.</Typography>
            <Typography component='dd'>“Braen” (Break) + “a” = “Braen<b>a</b>” (Breaker)</Typography>
            <Typography component='dt'><b>V → A</b>. To conjugate a verb to an adjective, add “‑n”.</Typography>
            <Typography component='dd'>“Floer” (Lead) + “n” = “Floer<b>n</b>” (Leading)</Typography>
          </Box>
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
            The surname is made from the father’s name with “Syn” (Son) added to the end.<br />E.g. “Lyngmhol<b>syn</b>” = “Lyng” (Long) + “Mhol” (Eft) + “Syn” (Son)
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

export default SeaWolfMale
