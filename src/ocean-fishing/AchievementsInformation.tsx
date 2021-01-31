import React from 'react'
import AchievementOctopodes from './AchievementOctopodes'
import AchievementSharks from './AchievementSharks'
import AchievementJellyfish from './AchievementJellyfish'
import AchievementSeadragons from './AchievementSeadragons'
import AchievementBalloons from './AchievementBalloons'
import AchievementCrabs from './AchievementCrabs'
import AchievementMantas from './AchievementMantas'
import { DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'

type Props = {
  route: DestTime
}

const AchievementsInformation = ({ route }: Props) => {
  return (
    <>
      {maps.ACHIEVEMENTS_MAP[route].map(achievement => {
        switch (achievement) {
          case 2563: return <AchievementOctopodes key={achievement} route={route} />
          case 2564: return <AchievementSharks key={achievement} route={route} />
          case 2565: return <AchievementJellyfish key={achievement} route={route} />
          case 2566: return <AchievementSeadragons key={achievement} route={route} />
          case 2754: return <AchievementBalloons key={achievement} route={route} />
          case 2755: return <AchievementCrabs key={achievement} route={route} />
          case 2756: return <AchievementMantas key={achievement} route={route} />
          default: return null
        }
      })}
    </>
  )
}

export default React.memo(AchievementsInformation)
