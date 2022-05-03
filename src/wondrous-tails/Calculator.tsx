import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import Section from '../Section'
import CalculatorCell from './CalculatorCell'
import { calculateProbabilities } from './ffxiv-wondrous-tails'

const PROB_1_LINES = 6688 / 11440
const PROB_2_LINES = 1208 / 11440
const PROB_3_LINES = 24 / 11440

function toPercent (val: number): React.ReactElement {
  return <Typography>{(val * 100).toFixed(1) + '%'}</Typography>
}

function toDeviationPercent (val: number): React.ReactElement {
  const string = (val >= 0 ? '+' : '') + (val * 100).toFixed(1) + '%'
  const color = val > 0 ? 'green' : val < 0 ? 'red' : undefined
  return <Typography style={{ color }}>{string}</Typography>
}

const Calculator = (): React.ReactElement => {
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
        <Grid item xs={12} lg='auto'>
          <Paper component='table' sx={{
            display: 'inline-block',
            borderCollapse: 'collapse',
            borderSpacing: 0,
            border: '1px solid black'
          }}>
            <tbody>
              <tr>
                <CalculatorCell selected={board[0]} onSelect={toggleCell.bind(null, 0)} />
                <CalculatorCell selected={board[1]} onSelect={toggleCell.bind(null, 1)} />
                <CalculatorCell selected={board[2]} onSelect={toggleCell.bind(null, 2)} />
                <CalculatorCell selected={board[3]} onSelect={toggleCell.bind(null, 3)} />
              </tr>
              <tr>
                <CalculatorCell selected={board[4]} onSelect={toggleCell.bind(null, 4)} />
                <CalculatorCell selected={board[5]} onSelect={toggleCell.bind(null, 5)} />
                <CalculatorCell selected={board[6]} onSelect={toggleCell.bind(null, 6)} />
                <CalculatorCell selected={board[7]} onSelect={toggleCell.bind(null, 7)} />
              </tr>
              <tr>
                <CalculatorCell selected={board[8]} onSelect={toggleCell.bind(null, 8)} />
                <CalculatorCell selected={board[9]} onSelect={toggleCell.bind(null, 9)} />
                <CalculatorCell selected={board[10]} onSelect={toggleCell.bind(null, 10)} />
                <CalculatorCell selected={board[11]} onSelect={toggleCell.bind(null, 11)} />
              </tr>
              <tr>
                <CalculatorCell selected={board[12]} onSelect={toggleCell.bind(null, 12)} />
                <CalculatorCell selected={board[13]} onSelect={toggleCell.bind(null, 13)} />
                <CalculatorCell selected={board[14]} onSelect={toggleCell.bind(null, 14)} />
                <CalculatorCell selected={board[15]} onSelect={toggleCell.bind(null, 15)} />
              </tr>
            </tbody>
          </Paper>
        </Grid>
        <Grid item xs={12} lg>
          <Typography variant='h3' paragraph>{filledCells} / 9</Typography>
          {filledCells <= 9
            ? <Typography paragraph>{t('selectStickers')}</Typography>
            : <Typography paragraph>{t('tooManyStickers')}</Typography>}
          <Paper sx={{ display: 'inline-block', mb: 2 }}>
            <Table sx={{ width: 'auto' }}>
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
          </Paper>
          <br />
          <Button variant='contained' color='secondary' onClick={handleClickReset}>{t('reset')}</Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Calculator
