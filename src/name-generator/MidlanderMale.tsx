import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import names from './ffxiv-name-generator/data/chara-make-names.json'
import { translate, Clan, Gender } from './ffxiv-name-generator'
import { formatName } from './ffxiv-name-generator/src/utils'
import { useTranslation } from '../i18n'

const MidlanderMale = (): React.ReactElement => {
  const { t, i18n } = useTranslation('name-generator')
  const [forename, setForename] = useState('')
  const [surname, setSurname] = useState('')
  const name = formatName(forename, surname)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Midlander, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.HyurMidlanderMale}
            value={forename}
            onChange={setForename}
            label={t('forename')}
            placeholder={t('enterForename')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Forenames are similar to Anglo Saxon, Celtic, and Briton names of medieval Europe.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.HyurMidlanderLastName}
            value={surname}
            onChange={setSurname}
            label={t('surname')}
            placeholder={t('enterSurname')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Surnames are usually based off of professions (e.g. “Baker”), locations where families lived (e.g. “Moore”), or outward features (e.g. “Browne”).
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

export default MidlanderMale
