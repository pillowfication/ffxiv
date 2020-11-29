import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { fade } from '@material-ui/core/styles/colorManipulator'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'inline-block',
    margin: theme.spacing(2),
    borderCollapse: 'collapse',
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black'
  },
  cell: {
    display: 'inline-block',
    width: '2.5em',
    height: '2.5em',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black'
  },
  selected: {
    backgroundColor: fade(theme.palette.primary.main, theme.palette.type === 'dark' ? 0.8 : 0.6)
  }
}))

const MiniGrid = ({ state }) => {
  const classes = useStyles()

  return (
    <table className={classes.grid}>
      <tbody>
        {[[0, 1, 2], [3, 4, 5], [6, 7, 8]].map((row, rowIndex) =>
          <tr key={rowIndex}>
            {row.map(cellIndex =>
              <td key={cellIndex} className={cn(classes.cell, state[cellIndex] === 'X' && classes.selected)} />
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

MiniGrid.propTypes = {
  state: PropTypes.string.isRequired
}

export default MiniGrid
