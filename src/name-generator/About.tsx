import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Section from '../Section'
import { getClans, getGenders, translate } from './names'
import { Clan, Race, Gender } from './names/types'
import { FORENAMES as HYUR_FORENAMES, SURNAMES as HYUR_SURNAMES } from './names/generate-hyur'
import { FORENAMES as ELEZEN_FORENAMES, SURNAMES as ELEZEN_SURNAMES } from './names/generate-elezen'
import { PHONEMES as LALAFELL_PHONEMES } from './names/generate-lalafell'
import { FORENAMES as MIQOTE_FORENAMES, SURNAMES as MIQOTE_SURNAMES } from './names/generate-miqote'
import { FORENAMES as ROEGADYN_FORENAMES, SURNAMES as ROEGADYN_SURNAMES } from './names/generate-roegadyn'
import { FORENAMES as AU_RA_FORENAMES, SURNAMES as AU_RA_SURNAMES } from './names/generate-au-ra'
import { FORENAMES as HROTHGAR_FORENAMES, SURNAMES as HROTHGAR_SURNAMES } from './names/generate-hrothgar'
import { FORENAMES as VIERA_FORENAMES, SURNAMES as VIERA_SURNAMES } from './names/generate-viera'
import i18n from '../i18n'
import { I18n, TFunction } from 'next-i18next'

const CONVENTION_LINKS: [Race, string][] = [
  [Race.Hyur, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014929&viewfull=1#post1014929'],
  [Race.Elezen, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014928&viewfull=1#post1014928'],
  [Race.Lalafell, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014931&viewfull=1#post1014931'],
  [Race.Miqote, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014930&viewfull=1#post1014930'],
  [Race.Roegadyn, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014932&viewfull=1#post1014932'],
  [Race.AuRa, 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=3039574&viewfull=1#post3039574'],
  [Race.Hrothgar, 'https://forum.square-enix.com/ffxiv/threads/398566-Hrothgar-Naming-Conventions?p=5091422&viewfull=1#post5091422'],
  [Race.Viera, 'https://forum.square-enix.com/ffxiv/threads/398565-Viera-Naming-Conventions?p=5091421&viewfull=1#post5091421']
]

function getStatistic (race: Race, clan: Clan, gender: Gender) {
  const category = `${race},${clan},${gender}` as `${Race},${Clan},${Gender}`
  switch (category) {
    case `${Race.Hyur},${Clan.Midlander},${Gender.Male}`:
    case `${Race.Hyur},${Clan.Midlander},${Gender.Female}`:
    case `${Race.Hyur},${Clan.Highlander},${Gender.Male}`:
    case `${Race.Hyur},${Clan.Highlander},${Gender.Female}`:
      return HYUR_FORENAMES[clan][gender].length * HYUR_SURNAMES[clan].length
    case `${Race.Elezen},${Clan.Wildwood},${Gender.Male}`:
    case `${Race.Elezen},${Clan.Duskwight},${Gender.Male}`:
      return (ELEZEN_FORENAMES[gender].length + ELEZEN_SURNAMES[Clan.Wildwood].length + ELEZEN_SURNAMES[Clan.Duskwight].length) * ELEZEN_SURNAMES[clan].length
    case `${Race.Elezen},${Clan.Wildwood},${Gender.Female}`:
    case `${Race.Elezen},${Clan.Duskwight},${Gender.Female}`:
      return ELEZEN_FORENAMES[gender].length * ELEZEN_SURNAMES[clan].length
    case `${Race.Lalafell},${Clan.Plainsfolk},${Gender.Male}`:
      return LALAFELL_PHONEMES[clan].A.length * LALAFELL_PHONEMES[clan].B.length * LALAFELL_PHONEMES[clan].C.length
    case `${Race.Lalafell},${Clan.Plainsfolk},${Gender.Female}`:
      return LALAFELL_PHONEMES[clan].A.length * LALAFELL_PHONEMES[clan].B.length
    case `${Race.Lalafell},${Clan.Dunesfolk},${Gender.Male}`:
      return LALAFELL_PHONEMES[clan][gender].AC.length * LALAFELL_PHONEMES[clan][gender].B.length * LALAFELL_PHONEMES[clan][gender].AC.length
    case `${Race.Lalafell},${Clan.Dunesfolk},${Gender.Female}`:
      return LALAFELL_PHONEMES[clan][gender].A.length * LALAFELL_PHONEMES[clan][gender].B.length
    case `${Race.Miqote},${Clan.SeekersOfTheSun},${Gender.Male}`:
      return MIQOTE_FORENAMES[clan][gender].length * 2
    case `${Race.Miqote},${Clan.SeekersOfTheSun},${Gender.Female}`:
    case `${Race.Miqote},${Clan.KeepersOfTheMoon},${Gender.Male}`:
    case `${Race.Miqote},${Clan.KeepersOfTheMoon},${Gender.Female}`:
      return MIQOTE_FORENAMES[clan][gender].length * MIQOTE_SURNAMES[clan].length
    case `${Race.Roegadyn},${Clan.SeaWolves},${Gender.Male}`:
    case `${Race.Roegadyn},${Clan.SeaWolves},${Gender.Female}`:
      return ROEGADYN_FORENAMES[clan][gender].length * ROEGADYN_SURNAMES[clan][gender].length
    case `${Race.Roegadyn},${Clan.Hellsguard},${Gender.Male}`:
    case `${Race.Roegadyn},${Clan.Hellsguard},${Gender.Female}`:
      return ROEGADYN_FORENAMES[clan].length * ROEGADYN_SURNAMES[clan][gender].length
    case `${Race.AuRa},${Clan.Raen},${Gender.Male}`:
    case `${Race.AuRa},${Clan.Raen},${Gender.Female}`:
    case `${Race.AuRa},${Clan.Xaela},${Gender.Male}`:
    case `${Race.AuRa},${Clan.Xaela},${Gender.Female}`:
      return AU_RA_FORENAMES[clan][gender].length * AU_RA_SURNAMES[clan].length
    case `${Race.Hrothgar},${Clan.Helions},${Gender.Male}`:
    case `${Race.Hrothgar},${Clan.TheLost},${Gender.Male}`:
      return HROTHGAR_FORENAMES[clan].length * HROTHGAR_SURNAMES[clan].length
    case `${Race.Viera},${Clan.Rava},${Gender.Female}`:
    case `${Race.Viera},${Clan.Veena},${Gender.Female}`:
      return VIERA_FORENAMES.length * VIERA_SURNAMES[clan].length
    default:
      return 0
  }
}

const useStyles = makeStyles(theme => ({
  buttons: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      textTransform: 'none'
    }
  },
  statsTable: {
    width: 'initial',
    margin: '0 auto',
    '& td': {
      padding: `${theme.spacing(0.5, 4)} !important`
    }
  }
}))

type Props = {
  t: TFunction,
  i18n: I18n
}

const About = ({ t, i18n }: Props) => {
  const classes = useStyles()
  const locale = i18n.language

  return (
    <Section title='About'>
      <Typography paragraph>
        Naming conventions for the various races can be found here:
      </Typography>
      <div className={classes.buttons}>
        {CONVENTION_LINKS.map(([race, url]) =>
          <Button key={race} variant='contained' href={url}>
            <Typography>{translate('race', race, locale)}</Typography>
          </Button>
        )}
      </div>
      <Typography paragraph>
        Data were also grabbed from the <Link href='https://docs.google.com/document/d/15GgcCjifWlSSnx5vbJ22Kgc-AmgTMlrH8NVXW4DsQ4A/edit'>FFXIV Name Generator Full List</Link> Google Doc and this <Link href='https://www.reddit.com/r/ffxiv/comments/c6hsew/hrothgarviera_names_datamined/'>Hrothgar/Viera names datamined</Link> Reddit post.
      </Typography>
      <TableContainer>
        <Table size='small' className={classes.statsTable}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>{t('race')}</TableCell>
              <TableCell align='center'>{t('clan')}</TableCell>
              <TableCell align='center'>{t('gender')}</TableCell>
              <TableCell align='center'>{t('combinations')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CONVENTION_LINKS.flatMap(([race]) => {
              const rows = []
              const clans = getClans(race)
              const genders = getGenders(race)

              for (let i = 0; i < clans.length; ++i) {
                for (let j = 0; j < genders.length; ++j) {
                  rows.push(
                    <TableRow key={`${race},${clans[i]},${genders[j]}`}>
                      {i === 0 && j === 0 && (
                        <TableCell rowSpan={clans.length * genders.length} align='center'><Typography>{translate('race', race, locale)}</Typography></TableCell>
                      )}
                      {j === 0 && (
                        <TableCell rowSpan={genders.length} align='center'><Typography>{translate('clan', clans[i], locale)}</Typography></TableCell>
                      )}
                      <TableCell align='center'><Typography>{translate('gender', genders[j], locale)}</Typography></TableCell>
                      <TableCell align='right'><Typography>{getStatistic(race, clans[i], genders[j]).toLocaleString(locale)}</Typography></TableCell>
                    </TableRow>
                  )
                }
              }
              return rows
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  )
}

export default i18n.withTranslation('name-generator')(About)
