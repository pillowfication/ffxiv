import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import ItemIcon from './ItemIcon'
import TimeIcon from './TimeIcon'
import BaitGroup from './BaitGroup'
import ChecklistCheckmark from './ChecklistCheckmark'
import Link from '../Link'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { Fish } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextBiteTime } from './utils'
import translate from '../translate'

function getImgUrl(fish: Fish): string {
    if (fish.lodestoneData !== null) {
        return `https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/${fish.lodestoneData.icon_lg.slice(0, 2)}/${fish.lodestoneData.icon_lg}.png`
    } else {
        // Fallback to XIVAPI's icons
        return `https://xivapi.com/i/${`000000${fish.icon - (fish.icon % 1000)}`.slice(-6)}/${`000000${fish.icon}`.slice(-6)}.png`
    }
}

interface Props {
    fish: Fish
}

const OceanFishPopper = ({ fish }: Props): React.ReactElement => {
    const { t, i18n } = useTranslation('ocean-fishing')
    const spreadsheetData = fish.spreadsheetData
    const locale = i18n.language

    return (
        <Box boxShadow={8}>
            <Card variant='outlined'>
                <CardHeader
                    avatar={<ItemIcon src={getImgUrl(fish)} />}
                    title={translate(locale, fish, 'name')}
                    titleTypographyProps={{ variant: 'h6', paragraph: true }}
                    subheader={(
                        <div>
                            {fish.lodestoneData !== null && (
                                <div><Link href={`https://na.finalfantasyxiv.com/lodestone/playguide/db/item/${fish.lodestoneData.item}/`}>Lodestone</Link></div>
                            )}
                            <div><Link href={`https://ffxivteamcraft.com/db/${locale}/item/${fish.id}`}>Teamcraft</Link></div>
                        </div>
                    )}
                    action={<ChecklistCheckmark fishId={fish.id} />}
                />
                <CardContent>
                    <BaitGroup {...getBaitGroup(fish)} subtext={subtextBiteTime} />
                </CardContent>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.rating')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.stars != null ? '★'.repeat(spreadsheetData.stars) : '?'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.points')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.points != null ? spreadsheetData.points : '?'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.doubleHook')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.doubleHook != null
                                        ? (spreadsheetData.doubleHook[0] === spreadsheetData.doubleHook[1] ? spreadsheetData.doubleHook.join('-') : spreadsheetData.doubleHook[0])
                                        : '?'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.tripleHook')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.tripleHook != null
                                        ? (spreadsheetData.tripleHook[0] === spreadsheetData.tripleHook[1] ? spreadsheetData.tripleHook.join('-') : spreadsheetData.tripleHook[0])
                                        : '?'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.weather')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.weatherAvailability != null
                                        ? (() => {
                                            switch (spreadsheetData.weatherAvailability.type) {
                                                case 'ALL':
                                                    return 'Any'
                                                case 'OK':
                                                    return spreadsheetData.weatherAvailability.weathers.map(weather =>
                                                        <WeatherIcon key={weather} weather={weather} />
                                                    )
                                                case 'NOT OK':
                                                    return (
                                                        <>
                                                            <span style={{ verticalAlign: 'middle' }}>Not </span>
                                                            {spreadsheetData.weatherAvailability.weathers.map(weather =>
                                                                <WeatherIcon key={weather} weather={weather} />
                                                            )}
                                                        </>
                                                    )
                                            }
                                        })()
                                        : '?'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant='head'>
                                    {t('fishInfo.timeOfDay')}
                                </TableCell>
                                <TableCell align='center'>
                                    {spreadsheetData?.timeAvailability != null
                                        ? spreadsheetData.timeAvailability.length === 3 ? 'Any' : spreadsheetData.timeAvailability.map(time => <TimeIcon key={time} time={time} />)
                                        : '?'}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Box>
    )
}

export default OceanFishPopper
