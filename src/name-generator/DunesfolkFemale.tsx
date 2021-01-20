import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import names from './names/data/names.json'
import { translate, Clan, Gender } from './names'
import { upperFirst, formatName } from './names/utils'
import { useTranslation } from '../i18n'

const DunesfolkFemale = () => {
  const { t, i18n } = useTranslation('name-generator')
  const [phonemeA, setPhonemeA] = useState('')
  const [phonemeB, setPhonemeB] = useState('')
  const name = formatName(phonemeA + phonemeA + phonemeB, phonemeA + phonemeB)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Dunesfolk, locale)} (${translate('gender', Gender.Female, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={names.LalafellDunesfolkFemale}
                value={phonemeA}
                onChange={setPhonemeA}
                label={t('phoneme', { label: 'A' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={names.LalafellDunesfolkFemaleLastName.map(upperFirst)}
                value={phonemeB}
                onChange={setPhonemeB}
                label={t('phoneme', { label: 'B' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Lalafellen names are ruled by rhythm, repetition, and rhyming. Female Dunesfolk names follow the phoneme pattern <b>AAB AB</b>.
          </Typography>
          <Typography paragraph>
            The <b>A</b> and <b>B</b> phonemes are one syllable.
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

export default DunesfolkFemale
