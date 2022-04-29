import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { alpha } from '@mui/system'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import CheckIcon from '@mui/icons-material/Check'
import FruitIcon from './FruitIcon'
import { Fruit } from './ffxiv-chocobo-color'
import { fruits } from './ffxiv-chocobo-color/data'
import translate from '../translate'

interface Props {
  fruits: Fruit[]
}

const FruitsList = ({ fruits: fruitIds }: Props): React.ReactElement => {
  const { i18n } = useTranslation('chocobo-color')
  const [checklist, setChecklist] = useState<Record<number, boolean>>({})
  const locale = i18n.language

  useEffect(() => {
    setChecklist({})
  }, [fruitIds])

  const handleClickItem = (index: number): void => {
    setChecklist({ ...checklist, [index]: !checklist[index] })
  }

  return (
    <Paper>
      <List component='ol' sx={{ p: 0 }}>
        {fruitIds.map((fruit, index) => (
          <ListItem
            key={index}
            divider
            onClick={handleClickItem.bind(null, index)}
            sx={{
              cursor: 'pointer',
              backgroundColor: checklist[index] ? theme => alpha(theme.palette.secondary.light, 0.5) : 'none'
            }}
          >
            <Typography sx={{ width: '2em', textAlign: 'center' }}>{index + 1}</Typography>
            <FruitIcon fruit={fruit} size={0.9} sx={{ verticalAlign: 'middle', mr: 1 }} />
            <Typography>{translate(locale, fruits[fruit], 'name')}</Typography>
            <ListItemSecondaryAction>
              <CheckIcon sx={{ color: checklist[index] ? 'success.main' : 'lightgray' }} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default FruitsList
