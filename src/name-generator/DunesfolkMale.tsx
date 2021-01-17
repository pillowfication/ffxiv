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
import { useTranslation } from '../i18n'

const DunesfolkMale = () => {
  const { t, i18n } = useTranslation('name-generator')
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
                label={t('phoneme', { label: 'A' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Male].B}
                value={phonemeB}
                onChange={setPhonemeB}
                label={t('phoneme', { label: 'B' })}
                placeholder={t('enterPhoneme')}
              />
            </Grid>
            <Grid item xs={12}>
              <NameAutocomplete
                options={PHONEMES[Clan.Dunesfolk][Gender.Male].AC}
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
            Lalafellen names are ruled by rhythm, repetition, and rhyming. Male Dunesfolk names follow the phoneme pattern <b>AAB CCB</b>.
          </Typography>
          <Typography paragraph>
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

export default DunesfolkMale
