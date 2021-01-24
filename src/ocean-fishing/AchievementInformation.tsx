import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements } from './ocean-fishing/data'
import { translate } from './utils'
import { useTranslation } from '../i18n'

const SUBTITLES = {
  2563: 'achievementInfo.octopus',
  2564: 'achievementInfo.shark',
  2565: 'achievementInfo.jellyfish',
  2566: 'achievementInfo.seadragon',
  2754: 'achievementInfo.balloon',
  2755: 'achievementInfo.crab',
  2756: 'achievementInfo.manta'
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
  const { t, i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <Section
      title={
        <>
          {translate(locale, achievements[achievement], 'name')}
          <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
          <Typography display='inline' className={classes.subtitle}>{t(SUBTITLES[achievement])}</Typography>
        </>
      }
    >
      {children}
    </Section>
  )
}

export default AchievementInformation
