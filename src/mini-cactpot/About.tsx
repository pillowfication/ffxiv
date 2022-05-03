import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Link from '../Link'
import Section from '../Section'
import { $ } from '../MathJax'
import MiniGrid from './MiniGrid'
import { PAYOUTS } from './calculate-mini-cactpot'

const About = (): React.ReactElement => {
  const { t, i18n } = useTranslation('mini-cactpot')
  const locale = i18n.language

  return (
    <Section title={t('about')}>
      <Typography paragraph>
        <Link href='https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/goldsaucer/cactpot/'>Mini Cactpot</Link> is a scratchcard lottery where each of the numbers {$('1')} through {$('9')} are hidden in a {$('3 \\times 3')} grid. One cell is initially revealed, and after selecting 3 more to uncover one at a time, you may select any row, column, or diagonal. The sum of your selected line determines how much MGP you win.
      </Typography>
      <TableContainer sx={{ mb: 2 }}>
        <Paper component={Table} sx={{ width: 'auto', m: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Sum</TableCell>
              <TableCell align='center'>MGP</TableCell>
              <TableCell align='center'>Sum</TableCell>
              <TableCell align='center'>MGP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              [6, 16],
              [7, 17],
              [8, 18],
              [9, 19],
              [10, 20],
              [11, 21],
              [12, 22],
              [13, 23],
              [14, 24],
              [15, undefined]
            ].map((row, index) =>
              <TableRow key={index}>
                {row.map((col, index) => (
                  <React.Fragment key={index}>
                    <TableCell align='center'>
                      {col?.toLocaleString(locale)}
                    </TableCell>
                    <TableCell align='right'>
                      {col !== undefined && PAYOUTS[col].toLocaleString(locale)}
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Paper>
      </TableContainer>
      <Typography paragraph>
        This calculator works by computing the expected value of selecting any line or cell. A strategy that doesn’t involve heavy computation is to first reveal a “Y” shape on the board.
      </Typography>
      <Box component='figure' textAlign='center' mb={2}>
        <MiniGrid state='X-X-X--X-' />
        <MiniGrid state='X---XXX--' />
        <MiniGrid state='-X--X-X-X' />
        <MiniGrid state='--XXX---X' />
        <figcaption>
          <Typography variant='caption'>Create any of these shapes. At least one of these is always possible.</Typography>
        </figcaption>
      </Box>
      <Typography paragraph>
        Next, select a line as follows:
      </Typography>
      <ol>
        <Typography component='li'>If a line can be the {$('\\operatorname{1-2-3}')} line, select it.</Typography>
        <Typography component='li'>If a line can be the {$('\\operatorname{7-8-9}')} line, select it.</Typography>
        <Typography component='li'>Select whatever line can have the biggest sum (not payout).</Typography>
      </ol>
      <Typography paragraph>
        This strategy gives an expected value of {(1259).toLocaleString(locale)}, whereas perfect play gives {(1484).toLocaleString(locale)}. Note that in steps 1 and 2, if a {$('\\operatorname{1-2-3}')} or {$('\\operatorname{7-8-9}')} line exists, you will always select it without ambiguity. In step 3, you may have to guess which lines may have a large sum.
      </Typography>
    </Section>
  )
}

export default About
