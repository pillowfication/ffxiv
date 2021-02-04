import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Section from '../Section'
import names from './ffxiv-name-generator/data/chara-make-names.json'
import {
  getRaces,
  getClans,
  getGenders,
  translate,
  Race,
  Clan,
  Gender
} from './ffxiv-name-generator'
import { useTranslation } from '../i18n'

const CONVENTION_LINKS: Record<Race, string> = {
  [Race.Hyur]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014929&viewfull=1#post1014929',
  [Race.Elezen]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014928&viewfull=1#post1014928',
  [Race.Lalafell]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014931&viewfull=1#post1014931',
  [Race.Miqote]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014930&viewfull=1#post1014930',
  [Race.Roegadyn]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014932&viewfull=1#post1014932',
  [Race.AuRa]: 'https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=3039574&viewfull=1#post3039574',
  [Race.Hrothgar]: 'https://forum.square-enix.com/ffxiv/threads/398566-Hrothgar-Naming-Conventions?p=5091422&viewfull=1#post5091422',
  [Race.Viera]: 'https://forum.square-enix.com/ffxiv/threads/398565-Viera-Naming-Conventions?p=5091421&viewfull=1#post5091421'
}

function combinations (...arrays: any[][]): number {
  return arrays
    .map(array => array.filter((name, index) => name !== array[index + 1]))
    .reduce((acc, curr) => acc * curr.length, 1)
}

const STATISTICS: Record<Clan, Record<Gender, number>> = {
  [Clan.Midlander]: {
    [Gender.Male]: combinations(names.HyurMidlanderMale, names.HyurMidlanderLastName),
    [Gender.Female]: combinations(names.HyurMidlanderFemale, names.HyurMidlanderLastName)
  },
  [Clan.Highlander]: {
    [Gender.Male]: combinations(names.HyurHighlanderMale, names.HyurHighlanderLastName),
    [Gender.Female]: combinations(names.HyurHighlanderFemale, names.HyurHighlanderLastName)
  },
  [Clan.Wildwood]: {
    [Gender.Male]: combinations(names.ElezenMale, names.ElezenWildwoodLastName),
    [Gender.Female]: combinations(names.ElezenFemale, names.ElezenWildwoodLastName)
  },
  [Clan.Duskwight]: {
    [Gender.Male]: combinations(names.ElezenMale, names.ElezenDuskwightLastName),
    [Gender.Female]: combinations(names.ElezenFemale, names.ElezenDuskwightLastName)
  },
  [Clan.Plainsfolk]: {
    [Gender.Male]: combinations(names.LalafellPlainsfolkFirstNameStart, names.LalafellPlainsfolkEndOfNames, names.LalafellPlainsfolkLastNameStart),
    [Gender.Female]: combinations(names.LalafellPlainsfolkFirstNameStart, names.LalafellPlainsfolkEndOfNames)
  },
  [Clan.Dunesfolk]: {
    [Gender.Male]: combinations(names.LalafellDunesfolkMale, names.LalafellDunesfolkMaleLastName, names.LalafellDunesfolkMale),
    [Gender.Female]: combinations(names.LalafellDunesfolkFemale, names.LalafellDunesfolkFemaleLastName)
  },
  [Clan.SeekerOfTheSun]: {
    [Gender.Male]: combinations(names.MiqoteSunMale, names.MiqoteSunMaleLastName),
    [Gender.Female]: combinations(names.MiqoteSunFemale, names.MiqoteSunFemaleLastName)
  },
  [Clan.KeeperOfTheMoon]: {
    [Gender.Male]: combinations(names.MiqoteMoonMale, names.MiqoteMoonLastname),
    [Gender.Female]: combinations(names.MiqoteMoonFemale, names.MiqoteMoonLastname)
  },
  [Clan.SeaWolf]: {
    [Gender.Male]: combinations(names.RoegadynSeaWolfMale, names.RoegadynSeaWolfMaleLastName),
    [Gender.Female]: combinations(names.RoegadynSeaWolfFemale, names.RoegadynSeaWolfFemaleLastName)
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: combinations(names.RoegadynHellsguardFirstName, names.RoegadynHellsguardMaleLastName),
    [Gender.Female]: combinations(names.RoegadynHellsguardFirstName, names.RoegadynHellsguardFemaleLastName)
  },
  [Clan.Raen]: {
    [Gender.Male]: combinations(names.AuRaRaenMale, names.AuRaRaenLastName),
    [Gender.Female]: combinations(names.AuRaRaenFemale, names.AuRaRaenLastName)
  },
  [Clan.Xaela]: {
    [Gender.Male]: combinations(names.AuRaXaelaMale, names.AuRaXaelaLastName),
    [Gender.Female]: combinations(names.AuRaXaelaFemale, names.AuRaXaelaLastName)
  },
  [Clan.Helions]: {
    [Gender.Male]: combinations(names.HrothgarHellionsFirstName, names.HrothgarHellionsLastName),
    [Gender.Female]: 0
  },
  [Clan.TheLost]: {
    [Gender.Male]: combinations(names.HrothgarLostFirstName, names.HrothgarLostLastName),
    [Gender.Female]: 0
  },
  [Clan.Rava]: {
    [Gender.Male]: 0,
    [Gender.Female]: combinations(names.VieraFirstName, names.VieraRavaLastName)
  },
  [Clan.Veena]: {
    [Gender.Male]: 0,
    [Gender.Female]: combinations(names.VieraFirstName, names.VieraVeenaLastName)
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
    margin: theme.spacing(2, 'auto'),
    '& td': {
      padding: `${theme.spacing(0.5, 4)} !important`
    }
  }
}))

const About = (): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('name-generator')
  const locale = i18n.language

  return (
    <Section title={t('about')}>
      <Typography paragraph>
        Naming conventions for the various races can be found here:
      </Typography>
      <div className={classes.buttons}>
        {getRaces().map(race =>
          <Button key={race} variant='contained' href={CONVENTION_LINKS[race]}>
            <Typography>{translate('race', race, locale)}</Typography>
          </Button>
        )}
      </div>
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
            {getRaces().map(race => {
              const rows: React.ReactElement[] = []
              const clans = getClans(race)
              const genders = getGenders(race)

              for (let i = 0; i < clans.length; ++i) {
                for (let j = 0; j < genders.length; ++j) {
                  rows.push(
                    <TableRow key={`${race},${clans[i]},${genders[j]}`}>
                      {i === 0 && j === 0 && (
                        <TableCell rowSpan={clans.length * genders.length} align='center'>
                          <Typography>{translate('race', race, locale)}</Typography>
                        </TableCell>
                      )}
                      {j === 0 && (
                        <TableCell rowSpan={genders.length} align='center'>
                          <Typography>{translate('clan', clans[i], locale)}</Typography>
                        </TableCell>
                      )}
                      <TableCell align='center'>
                        <Typography>{translate('gender', genders[j], locale)}</Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography>{STATISTICS[clans[i]][genders[j]].toLocaleString(locale)}</Typography>
                      </TableCell>
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

export default About
