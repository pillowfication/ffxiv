import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements, contentBonuses } from './ffxiv-ocean-fishing/data'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const contentBonusMap: Record<number, number> = {
  2563: 13,
  2564: 14,
  2565: 15,
  2566: 16,
  2754: 20,
  2755: 21,
  2756: 22
}

function cleanRequirement (requirement: string) {
  const str = requirement.replace(/^(Requirement:|Bedingung:|Condition :|達成条件：)/, '').trim()
  return str[0].toUpperCase() + str.slice(1)
}

const useStyles = makeStyles(theme => ({
  achievementIcon: {
    marginLeft: theme.spacing(1.5),
    verticalAlign: 'sub'
  },
  subtitle: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      display: 'block'
    }
  }
}))

type Props = {
  achievement: number,
  children?: React.ReactNode
}

const AchievementInformation = ({ achievement, children }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <Section
      title={
        <>
          {translate(locale, achievements[achievement], 'name')}
          <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
          <Typography display='inline' className={classes.subtitle}>{cleanRequirement(translate(locale, contentBonuses[contentBonusMap[achievement]], 'requirement'))}</Typography>
        </>
      }
    >
      {children}
    </Section>
  )
}

export default AchievementInformation
