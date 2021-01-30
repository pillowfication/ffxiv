import React, { useEffect, useState } from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import UpcomingWeather from '../src/skywatcher/UpcomingWeather'
import Forecaster from '../src/skywatcher/Forecaster'
import Algorithm from '../src/skywatcher/Algorithm'
import { formatTime } from '../src/utils'
import { useTranslation } from '../src/i18n'

const Skywatcher = () => {
  const { t } = useTranslation('skywatcher')
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    let interval: NodeJS.Timeout
    ;(function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(() => {
        interval = setTimeout(loop, (60000 - (now.getTime() * 1440 / 70) % 60000) / (1440 / 70))
      }, 0)
    })()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Page
      title={t('title')}
      description='Schedule for weather in Eorzea and forecaster for upcoming weather patterns.'
    >
      <Typography paragraph>
        The time in Eorzea is <b><NoSsr>{formatTime(new Date(now.getTime() * (1440 / 70)))}</NoSsr></b>.
      </Typography>
      <ul>
        <Typography component='li'>
          Some places have multiple possible weather rates depending on certain conditions. For example, Amh Araeng will always be Everlasting Light until a certain point in the MSQ.
        </Typography>
        <Typography component='li'>
          Certain special weathers such as Tension will replace the predicted weather depending on certain conditions.
        </Typography>
        <Typography component='li'>
          The weathers associated with The <em>Endeavor</em> only apply to cutscenes and have no apparent correlation with the weathers experienced during the voyage.
        </Typography>
      </ul>
      <Forecaster now={now} />
      <UpcomingWeather now={now} />
      <Algorithm />
    </Page>
  )
}

Skywatcher.getInitialProps = async () => ({
  namespacesRequired: ['common', 'skywatcher']
})

export default Skywatcher
