import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import NameAutocomplete from './NameAutocomplete'
import MyNameIs from './MyNameIs'
import { translate } from './names'
import { upperFirst } from './names/utils'
import { Clan, Gender } from './names/types'
import { FORENAMES, SURNAMES } from './names/generate-miqote'
import miqoteSuffixes from './names/data/miqote-suffixes.json'
import i18n from '../i18n'
import { I18n, TFunction } from 'next-i18next'

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
  return `${upperFirst(ORDINALS[miqoteSuffixes[suffix]])} Son`
}

type Props = {
  t: TFunction,
  i18n: I18n
}

const KeepersOfTheMoonMale = ({ i18n }: Props) => {
  const [forename, setForename] = useState('')
  const [suffix, setSuffix] = useState('')
  const [surname, setSurname] = useState('')
  const name = `${upperFirst([forename, suffix].filter(x => x).join('’'))} ${upperFirst(surname)}`.trim()
  const locale = i18n.language

  return (
    <Section title={`${translate('clan', Clan.KeepersOfTheMoon, locale)} (${translate('gender', Gender.Male, locale)})`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={
              FORENAMES[Clan.KeepersOfTheMoon][Gender.Male]
                .map(name => upperFirst(name.replace(/’.*$/, '')))
                .filter((name, index, array) => array.indexOf(name, index + 1) === -1)
            }
            value={forename}
            onChange={setForename}
            label='Forename'
            placeholder='Enter a forename'
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
            label='Suffix'
            placeholder='Enter a suffix'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            The forename is always proceeded by a suffix indicating their birth order, although it is rare for families to have more than two or three sons.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <NameAutocomplete
            options={
              SURNAMES[Clan.KeepersOfTheMoon]
                .filter((name, index, array) => array.indexOf(name, index + 1) === -1)
            }
            value={surname}
            onChange={setSurname}
            label='Surname'
            placeholder='Enter a surname'
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

export default i18n.withTranslation('name-generator')(KeepersOfTheMoonMale)
