import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert, { Color } from '@material-ui/lab/Alert'
import Section from '../../src/Section'

function sortFishes (fishes: number[]): number[] {
  return fishes
    .sort((a, b) => a - b)
    .filter((fish, index, array) => fish !== array[index + 1])
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : undefined
  },
  textField: {
    fontFamily: 'monospace, monospace'
  },
  buttons: {
    '& button': {
      margin: theme.spacing(1, 2, 0, 0)
    }
  }
}))

interface Props {
  checklist: number[]
  setChecklist: (checklist: number[]) => void
}

const ImportFishes = ({ checklist, setChecklist }: Props): React.ReactElement => {
  const classes = useStyles()
  const [importData, setImportData] = useState('')
  const [message, setMessage] = useState<{ type: Color, message: string } | null>(null)

  const handleInputImportData = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setImportData(event.target.value)
  }

  const handleClickImport = (): void => {
    try {
      const data = JSON.parse(importData)
      if (Array.isArray(data)) {
        setChecklist(sortFishes(data as number[]))
        setMessage({ type: 'success', message: `Imported ${(data as number[]).length} fishes.` })
      } else if (Array.isArray(data.completed)) {
        setChecklist(sortFishes(data.completed as number[]))
        setMessage({ type: 'success', message: `Imported ${(data.completed as number[]).length} fishes.` })
      } else {
        setMessage({ type: 'error', message: 'Could not parse data.' })
      }
    } catch (_) {
      setMessage({ type: 'error', message: 'Could not parse data.' })
    }
  }

  const handleClickMerge = (): void => {
    try {
      const data = JSON.parse(importData)
      if (Array.isArray(data)) {
        setChecklist(sortFishes(checklist.concat(data as number[])))
        setMessage({ type: 'success', message: `Imported ${(data as number[]).length} fishes.` })
      } else if (Array.isArray(data.completed)) {
        setChecklist(sortFishes(checklist.concat(data.completed as number[])))
        setMessage({ type: 'success', message: `Imported ${(data.completed as number[]).length} fishes.` })
      } else {
        setMessage({ type: 'error', message: 'Could not parse data.' })
      }
    } catch (_) {
      setMessage({ type: 'error', message: 'Could not parse data.' })
    }
  }

  return (
    <Section>
      <Box component={Paper} p={2} className={classes.container}>
        <Typography>Paste code from <Link href='https://lalachievements.com/'>Lalachievements</Link> or <Link href='https://ff14fish.carbuncleplushy.com/'>FFX|V Fish Tracker App</Link> below.</Typography>
        <TextField
          multiline
          fullWidth
          variant='outlined'
          rows={4}
          margin='normal'
          value={importData}
          onChange={handleInputImportData}
          InputProps={{ className: classes.textField }}
        />
        {message !== undefined && (
          <Alert variant='outlined' severity={message?.type}>{message?.message}</Alert>
        )}
        <div className={classes.buttons}>
          <Button variant='contained' color='primary' onClick={handleClickImport}>Import</Button>
          <Button variant='contained' color='primary' onClick={handleClickMerge}>Merge</Button>
        </div>
      </Box>
    </Section>
  )
}

export default ImportFishes
