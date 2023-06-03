import React from 'react'
import AchievementOctopodes from './AchievementOctopodes'
import AchievementSharks from './AchievementSharks'
import AchievementJellyfish from './AchievementJellyfish'
import AchievementSeadragons from './AchievementSeadragons'
import AchievementBalloons from './AchievementBalloons'
import AchievementCrabs from './AchievementCrabs'
import AchievementMantas from './AchievementMantas'
import { Destination, Time } from './ffxiv-ocean-fishing'
import * as maps from './maps'

interface Props {
    destination: Destination
    time: Time
}

const AchievementsInformation = ({ destination, time }: Props): React.ReactElement => {
    return (
        <>
            {maps.ACHIEVEMENTS_MAP[destination][time].map(achievement => {
                switch (achievement.id) {
                    case 2563: return <AchievementOctopodes key={achievement.id} destination={destination} time={time} />
                    case 2564: return <AchievementSharks key={achievement.id} destination={destination} time={time} />
                    case 2565: return <AchievementJellyfish key={achievement.id} destination={destination} time={time} />
                    case 2566: return <AchievementSeadragons key={achievement.id} destination={destination} time={time} />
                    case 2754: return <AchievementBalloons key={achievement.id} destination={destination} time={time} />
                    case 2755: return <AchievementCrabs key={achievement.id} destination={destination} time={time} />
                    case 2756: return <AchievementMantas key={achievement.id} destination={destination} time={time} />
                    default: return null
                }
            })}
        </>
    )
}

export default React.memo(AchievementsInformation)
