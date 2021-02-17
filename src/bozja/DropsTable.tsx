import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Section from '../Section'
import { formatMonster } from './utils'
import bozja from './ffxiv-bozja/data/bozja.json'
import translate from '../translate'
import { useTranslation } from '../i18n'

const DropsTable = (): React.ReactElement => {
  const { i18n } = useTranslation('bozja')
  const locale = i18n.language

  return (
    <Section>
      <TableContainer>
        <Table size='small'>
          {['zone1', 'zone2', 'zone3'].map(zone =>
            <React.Fragment key={zone}>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Loot</TableCell>
                  <TableCell align='center'>Count</TableCell>
                  <TableCell align='center'>Rate</TableCell>
                  <TableCell align='center'>Monster</TableCell>
                  <TableCell align='center'>Conditions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(bozja.drops[zone] as any[])
                  .map(datum => datum.loot)
                  .sort((a, b) => a - b)
                  .filter((loot, index, array) => loot !== array[index + 1])
                  .map(loot =>
                    (bozja.drops[zone] as any[])
                      .filter(datum => datum.loot === loot)
                      .sort((a, b) => a.monster - b.monster)
                      .map((datum, index, array) =>
                        <TableRow key={index}>
                          {index === 0 && (
                            <TableCell rowSpan={array.length} align='center'>{translate(locale, bozja.items[loot], 'name')}</TableCell>
                          )}
                          <TableCell align='center'>×{datum.count}</TableCell>
                          <TableCell align='center'>{datum.rate}%</TableCell>
                          <TableCell align='center'>{formatMonster(translate(locale, datum, 'name'), locale)}</TableCell>
                          <TableCell align='center'>{datum.condition}</TableCell>
                        </TableRow>
                      )
                  )}
              </TableBody>
            </React.Fragment>
          )}
        </Table>
      </TableContainer>
    </Section>
  )
}

export default DropsTable
