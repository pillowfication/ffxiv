import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import UpcomingWeather from '../src/skywatcher/UpcomingWeather'
import Forecaster from '../src/skywatcher/Forecaster'
import About from '../src/skywatcher/About'
import { toTimeString } from '../src/utils'
import i18n from '../src/i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const Skywatcher = ({ t }: Props) => {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, (60000 - (now.getTime() * 1440 / 70) % 60000) / (1440 / 70))
    })()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Page title={t('title')}>
      <Typography paragraph>
        The time in Eorzea is <b>{now ? toTimeString(new Date(now.getTime() * 1440 / 70)) : '…'}</b>.
      </Typography>
      <Forecaster now={now} />
      <UpcomingWeather now={now} />
      <About />
    </Page>
  )
}

Skywatcher.getInitialProps = async () => ({
  namespacesRequired: ['common', 'skywatcher']
})

export default i18n.withTranslation('skywatcher')(Skywatcher)
