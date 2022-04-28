import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
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
import { useTranslation } from '../i18n'

// const useStyles = makeStyles(theme => ({
//   fruitsList: {
//     padding: 0,
//     '& > li': {
//       padding: theme.spacing(0.25, 0)
//     },
//     '& > li > div:first-child': {
//       paddingTop: 0,
//       paddingBottom: 0
//     }
//   },
//   counter: {
//     width: '2em',
//     marginRight: theme.spacing(2),
//     textAlign: 'right'
//   },
//   fruitName: {
//     marginLeft: theme.spacing(2)
//   },
//   item: {
//     cursor: 'pointer',
//     transition: 'all 0.1s linear'
//   },
//   itemChecked: {
//     backgroundColor: theme.palette.type === 'dark' ? '#111111' : '#DDDDDD',
//     opacity: 0.5
//   },
//   checkUnchecked: {
//     opacity: 0.33
//   },
//   checkChecked: {
//     color: theme.palette.success.main
//   }
// }))

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
      <List component='ol' dense sx={{ p: 0 }}>
        {fruitIds.map((fruit, index) => (
          <ListItem
            key={index}
            divider
            ContainerProps={{
              onClick: handleClickItem.bind(null, index),
              sx: {
                cursor: 'pointer',
                backgroundColor: checklist[index] ? 'lightgray' : 'none',
                transition: 'background-color 0.1s linear'
              }
            }}
          >
            <Typography variant='body2' sx={{
              width: '2em',
              textAlign: 'center'
            }}>
              {index + 1}
            </Typography>
            <Box display='inline-block' mr={1}>
              <FruitIcon fruit={fruit} size={0.9} />
            </Box>
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
