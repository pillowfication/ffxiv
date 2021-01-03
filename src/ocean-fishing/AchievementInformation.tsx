import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { achievements } from './gists/data/ocean-fish-data.json'
import { translate } from './utils'

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
  children?: React.ReactNode
}

const AchievementJellyfish = ({ achievement, subtitle, children }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const locale = router.locale

  return (
    <Section
      title={
        <>
          {translate(locale, achievements[achievement], 'name')}
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

export default AchievementJellyfish
