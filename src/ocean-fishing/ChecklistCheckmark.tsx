import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import { ChecklistContext } from '../../pages/ocean-fishing/index'

const useStyles = makeStyles(theme => ({
  check: {
    padding: 10
  },
  unchecked: {
    opacity: 0.33
  },
  checked: {
    color: theme.palette.success.main
  }
}))

interface Props {
  fishId: number
}

const ChecklistCheckmark = ({ fishId }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <ChecklistContext.Consumer>
      {({ checklist, setChecklist }) => {
        const toggleFish = (fishId: number): void => {
          if (checklist.includes(fishId)) {
            const copy = checklist.slice()
            copy.splice(copy.findIndex(id => id === fishId), 1)
            setChecklist(copy)
          } else {
            const copy = checklist.slice()
            copy.push(fishId)
            copy.sort((a, b) => a - b)
            setChecklist(copy)
          }
        }

        return (
          <IconButton
            className={clsx(classes.check, checklist.includes(fishId) ? classes.checked : classes.unchecked)}
            onClick={toggleFish.bind(null, fishId)}
          >
            <CheckIcon />
          </IconButton>
        )
      }}
    </ChecklistContext.Consumer>
  )
}

export default ChecklistCheckmark
