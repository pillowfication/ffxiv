import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import names from './names/data/names.json'
import { translate, Clan, Gender } from './names'
import { upperFirst, formatName } from './names/utils'

import miqoteSuffixes from './names/data/miqote-suffixes.json'
import { useTranslation } from '../i18n'

const ORDINALS = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  5: 'fifth',
  6: 'sixth',
  7: 'seventh',
  8: 'eighth',
  9: 'ninth',
  10: 'tenth'
}

function translateSuffix (suffix: string) {
  return `${ORDINALS[miqoteSuffixes[suffix]]} son`
}

const KeeperOfTheMoonMale = () => {
  const { t, i18n } = useTranslation('name-generator')
  const [forename, setForename] = useState('')
  const [suffix, setSuffix] = useState('')
  const [surname, setSurname] = useState('')
  const name = formatName([forename, suffix].filter(x => x).join('\''), surname)
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.KeeperOfTheMoon, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.MiqoteMoonMale.map(name => upperFirst(name.replace(/'.*$/, '')))}
            value={forename}
            onChange={setForename}
            label={t('forename')}
            placeholder={t('enterForename')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            As part of a highly matriarchal society, the male’s forename is taken from his mother.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={Object.keys(miqoteSuffixes)}
            sort={(a, b) => miqoteSuffixes[a] - miqoteSuffixes[b]}
            getOptionLabel={suffix => `${upperFirst(suffix)} - ${translateSuffix(suffix)}`}
            value={suffix}
            onChange={setSuffix}
            label={t('suffix')}
            placeholder={t('enterSuffix')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The forename is always proceeded by a suffix indicating their birth order, although it is rare for families to have more than two or three sons.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={names.MiqoteMoonLastname}
            value={surname}
            onChange={setSurname}
            label={t('surname')}
            placeholder={t('enterSurname')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The surname is also taken from the mother.
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

export default KeeperOfTheMoonMale
