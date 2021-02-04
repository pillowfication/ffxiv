import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Section from '../Section'
import { $ } from '../MathJax'
import MiniGrid from './MiniGrid'
import { PAYOUTS } from './calculate-mini-cactpot'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  payoutsContainer: {
    marginBottom: theme.spacing(2)
  },
  payouts: {
    width: 'auto',
    margin: '0 auto',
    '& thead, & tbody': {
      background: 'none'
    },
    '& th': {
      padding: theme.spacing(1, 2),
      '&:nth-child(2)': {
        paddingRight: theme.spacing(8)
      }
    },
    '& td': {
      padding: theme.spacing(1, 2),
      border: 0,
      '&:nth-child(2)': {
        paddingRight: theme.spacing(8)
      }
    }
  }
}))

const About = (): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('mini-cactpot')
  const locale = i18n.language

  return (
    <Section title={t('about')}>
      <Typography paragraph>
        <MuiLink href='https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/goldsaucer/cactpot/'>Mini Cactpot</MuiLink> is a scratchcard lottery where each of the numbers {$('1')} through {$('9')} are hidden in a {$('3 \\times 3')} grid. One cell is initially revealed, and after selecting 3 more to uncover one at a time, you may select any row, column, or diagonal. The sum of your selected line determines how much MGP you win.
      </Typography>
      <TableContainer className={classes.payoutsContainer}>
        <Table className={classes.payouts}>
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
              [15]
            ].map((row, index) =>
              <TableRow key={index}>
                {row.map((col, index) =>
                  <React.Fragment key={index}>
                    <TableCell align='center'>
                      {col.toLocaleString(locale)}
                    </TableCell>
                    <TableCell align='right'>
                      {PAYOUTS[col].toLocaleString(locale)}
                    </TableCell>
                  </React.Fragment>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography paragraph>
        This calculator works by computing the expected value of selecting any line or cell. A strategy that doesn’t involve heavy computation is to first reveal a “Y” shape on the board.
      </Typography>
      <Box textAlign='center'>
        <MiniGrid state='X-X-X--X-' />
        <MiniGrid state='X---XXX--' />
        <MiniGrid state='-X--X-X-X' />
        <MiniGrid state='--XXX---X' />
      </Box>
      <Typography paragraph>
        Next, select a line as follows:
      </Typography>
      <ol>
        <Typography component='li'>If a line can be the {$('123')} line, select it; otherwise</Typography>
        <Typography component='li'>if a line can be the {$('789')} line, select it; otherwise</Typography>
        <Typography component='li'>select whatever line can have the biggest sum (not payout).</Typography>
      </ol>
      <Typography paragraph>
        This strategy gives an expected value of {(1259).toLocaleString(locale)}, whereas perfect play gives {(1484).toLocaleString(locale)}. Note that in steps 1 and 2, if a {$('123')} or {$('789')} line exists, you will always select it without ambiguity. In step 3, you may have to guess which lines may have a large sum.
      </Typography>
    </Section>
  )
}

export default About
