// import React, { useState } from 'react'
// import { useTranslation } from 'next-i18next'
// import { boardPatterns, CellType } from './ffxiv-faux-hollows/data'
// import Section from '../Section'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import TableContainer from '@mui/material/TableContainer'
// import Button from '@mui/material/Button'
// import CalculatorCell from './CalculatorCell'

// const ALL_BOARDS = Object.values(boardPatterns)
//   .map(({ boards }) => boards)
//   .flat()

// function find

// const Calculator = (): React.ReactElement => {
//   const { t, i18n } = useTranslation('mini-cactpot')
//   const [grid, setGrid] = useState<Array<CellType>>(Array(36).fill(CellType.Empty))
//   const locale = i18n.language

//   const handleInputDigit = (cellIndex: number, digit: number | null): void => {
//     const newGrid = grid.slice()
//     newGrid[cellIndex] = digit
//     setGrid(newGrid)
//   }

//   const handleClickReset = (): void => {
//     setGrid(Array(9).fill(null))
//   }

//   const errorCells: Record<number, boolean> = {}
//   const suggestedCells: Record<number, boolean> = {}
//   const error = validateGrid(grid)
//   let suggestion: any

//   if (error !== null) {
//     switch (error.type) {
//       case 'TOO MANY':
//       case 'DUPLICATES':
//         if (error.cells !== undefined) {
//           for (const cellIndex of error.cells) {
//             errorCells[cellIndex] = true
//           }
//         }
//         break
//     }
//   } else {
//     suggestion = getSuggestion(grid)
//     switch (suggestion.type) {
//       case 'CELL':
//         for (const cellIndex of suggestion.maxCellLocations) {
//           suggestedCells[cellIndex] = true
//         }
//         break
//       case 'LINE':
//         for (const lineId of suggestion.maxLineIds) {
//           for (const cellIndex of LINES[lineId]) {
//             suggestedCells[cellIndex] = true
//           }
//         }
//     }
//   }

//   function isLineSuggested (lineId: number): boolean {
//     return suggestion !== undefined && suggestion.type === 'LINE' && suggestion.maxLineIds.includes(lineId)
//   }

//   return (
//     <Section>
//       <Grid container spacing={4}>
//         <Grid item xs={12} lg='auto'>
//           <TableContainer>
//             <Box component='table' sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
//               <tbody>
//                 <tr>
//                   <th><CalculatorLineIndicator rotate={45} suggested={isLineSuggested(3)} /></th>
//                   <th><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(4)} /></th>
//                   <th><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(5)} /></th>
//                   <th><CalculatorLineIndicator rotate={90} suggested={isLineSuggested(6)} /></th>
//                   <th><CalculatorLineIndicator rotate={135} suggested={isLineSuggested(7)} /></th>
//                 </tr>
//                 <tr>
//                   <th><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(2)} /></th>
//                   <td rowSpan={3} colSpan={3}>
//                     <CalculatorCell
//                       value={grid[0]}
//                       suggested={suggestedCells[0]}
//                       error={errorCells[0]}
//                       onInputDigit={handleInputDigit.bind(null, 0)}
//                     />
//                     <CalculatorCell
//                       value={grid[1]}
//                       suggested={suggestedCells[1]}
//                       error={errorCells[1]}
//                       onInputDigit={handleInputDigit.bind(null, 1)}
//                     />
//                     <CalculatorCell
//                       value={grid[2]}
//                       suggested={suggestedCells[2]}
//                       error={errorCells[2]}
//                       onInputDigit={handleInputDigit.bind(null, 2)}
//                     />
//                     <br />
//                     <CalculatorCell
//                       value={grid[3]}
//                       suggested={suggestedCells[3]}
//                       error={errorCells[3]}
//                       onInputDigit={handleInputDigit.bind(null, 3)}
//                     />
//                     <CalculatorCell
//                       value={grid[4]}
//                       suggested={suggestedCells[4]}
//                       error={errorCells[4]}
//                       onInputDigit={handleInputDigit.bind(null, 4)}
//                     />
//                     <CalculatorCell
//                       value={grid[5]}
//                       suggested={suggestedCells[5]}
//                       error={errorCells[5]}
//                       onInputDigit={handleInputDigit.bind(null, 5)}
//                     />
//                     <br />
//                     <CalculatorCell
//                       value={grid[6]}
//                       suggested={suggestedCells[6]}
//                       error={errorCells[6]}
//                       onInputDigit={handleInputDigit.bind(null, 6)}
//                     />
//                     <CalculatorCell
//                       value={grid[7]}
//                       suggested={suggestedCells[7]}
//                       error={errorCells[7]}
//                       onInputDigit={handleInputDigit.bind(null, 7)}
//                     />
//                     <CalculatorCell
//                       value={grid[8]}
//                       suggested={suggestedCells[8]}
//                       error={errorCells[8]}
//                       onInputDigit={handleInputDigit.bind(null, 8)}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(1)} /></th>
//                 </tr>
//                 <tr>
//                   <th><CalculatorLineIndicator rotate={0} suggested={isLineSuggested(0)} /></th>
//                 </tr>
//               </tbody>
//             </Box>
//           </TableContainer>
//         </Grid>
//         <Grid item xs={12} lg>
//           <div>
//             {(() => {
//               if (error !== null) {
//                 switch (error.type) {
//                   case 'EMPTY':
//                     return <Typography paragraph>{t('state.selectFirstCell')}</Typography>
//                   case 'TOO MANY':
//                     return <Typography paragraph>{t('state.tooManyDigits')}</Typography>
//                   case 'DUPLICATES':
//                     return <Typography paragraph>{t('state.repeatedDigits')}</Typography>
//                 }
//               } else {
//                 switch (suggestion.type) {
//                   case 'CELL':
//                     return (
//                       <>
//                         <Typography>{t('expectedValue')}: {Math.floor(suggestion.maxCellEV).toLocaleString(locale)}</Typography>
//                         <Typography paragraph>{t('state.selectHighlightedCell')}</Typography>
//                       </>
//                     )
//                   case 'LINE':
//                     return (
//                       <>
//                         <Typography>{t('expectedValue')}: {Math.floor(suggestion.maxLineEV).toLocaleString(locale)}</Typography>
//                         <Typography paragraph>{t('state.selectHighlightedLine')}</Typography>
//                       </>
//                     )
//                 }
//               }
//             })()}
//             <Button variant='contained' color='secondary' onClick={handleClickReset}>{t('reset')}</Button>
//           </div>
//         </Grid>
//       </Grid>
//     </Section>
//   )
// }

// export default Calculator
export {}