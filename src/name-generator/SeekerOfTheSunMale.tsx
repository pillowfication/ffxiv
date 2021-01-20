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

const SeekersOfTheSunMale = () => {
  const { t, i18n } = useTranslation('name-generator')
  const [forename, setForename] = useState('')
  const [tribe, setTribe] = useState('')
  const [surname, setSurname] = useState('')
  const name = `${upperFirst([tribe, forename].filter(x => x).join('\''))} ${upperFirst(surname)}`.trim()
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.SeekerOfTheSun, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.MiqoteSunMale.map(name => upperFirst(name.replace(/^.*'/, '')))}
            value={forename}
            onChange={setForename}
            label={t('forename')}
            placeholder={t('enterForename')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Most males have simple names. The extra “h”s (e.g. “B<b>h</b>ee”, “Kuz<b>h</b>”, and “Pa<b>h</b>sh”) represent a slight hissing/spitting sound that are pronounced by the Miqo’te and ignored by the other races.
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
            options={['Tia', 'Nunh']}
            value={surname}
            onChange={setSurname}
            label={t('position')}
            placeholder={t('enterPosition')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Males do not have surnames, as they are considered origins of new families, and will instead take on “Tia” or “Nunh” denoting their position within the tribe. All are born as tia and may challenge a tribe nunh to battle. If the tia is victorious, he takes the nunh’s title and position as tribe breeding male. A ratio of one nunh per fifty females is average. A tia may also become a nunh by leaving to start his own tribe.
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

export default SeekersOfTheSunMale
