import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LINES, validateGrid, getSuggestion } from './calculate-mini-cactpot'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TableContainer from '@material-ui/core/TableContainer'
import Button from '@material-ui/core/Button'
import CalculatorCell from './CalculatorCell'
import CalculatorLineIndicator from './CalculatorLineIndicator'
import { useTranslation } from '../i18n'

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
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black',
    whiteSpace: 'nowrap'
  },
  suggestion: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8)
    }
  }
}))

const Calculator = () => {
  const classes = useStyles()
  const { t } = useTranslation('mini-cactpot')
  const [grid, setGrid] = useState<number[]>(Array(9).fill(null))

  const handleInputDigit = (cellIndex: number, digit: number) => {
    const newGrid = grid.slice()
    newGrid[cellIndex] = digit
    setGrid(newGrid)
  }

  const handleClickReset = () => {
    setGrid(Array(9).fill(null))
  }

  const errorCells = {}
  const suggestedCells = {}
  const error = validateGrid(grid)
  let suggestion: any

  if (error) {
    switch (error.type) {
      case 'TOO MANY':
      case 'DUPLICATES':
        for (const cellIndex of error.cells) {
          errorCells[cellIndex] = true
        }
        break
    }
  } else {
    suggestion = getSuggestion(grid)
    switch (suggestion.type) {
      case 'CELL':
        for (const cellIndex of suggestion.maxCellLocations) {
          suggestedCells[cellIndex] = true
        }
        break
      case 'LINE':
        for (const lineId of suggestion.maxLineIds) {
          for (const cellIndex of LINES[lineId]) {
            suggestedCells[cellIndex] = true
          }
        }
    }
  }

  function isLineSuggested (lineId: number) {
    return suggestion && suggestion.type === 'LINE' && suggestion.maxLineIds.includes(lineId)
  }

  return (
    <Section>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.gridShrink}>
          <TableContainer>
            <table>
              <tbody>
                <tr>
                  <td><CalculatorLineIndicator rotate={45} suggested={isLineSuggested(3)} /></td>
                  <td><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(4)} /></td>
                  <td><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(5)} /></td>
                  <td><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(6)} /></td>
                  <td><CalculatorLineIndicator rotate={135} suggested={isLineSuggested(7)} /></td>
                </tr>
                <tr>
                  <td><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(2)} /></td>
                  <td rowSpan={3} colSpan={3}>
                    <div className={classes.cellsContainer}>
                      <CalculatorCell value={grid[0]} suggested={suggestedCells[0]} error={errorCells[0]} onInputDigit={handleInputDigit.bind(null, 0)} />
                      <CalculatorCell value={grid[1]} suggested={suggestedCells[1]} error={errorCells[1]} onInputDigit={handleInputDigit.bind(null, 1)} />
                      <CalculatorCell value={grid[2]} suggested={suggestedCells[2]} error={errorCells[2]} onInputDigit={handleInputDigit.bind(null, 2)} />
                      <br />
                      <CalculatorCell value={grid[3]} suggested={suggestedCells[3]} error={errorCells[3]} onInputDigit={handleInputDigit.bind(null, 3)} />
                      <CalculatorCell value={grid[4]} suggested={suggestedCells[4]} error={errorCells[4]} onInputDigit={handleInputDigit.bind(null, 4)} />
                      <CalculatorCell value={grid[5]} suggested={suggestedCells[5]} error={errorCells[5]} onInputDigit={handleInputDigit.bind(null, 5)} />
                      <br />
                      <CalculatorCell value={grid[6]} suggested={suggestedCells[6]} error={errorCells[6]} onInputDigit={handleInputDigit.bind(null, 6)} />
                      <CalculatorCell value={grid[7]} suggested={suggestedCells[7]} error={errorCells[7]} onInputDigit={handleInputDigit.bind(null, 7)} />
                      <CalculatorCell value={grid[8]} suggested={suggestedCells[8]} error={errorCells[8]} onInputDigit={handleInputDigit.bind(null, 8)} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(1)} /></td>
                </tr>
                <tr>
                  <td><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(0)} /></td>
                </tr>
              </tbody>
            </table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} className={classes.gridGrow}>
          <div className={classes.suggestion}>
            {(() => {
              if (error) {
                switch (error.type) {
                  case 'EMPTY':
                    return <Typography paragraph>{t('state.selectFirstCell')}</Typography>
                  case 'TOO MANY':
                    return <Typography paragraph>{t('state.tooManyDigits')}</Typography>
                  case 'DUPLICATES':
                    return <Typography paragraph>{t('state.duplicateDigits')}</Typography>
                }
              } else {
                switch (suggestion.type) {
                  case 'CELL':
                    return (
                      <>
                        <Typography>{t('expectedValue', { ev: Math.floor(suggestion.maxCellEV) })}</Typography>
                        <Typography paragraph>{t('state.selectHighlightedCell')}</Typography>
                      </>
                    )
                  case 'LINE':
                    return (
                      <>
                        <Typography>{t('expectedValue', { ev: Math.floor(suggestion.maxLineEV) })}</Typography>
                        <Typography paragraph>{t('state.selectHighlightedLine')}</Typography>
                      </>
                    )
                }
              }
            })()}
            <Button variant='contained' color='secondary' onClick={handleClickReset}>{t('reset')}</Button>
          </div>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Calculator
