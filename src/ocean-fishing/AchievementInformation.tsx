import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Section from '../Section'
import Link from '../Link'
import OceanFishIcon from './OceanFishIcon'
import { achievements, contentBonuses, ContentBonus } from './ffxiv-ocean-fishing/data'
import { cleanRequirement } from './utils'
import translate from '../translate'

const contentBonusMap: Record<number, ContentBonus> = {
    2563: contentBonuses[13],
    2564: contentBonuses[14],
    2565: contentBonuses[15],
    2566: contentBonuses[16],
    2754: contentBonuses[20],
    2755: contentBonuses[21],
    2756: contentBonuses[22]
}

const teamcraftUrlMap: Record<number, string> = {
    2563: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#octopus-travelers',
    2564: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#certifiable-shark-hunters',
    2565: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#jelled-together',
    2566: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#maritime-dragonslayers',
    2754: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#balloon-catchers',
    2755: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#crab-boat-crew',
    2756: 'https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#sticking-it-to-the-manta'
}

interface Props {
    achievement: number
    children?: React.ReactNode
}

const AchievementInformation = ({ achievement, children }: Props): React.ReactElement => {
    const { i18n } = useTranslation('ocean-fishing')
    const locale = i18n.language

    return (
        <Section
            title={
                <Typography variant='h3'>
                    {translate(locale, achievements[achievement], 'name')}
                    <OceanFishIcon type='achievement' id={achievement} sx={{ ml: 1, mr: 2, verticalAlign: 'text-bottom' }} />
                    <Typography sx={{ display: { sm: 'block', md: 'inline' } }}>
                        {cleanRequirement(translate(locale, contentBonusMap[achievement], 'requirement'))}&nbsp;
                        <Link href={teamcraftUrlMap[achievement]}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                    </Typography>
                </Typography>
            }
        >
            {children}
        </Section>
    )
}

export default AchievementInformation
