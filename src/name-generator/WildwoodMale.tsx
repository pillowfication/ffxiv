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

const WildwoodMale = (): React.ReactElement => {
  const { t, i18n } = useTranslation('name-generator')
  const [forename, setForename] = useState('')
  const [surname, setSurname] = useState('')
  const name = formatName(forename, surname)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.Wildwood, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.ElezenMale}
            value={forename}
            onChange={setForename}
            label={t('forename')}
            placeholder={t('enterForename')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Spelling and phonetic rules are similar to those of French. Male forenames are longer than female forenames and end in an “x” (e.g. “‑loix” and “‑aux”) or a silent “t” (e.g. “‑mont” and “‑geant”).
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.ElezenWildwoodLastName}
            value={surname}
            onChange={setSurname}
            label={t('surname')}
            placeholder={t('enterSurname')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Duskwight and Wildwood Elezen will never share surnames.
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

export default WildwoodMale
