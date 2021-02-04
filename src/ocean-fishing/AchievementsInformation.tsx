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

interface Props {
  route: DestTime
}

const AchievementsInformation = ({ route }: Props): React.ReactElement => {
  return (
    <>
      {maps.ACHIEVEMENTS_MAP[route].map(achievement => {
        switch (achievement.id) {
          case 2563: return <AchievementOctopodes key={achievement.id} route={route} />
          case 2564: return <AchievementSharks key={achievement.id} route={route} />
          case 2565: return <AchievementJellyfish key={achievement.id} route={route} />
          case 2566: return <AchievementSeadragons key={achievement.id} route={route} />
          case 2754: return <AchievementBalloons key={achievement.id} route={route} />
          case 2755: return <AchievementCrabs key={achievement.id} route={route} />
          case 2756: return <AchievementMantas key={achievement.id} route={route} />
          default: return null
        }
      })}
    </>
  )
}

export default React.memo(AchievementsInformation)
