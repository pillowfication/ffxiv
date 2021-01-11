import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements } from './gists/data/ocean-fish-data.json'
import { translate } from './utils'
import i18n from '../i18n'
import { I18n, TFunction } from 'next-i18next'

const SUBTITLES = {
  2563: 'catch-octopus',
  2564: 'catch-shark',
  2565: 'catch-jellyfish',
  2566: 'catch-seadragon',
  2754: 'catch-balloon',
  2755: 'catch-crab',
  2756: 'catch-manta'
}

const useStyles = makeStyles((theme) => ({
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
  children?: React.ReactNode,
  t: TFunction,
  i18n: I18n
}

const AchievementInformation = ({ achievement, children, t, i18n }: Props) => {
  const classes = useStyles()

  return (
    <Section
      title={
        <>
          {translate(i18n.language, achievements[achievement], 'name')}
          <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
          <Typography display='inline' className={classes.subtitle}>{t(SUBTITLES[achievement])}</Typography>
        </>
      }
    >
      {children}
    </Section>
  )
}

export default i18n.withTranslation('ocean-fishing')(AchievementInformation)
