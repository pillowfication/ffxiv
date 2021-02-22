import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import RankIcon from './RankIcon'
import Section from '../Section'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { Weather } from '../skywatcher/ffxiv-skywatcher/src/types'
import { formatMonster } from './utils'
import bozja from './ffxiv-bozja/data/bozja.json'
import { upperFirst } from '../utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const conditionMap: Record<string, React.ReactFragment> = {
  dust: <WeatherIcon weather={Weather.DustStorms} />,
  rain: <WeatherIcon weather={Weather.Rain} />,
  thunder: <WeatherIcon weather={Weather.Thunder} />,
  wind: <WeatherIcon weather={Weather.Wind} />,
  night: 'Night'
}

function cleanFragment (name: string): string {
  return upperFirst(name.replace(/^(Forgotten Fragment of |Unbegutachteter Frontsplitter (der|des) |Éclat oublié non identifié (de |d')|未鑑定ロストシャード:)/, ''))
}

function parseActions (description: string, locale: string): React.ReactElement | React.ReactElement[] {
  let actions: string[] | undefined
  switch (locale) {
    case 'en':
    case 'cn': // Fallback
    case 'ko': // Fallback
      actions = description.match(/Potential memories contained: (.*)$/)?.[1].split(', ')
      break
    case 'de':
      actions = description.match(/Kann folgende Verschollene Kommandos enthalten: (.*)$/)?.[1].split(', ')
      break
    case 'fr':
      actions = description.match(/Son identification peut octroyer (.*?)\./)?.[1].split(/(?:, | ou )/)
      break
    case 'ja':
      actions = description.match(/鑑定結果候補:(.*)$/)?.[1].split('／')
      break
  }

  if (actions === undefined) {
    return <div style={{ whiteSpace: 'pre-wrap' }}>{description}</div>
  } else {
    return actions.map((action, index) => <div key={index}>{action}</div>)
  }
}

const DropsTable = (): React.ReactElement => {
  const { i18n } = useTranslation('bozja')
  const [tab, setTab] = useState(0)
  const locale = i18n.language

  const handleChangeTab = (_: any, value: number): void => {
    setTab(value)
  }

  return (
    <Section>
      <Paper>
        <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
          <Tab label='1. Southern Zone' />
          <Tab label='2. Central Zone' />
          <Tab label='3. Northern Zone' />
        </Tabs>
        <TableContainer>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Fragment</TableCell>
                <TableCell align='center'>Actions</TableCell>
                <TableCell align='center'>Count</TableCell>
                <TableCell align='center'>Rate</TableCell>
                <TableCell align='center'>Monster</TableCell>
                <TableCell align='center'>Conditions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(bozja.drops[`zone${tab + 1}`] as any[])
                .map(datum => datum.loot)
                .sort((a, b) => a - b)
                .filter((loot, index, array) => loot !== array[index + 1])
                .map(loot =>
                  (bozja.drops[`zone${tab + 1}`] as any[])
                    .filter(datum => datum.loot === loot)
                    .sort((a, b) => {
                      const aR = a.rank === 'S' ? 6 : a.rank
                      const bR = b.rank === 'S' ? 6 : b.rank
                      return aR === bR ? a.monster - b.monster : aR - bR
                    })
                    .map((datum, index, array) =>
                      <TableRow key={index}>
                        {index === 0 && (
                          <>
                            <TableCell rowSpan={array.length} align='center'>
                              {cleanFragment(translate(locale, bozja.items[loot], 'name'))}
                            </TableCell>
                            <TableCell rowSpan={array.length}>
                              {loot !== 31135 && (
                                parseActions(translate(locale, bozja.items[loot], 'description'), locale)
                              )}
                            </TableCell>
                          </>
                        )}
                        <TableCell align='center'>×{datum.count}</TableCell>
                        <TableCell align='center'>{datum.rate}%</TableCell>
                        <TableCell>
                          <RankIcon rank={datum.rank} />
                          {formatMonster(translate(locale, datum, 'name'), locale)}
                        </TableCell>
                        <TableCell align='center'>{conditionMap[datum.condition]}</TableCell>
                      </TableRow>
                    )
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Section>
  )
}

export default DropsTable
