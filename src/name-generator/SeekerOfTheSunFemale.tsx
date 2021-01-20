import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import names from './names/data/names.json'
import { translate, Clan, Gender } from './names'
import { upperFirst } from './names/utils'

import miqoteTribes from './names/data/miqote-tribes.json'
import { useTranslation } from '../i18n'

const SeekersOfTheSunFemale = () => {
  const { t, i18n } = useTranslation('name-generator')
  const [forename, setForename] = useState('')
  const [tribe, setTribe] = useState('')
  const [surname, setSurname] = useState('')
  const name = `${upperFirst([tribe, forename].filter(x => x).join('\''))} ${upperFirst(surname)}`.trim()
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.SeekerOfTheSun, locale)} (${translate('gender', Gender.Female, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.MiqoteSunFemale.map(name => upperFirst(name.replace(/^.*'/, '')))}
            value={forename}
            onChange={setForename}
            label={t('forename')}
            placeholder={t('enterForename')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The extra “h”s (e.g. “B<b>h</b>ee”, “Kuz<b>h</b>”, and “Pa<b>h</b>sh”) represent a slight hissing/spitting sound that are pronounced by the Miqo’te and ignored by the other races.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={Object.keys(miqoteTribes)}
            getOptionLabel={tribe => `${tribe} - ${miqoteTribes[tribe]}`}
            value={tribe}
            onChange={setTribe}
            label={t('tribe')}
            placeholder={t('enterTribe')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The forename is always preceeded by a letter representing their tribe. Tribe names are based on traditional beastkin, scalekin, or cloudkin totems said to protect the tribe.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.MiqoteSunFemaleLastName}
            value={surname}
            onChange={setSurname}
            label={t('surname')}
            placeholder={t('enterSurname')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The female’s surname is taken from the breeding male who sired her.
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

export default SeekersOfTheSunFemale
