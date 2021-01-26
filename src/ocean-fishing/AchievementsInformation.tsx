import React from 'react'
import AchievementOctopodes from './AchievementOctopodes'
import AchievementSharks from './AchievementSharks'
import AchievementJellyfish from './AchievementJellyfish'
import AchievementSeadragons from './AchievementSeadragons'
import AchievementBalloons from './AchievementBalloons'
import AchievementCrabs from './AchievementCrabs'
import AchievementMantas from './AchievementMantas'
import { DestinationStopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'

type Props = {
  selectedRoute: DestinationStopTime
}

const AchievementsInformation = ({ selectedRoute }: Props) => {
  return (
    <>
      {maps.ACHIEVEMENTS_MAP[selectedRoute].map(achievement => {
        switch (achievement) {
          case 2563: return <AchievementOctopodes key={achievement} selectedRoute={selectedRoute} />
          case 2564: return <AchievementSharks key={achievement} selectedRoute={selectedRoute} />
          case 2565: return <AchievementJellyfish key={achievement} selectedRoute={selectedRoute} />
          case 2566: return <AchievementSeadragons key={achievement} selectedRoute={selectedRoute} />
          case 2754: return <AchievementBalloons key={achievement} selectedRoute={selectedRoute} />
          case 2755: return <AchievementCrabs key={achievement} selectedRoute={selectedRoute} />
          case 2756: return <AchievementMantas key={achievement} selectedRoute={selectedRoute} />
          default: return null
        }
      })}
    </>
  )
}

export default React.memo(AchievementsInformation)
