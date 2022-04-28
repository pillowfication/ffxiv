import React from 'react'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import { ChecklistContext } from '../../pages/ocean-fishing/index'

interface Props {
  fishId: number
}

const ChecklistCheckmark = ({ fishId }: Props): React.ReactElement => {
  return (
    <ChecklistContext.Consumer>
      {({ checklist, setChecklist }) => {
        const checked = checklist.includes(fishId)
        const toggleFish = (fishId: number): void => {
          if (checklist.includes(fishId)) {
            const newChecklist = checklist.slice()
            newChecklist.splice(newChecklist.findIndex(id => id === fishId), 1)
            setChecklist(newChecklist)
          } else {
            const newChecklist = checklist.slice()
            newChecklist.push(fishId)
            newChecklist.sort((a, b) => a - b)
            setChecklist(newChecklist)
          }
        }

        return (
          <IconButton onClick={toggleFish.bind(null, fishId)}>
            <CheckIcon sx={{
              color: checked ? 'success.main' : 'inherit',
              opacity: checked ? 1 : 0.33
            }} />
          </IconButton>
        )
      }}
    </ChecklistContext.Consumer>
  )
}

export default ChecklistCheckmark
