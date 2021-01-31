import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import { fishes } from './ffxiv-ocean-fishing/data'
import { StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

type Props = {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationIntuition = ({ stopTimes }: Props) => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <RouteCardContainer>
      {stopTimes.map((stopTime, index) =>
        <RouteCard key={stopTime} index={index} stopTime={stopTime}>
          <CardContent>
            <BaitList baitGroups={
              [
                maps.SPECTRAL_FISH_MAP[stopTime[0]],
                maps.GREEN_FISH_MAP[stopTime[0]],
                getBlueFish(stopTimes[2] as any)[index]
              ]
                .filter(x => x)
                .map(fishId => ({
                  header: translate(locale, fishes[fishId], 'name'),
                  baitGroupProps: getBaitGroup(fishId)
                }))
            } />
          </CardContent>
        </RouteCard>
      )}
    </RouteCardContainer>
  )
}

export default RouteInformationIntuition
