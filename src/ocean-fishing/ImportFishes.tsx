import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Color } from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import Section from '../../src/Section'
import i18n from '../../i18n'
import { TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.type === 'light' && theme.palette.grey[200]
  },
  buttons: {
    '& button': {
      margin: theme.spacing(1, 0)
    }
  }
}))

type Props = {
  setChecklist: (checklist: number[]) => void,
  t: TFunction
}

const FishTable = ({ setChecklist, t }: Props) => {
  const classes = useStyles()
  const [importData, setImportData] = useState('')
  const [message, setMessage] = useState<null | { type: Color, message: string }>(null)

  const handleInputImportData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImportData(event.target.value)
  }

  const handleClickImport = () => {
    try {
      const data = JSON.parse(importData)
      if (Array.isArray(data)) {
        setChecklist(data)
        setMessage({ type: 'success', message: `Imported ${data.length} fishes.` })
      } else if (Array.isArray(data.completed)) {
        setChecklist(data.completed)
        setMessage({ type: 'success', message: `Imported ${data.completed.length} fishes.` })
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
        />
        {message && <Alert variant='outlined' severity={message.type}>{message.message}</Alert>}
        <div className={classes.buttons}>
          <Button variant='contained' color='primary' onClick={handleClickImport}>Import</Button>
        </div>
      </Box>
    </Section>
  )
}

export default i18n.withTranslation('ocean-fishing')(FishTable)
