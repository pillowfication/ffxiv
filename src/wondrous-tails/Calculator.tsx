import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import Section from '../Section'
import CalculatorCell from './CalculatorCell'
import { calculateProbabilities } from './ffxiv-wondrous-tails'
import { useTranslation } from '../i18n'

const PROB_1_LINES = 6688 / 11440
const PROB_2_LINES = 1208 / 11440
const PROB_3_LINES = 24 / 11440

const useStyles = makeStyles(theme => ({
  gridShrink: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 auto'
    }
  },
  gridGrow: {
    [theme.breakpoints.up('md')]: {
      flex: '1 1 0px'
    }
  },
  cellsContainer: {
    display: 'inline-block',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black',
    '& td': {
      padding: 0,
      lineHeight: 0
    }
  },
  probabilities: {
    marginBottom: theme.spacing(2),
    '& table': {
      width: 'initial',
      '& thead, & tbody': {
        background: 'none'
      },
      '& th': {
        padding: theme.spacing(1, 2)
      },
      '& td': {
        padding: theme.spacing(1, 2),
        border: 0
      }
    }
  }
}))

function toPercent (val: number): React.ReactElement {
  return <Typography>{(val * 100).toFixed(1) + '%'}</Typography>
}

function toDeviationPercent (val: number): React.ReactElement {
  const string = (val >= 0 ? '+' : '') + (val * 100).toFixed(1) + '%'
  const color = val > 0 ? 'green' : val < 0 ? 'red' : undefined
  return <Typography style={{ color }}>{string}</Typography>
}

const Calculator = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('wondrous-tails')
  const [board, setBoard] = useState<boolean[]>(Array(16).fill(false))
  const { lines1, lines2, lines3, total } = calculateProbabilities(board)
  const filledCells = board.filter((x) => x).length

  const toggleCell = (index: number): void => {
    const newBoard = board.slice()
    newBoard[index] = !board[index]
    setBoard(newBoard)
  }

  const handleClickReset = (): void => {
    setBoard(Array(16).fill(false))
  }

  return (
    <Section>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.gridShrink}>
          <TableContainer>
            <table className={classes.cellsContainer}>
              <tbody>
                <tr>
                  <td><CalculatorCell selected={board[0]} onSelect={toggleCell.bind(null, 0)} /></td>
                  <td><CalculatorCell selected={board[1]} onSelect={toggleCell.bind(null, 1)} /></td>
                  <td><CalculatorCell selected={board[2]} onSelect={toggleCell.bind(null, 2)} /></td>
                  <td><CalculatorCell selected={board[3]} onSelect={toggleCell.bind(null, 3)} /></td>
                </tr>
                <tr>
                  <td><CalculatorCell selected={board[4]} onSelect={toggleCell.bind(null, 4)} /></td>
                  <td><CalculatorCell selected={board[5]} onSelect={toggleCell.bind(null, 5)} /></td>
                  <td><CalculatorCell selected={board[6]} onSelect={toggleCell.bind(null, 6)} /></td>
                  <td><CalculatorCell selected={board[7]} onSelect={toggleCell.bind(null, 7)} /></td>
                </tr>
                <tr>
                  <td><CalculatorCell selected={board[8]} onSelect={toggleCell.bind(null, 8)} /></td>
                  <td><CalculatorCell selected={board[9]} onSelect={toggleCell.bind(null, 9)} /></td>
                  <td><CalculatorCell selected={board[10]} onSelect={toggleCell.bind(null, 10)} /></td>
                  <td><CalculatorCell selected={board[11]} onSelect={toggleCell.bind(null, 11)} /></td>
                </tr>
                <tr>
                  <td><CalculatorCell selected={board[12]} onSelect={toggleCell.bind(null, 12)} /></td>
                  <td><CalculatorCell selected={board[13]} onSelect={toggleCell.bind(null, 13)} /></td>
                  <td><CalculatorCell selected={board[14]} onSelect={toggleCell.bind(null, 14)} /></td>
                  <td><CalculatorCell selected={board[15]} onSelect={toggleCell.bind(null, 15)} /></td>
                </tr>
              </tbody>
            </table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} className={classes.gridGrow}>
          <Typography variant='h6' paragraph>{filledCells} / 9</Typography>
          {filledCells <= 9
            ? <Typography paragraph>{t('selectStickers')}</Typography>
            : <Typography paragraph>{t('tooManyStickers')}</Typography>}
          <TableContainer className={classes.probabilities}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('lines')}</TableCell>
                  <TableCell>{t('chance')}</TableCell>
                  <TableCell>{t('deviation')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align='center'><Typography>1+</Typography></TableCell>
                  <TableCell align='right'>{toPercent(lines1 / total)}</TableCell>
                  <TableCell align='right'>{toDeviationPercent(lines1 / total - PROB_1_LINES)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'><Typography>2+</Typography></TableCell>
                  <TableCell align='right'>{toPercent(lines2 / total)}</TableCell>
                  <TableCell align='right'>{toDeviationPercent(lines2 / total - PROB_2_LINES)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'><Typography>3</Typography></TableCell>
                  <TableCell align='right'>{toPercent(lines3 / total)}</TableCell>
                  <TableCell align='right'>{toDeviationPercent(lines3 / total - PROB_3_LINES)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant='contained' color='secondary' onClick={handleClickReset}>{t('reset')}</Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Calculator
