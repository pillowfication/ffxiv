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
import calculateProbabilities from './calculate-probabilities'

const PROB_1_LINES = 6688 / 11440
const PROB_2_LINES = 1208 / 11440
const PROB_3_LINES = 24 / 11440

const useStyles = makeStyles((theme) => ({
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

function toPercent (val: number) {
  return <Typography>{(val * 100).toFixed(1) + '%'}</Typography>
}

function toDeviationPercent (val: number) {
  const string = (val >= 0 ? '+' : '') + (val * 100).toFixed(1) + '%'
  const color = val > 0 ? 'green' : val < 0 ? 'red' : undefined
  return <Typography style={{ color }}>{string}</Typography>
}

const Calculator = () => {
  const [board, setBoard] = useState(Array(16).fill(false))
  const classes = useStyles()
  const { lines1, lines2, lines3, total } = calculateProbabilities(board)
  const filledCells = board.filter((x) => x).length

  const toggleCell = (index: number) => {
    const newBoard = board.slice()
    newBoard[index] = !board[index]
    setBoard(newBoard)
  }

  const handleClickReset = () => {
    setBoard(Array(16).fill(false))
  }

  return (
    <Section>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.gridShrink}>
          <TableContainer>
            <table className={classes.cellsContainer}>
              <tbody>
                {[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]].map((row, rowIndex) =>
                  <tr key={rowIndex}>
                    {row.map((cellIndex) =>
                      <td key={cellIndex}>
                        <CalculatorCell
                          selected={board[cellIndex]}
                          onSelect={toggleCell.bind(null, cellIndex)}
                        />
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} className={classes.gridGrow}>
          <Typography variant='h6' paragraph>{filledCells} / 9</Typography>
          {filledCells <= 9
            ? <Typography paragraph>Select up to 9 stickers.</Typography>
            : <Typography paragraph>Too many cells have been filled!</Typography>}
          <TableContainer className={classes.probabilities}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Lines</TableCell>
                  <TableCell>Chance</TableCell>
                  <TableCell>Deviation</TableCell>
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
          <Button variant='contained' color='secondary' onClick={handleClickReset}>Reset</Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Calculator
