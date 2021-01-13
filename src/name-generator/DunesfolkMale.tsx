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

const DunesfolkMale = ({ i18n }: Props) => {
  const [phonemeA, setPhonemeA] = useState('')
  const [phonemeB, setPhonemeB] = useState('')
  const [phonemeC, setPhonemeC] = useState('')
  const name = `${upperFirst(phonemeA + phonemeA + phonemeB)} ${upperFirst(phonemeC + phonemeC + phonemeB)}`.trim()
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Dunesfolk, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Male].AC}
                value={phonemeA}
                onChange={setPhonemeA}
                label='Phoneme A'
                placeholder='Enter a phoneme'
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Male].B}
                value={phonemeB}
                onChange={setPhonemeB}
                label='Phoneme B'
                placeholder='Enter a phoneme'
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Male].AC}
                value={phonemeC}
                onChange={setPhonemeC}
                label='Phoneme C'
                placeholder='Enter a phoneme'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Male Dunesfolk names follow the phoneme pattern <b>AAB CCB</b>.
          </Typography>
          <Typography>
            The <b>A</b> and <b>C</b> phonemes are one syllable, and the <b>B</b> phoneme is two.
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

export default i18n.withTranslation('name-generator')(DunesfolkMale)
