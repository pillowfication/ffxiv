import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements } from './gists/data/ocean-fish-data.json'
import { translate } from './utils'
import i18n from '../../i18n'
import { I18n } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  achievementIcon: {
    marginLeft: theme.spacing(2),
    verticalAlign: 'sub'
  },
  subtitle: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      display: 'block'
    }
  }
}))

type Props = {
  achievement: number,
  subtitle?: string,
  children?: React.ReactNode,
  i18n: I18n
}

const AchievementInformation = ({ achievement, subtitle, children, i18n }: Props) => {
  const classes = useStyles()

  return (
    <Section
      title={
        <>
          {translate(i18n.language, achievements[achievement], 'name')}
          <OceanFishIcon type='achievement' id={achievement} className={classes.achievementIcon} />
          {subtitle &&
            <Typography display='inline' className={classes.subtitle}>{subtitle}</Typography>}
        </>
      }
    >
      {children}
    </Section>
  )
}

export default i18n.withTranslation('ocean-fishing')(AchievementInformation)
