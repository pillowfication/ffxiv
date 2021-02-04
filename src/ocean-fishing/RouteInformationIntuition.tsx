import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { Fish } from './ffxiv-ocean-fishing/data'
import { Stop, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationIntuition = ({ stopTimes }: Props): React.ReactElement => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <StopCardsContainer>
      {stopTimes.map((stopTime, index) =>
        <StopCard key={stopTime} index={index} stopTime={stopTime}>
          <CardContent>
            <BaitList baitGroups={
              [
                maps.SPECTRAL_FISH_MAP[stopTime[0] as Stop],
                maps.GREEN_FISH_MAP[stopTime[0] as Stop],
                getBlueFish(stopTime)
              ]
                .filter(fish => fish !== null)
                .map((fish: Fish) => ({
                  header: translate(locale, fish, 'name'),
                  baitGroupProps: getBaitGroup(fish)
                }))
            } />
          </CardContent>
        </StopCard>
      )}
    </StopCardsContainer>
  )
}

export default RouteInformationIntuition
