import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import { translate } from './names'
import { upperFirst } from './names/utils'
import { Clan, Gender } from './names/types'
import { PHONEMES } from './names/generate-lalafell'
import i18n from '../i18n'
import { I18n, TFunction } from 'next-i18next'

type Props = {
  t: TFunction,
  i18n: I18n
}

const DunesfolkFemale = ({ i18n }: Props) => {
  const [phonemeA, setPhonemeA] = useState('')
  const [phonemeB, setPhonemeB] = useState('')
  const name = `${upperFirst(phonemeA + phonemeA + phonemeB)} ${upperFirst(phonemeA + phonemeB)}`.trim()
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Dunesfolk, locale)} (${translate('gender', Gender.Female, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Female].A}
                value={phonemeA}
                onChange={setPhonemeA}
                label='Phoneme A'
                placeholder='Enter a phoneme'
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Female].B}
                value={phonemeB}
                onChange={setPhonemeB}
                label='Phoneme B'
                placeholder='Enter a phoneme'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Female Dunesfolk names follow the phoneme pattern <b>AAB AB</b>.
          </Typography>
          <Typography>
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

export default i18n.withTranslation('name-generator')(DunesfolkFemale)
