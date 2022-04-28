import React from 'react'
import CardContent from '@mui/material/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { Fish } from './ffxiv-ocean-fishing/data'
import { Stop, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationIntuition = ({ stopTimes }: Props): React.ReactElement => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <StopCardsContainer>
      {stopTimes.map((stopTime, index) => {
        const fishes: Array<Fish | 'hr'> = [
          maps.SPECTRAL_FISH_MAP[stopTime[0] as Stop],
          maps.GREEN_FISH_MAP[stopTime[0] as Stop]
        ]

        const blueFish = getBlueFish(stopTime)
        if (blueFish !== null) {
          fishes.push('hr', blueFish)
        }

        return (
          <StopCard key={stopTime} index={index} stopTime={stopTime}>
            <CardContent>
              <BaitList baitGroups={fishes.map(fish =>
                fish === 'hr'
                  ? 'hr'
                  : {
                      header: translate(locale, fish, 'name'),
                      baitGroupProps: getBaitGroup(fish)
                    }
              )} />
            </CardContent>
          </StopCard>
        )
      })}
    </StopCardsContainer>
  )
}

export default RouteInformationIntuition
