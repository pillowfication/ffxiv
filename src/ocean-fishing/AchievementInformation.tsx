import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements, contentBonuses, ContentBonus } from './ffxiv-ocean-fishing/data'
import { cleanRequirement } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const contentBonusMap: Record<number, ContentBonus> = {
  2563: contentBonuses[13],
  2564: contentBonuses[14],
  2565: contentBonuses[15],
  2566: contentBonuses[16],
  2754: contentBonuses[20],
  2755: contentBonuses[21],
  2756: contentBonuses[22]
}
const teamcraftUrlMap: Record<number, string> = {
  2563: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#octopus-travelers',
  2564: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#maritime-dragonslayers',
  2565: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#jelled-together',
  2566: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#maritime-dragonslayers',
  2754: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#balloon-catchers',
  2755: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#crab-boat-crew',
  2756: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#sticking-it-to-the-manta'
}

const useStyles = makeStyles(theme => ({
  achievementIcon: {
    marginLeft: theme.spacing(1.5),
    verticalAlign: 'sub',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  subtitle: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      display: 'block'
    }
  }
}))

interface Props {
  achievement: number
  children?: React.ReactNode
}

const AchievementInformation = ({ achievement, children }: Props): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <Section
      title={
        <>
          {translate(locale, achievements[achievement], 'name')}
          <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
          <Typography display='inline' className={classes.subtitle}>
            {cleanRequirement(translate(locale, contentBonusMap[achievement], 'requirement'))}
            &nbsp;<Link href={teamcraftUrlMap[achievement]}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
          </Typography>
        </>
      }
    >
      {children}
    </Section>
  )
}

export default AchievementInformation
