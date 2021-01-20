import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import names from './names/data/names.json'
import { translate } from './names'
import { upperFirst, formatName } from './names/utils'
import { Clan, Gender } from './names/types'
import { useTranslation } from '../i18n'

const PlainsfolkMale = () => {
  const { t, i18n } = useTranslation('name-generator')
  const [phonemeA, setPhonemeA] = useState('')
  const [phonemeB, setPhonemeB] = useState('')
  const [phonemeC, setPhonemeC] = useState('')
  const name = formatName(phonemeA + phonemeB, phonemeC + phonemeB)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Plainsfolk, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={names.LalafellPlainsfolkFirstNameStart}
                value={phonemeA}
                onChange={setPhonemeA}
                label={t('phoneme', { label: 'A' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={names.LalafellPlainsfolkEndOfNames.map(upperFirst)}
                value={phonemeB}
                onChange={setPhonemeB}
                label={t('phoneme', { label: 'B' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={names.LalafellPlainsfolkLastNameStart}
                value={phonemeC}
                onChange={setPhonemeC}
                label={t('phoneme', { label: 'C' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Lalafellen names are ruled by rhythm, repetition, and rhyming. Male Plainsfolk names follow the phoneme pattern <b>AB CB</b>.
          </Typography>
          <Typography paragraph>
            The <b>A</b> and <b>C</b> phonemes do not have to rhyme, and the <b>A</b>, <b>B</b>, and <b>C</b> phonemes are usually limited to one or two syllables.
          </Typography>
        </Grid>
        {name && (
          <Grid item xs={12}>
            <MyNameIs name={name} />
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default PlainsfolkMale
