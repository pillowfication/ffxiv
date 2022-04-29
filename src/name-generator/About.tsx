import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Section from '../Section'
import { charaMakeNames } from './ffxiv-name-generator/data'
import {
  getRaces,
  getClans,
  getGenders,
  translate,
  Race,
  Clan,
  Gender
} from './ffxiv-name-generator'

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
    [Gender.Male]: combinations(charaMakeNames.hyur_midlander_male, charaMakeNames.hyur_midlander_lastName),
    [Gender.Female]: combinations(charaMakeNames.hyur_midlander_female, charaMakeNames.hyur_midlander_lastName)
  },
  [Clan.Highlander]: {
    [Gender.Male]: combinations(charaMakeNames.hyur_highlander_male, charaMakeNames.hyur_highlander_lastName),
    [Gender.Female]: combinations(charaMakeNames.hyur_highlander_female, charaMakeNames.hyur_highlander_lastName)
  },
  [Clan.Wildwood]: {
    [Gender.Male]: combinations(charaMakeNames.elezen_male, charaMakeNames.elezen_wildwood_lastName),
    [Gender.Female]: combinations(charaMakeNames.elezen_female, charaMakeNames.elezen_wildwood_lastName)
  },
  [Clan.Duskwight]: {
    [Gender.Male]: combinations(charaMakeNames.elezen_male, charaMakeNames.elezen_duskwight_lastName),
    [Gender.Female]: combinations(charaMakeNames.elezen_female, charaMakeNames.elezen_duskwight_lastName)
  },
  [Clan.Plainsfolk]: {
    [Gender.Male]: combinations(charaMakeNames.lalafell_plainsfolk_firstNameStart, charaMakeNames.lalafell_plainsfolk_endOfNames, charaMakeNames.lalafell_plainsfolk_lastNameStart),
    [Gender.Female]: combinations(charaMakeNames.lalafell_plainsfolk_firstNameStart, charaMakeNames.lalafell_plainsfolk_endOfNames)
  },
  [Clan.Dunesfolk]: {
    [Gender.Male]: combinations(charaMakeNames.lalafell_dunesfolk_male, charaMakeNames.lalafell_dunesfolk_male_lastName, charaMakeNames.lalafell_dunesfolk_male),
    [Gender.Female]: combinations(charaMakeNames.lalafell_dunesfolk_female, charaMakeNames.lalafell_dunesfolk_female_lastName)
  },
  [Clan.SeekerOfTheSun]: {
    [Gender.Male]: combinations(charaMakeNames.miqote_seekerOfTheSun_male, charaMakeNames.miqote_seekerOfTheSun_male_lastName),
    [Gender.Female]: combinations(charaMakeNames.miqote_seekerOfTheSun_female, charaMakeNames.miqote_seekerOfTheSun_female_lastName)
  },
  [Clan.KeeperOfTheMoon]: {
    [Gender.Male]: combinations(charaMakeNames.miqote_keeperOfTheMoon_male, charaMakeNames.miqote_keeperOfTheMoon_lastName),
    [Gender.Female]: combinations(charaMakeNames.miqote_keeperOfTheMoon_female, charaMakeNames.miqote_keeperOfTheMoon_lastName)
  },
  [Clan.SeaWolf]: {
    [Gender.Male]: combinations(charaMakeNames.roegadyn_seaWolf_male, charaMakeNames.roegadyn_seaWolf_male_lastName),
    [Gender.Female]: combinations(charaMakeNames.roegadyn_seaWolf_female, charaMakeNames.roegadyn_seaWolf_female_lastName)
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: combinations(charaMakeNames.roegadyn_hellsguard_firstName, charaMakeNames.roegadyn_hellsguard_male_lastName),
    [Gender.Female]: combinations(charaMakeNames.roegadyn_hellsguard_firstName, charaMakeNames.roegadyn_hellsguard_female_lastName)
  },
  [Clan.Raen]: {
    [Gender.Male]: combinations(charaMakeNames.auRa_raen_male, charaMakeNames.auRa_raen_lastName),
    [Gender.Female]: combinations(charaMakeNames.auRa_raen_female, charaMakeNames.auRa_raen_lastName)
  },
  [Clan.Xaela]: {
    [Gender.Male]: combinations(charaMakeNames.auRa_xaela_male, charaMakeNames.auRa_xaela_lastName),
    [Gender.Female]: combinations(charaMakeNames.auRa_xaela_female, charaMakeNames.auRa_xaela_lastName)
  },
  [Clan.Helions]: {
    [Gender.Male]: combinations(charaMakeNames.hrothgar_helions_firstName, charaMakeNames.hrothgar_helions_lastName),
    [Gender.Female]: 0
  },
  [Clan.TheLost]: {
    [Gender.Male]: combinations(charaMakeNames.hrothgar_theLost_firstName, charaMakeNames.hrothgar_theLost_lastName),
    [Gender.Female]: 0
  },
  [Clan.Rava]: {
    [Gender.Male]: 0,
    [Gender.Female]: combinations(charaMakeNames.viera_firstName, charaMakeNames.viera_rava_lastName)
  },
  [Clan.Veena]: {
    [Gender.Male]: 0,
    [Gender.Female]: combinations(charaMakeNames.viera_firstName, charaMakeNames.viera_veena_lastName)
  }
}

const About = (): React.ReactElement => {
  const { t, i18n } = useTranslation('name-generator')
  const locale = i18n.language

  return (
    <Section title={t('about')}>
      <Typography paragraph>
        Naming conventions for the various races can be found here:
      </Typography>
      <Box sx={{ flexFlow: 'row wrap', mb: 2, textAlign: 'center' }}>
        {getRaces().map(race =>
          <Button
            key={race}
            variant='contained'
            href={CONVENTION_LINKS[race]}
            sx={{ m: 0.5 }}
          >
            <Typography>{translate('race', race, locale)}</Typography>
          </Button>
        )}
      </Box>
      <TableContainer sx={{ mb: 2 }}>
        <Table size='small' sx={{ width: 'auto', margin: '0 auto' }}>
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
