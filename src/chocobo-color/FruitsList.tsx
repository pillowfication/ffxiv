import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import CheckIcon from '@material-ui/icons/Check'
import FruitIcon from './FruitIcon'
import { Fruit } from './ffxiv-chocobo-color'
import { fruits } from './ffxiv-chocobo-color/data'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  fruitsList: {
    padding: 0,
    '& > li': {
      padding: 0
    },
    '& > li > div:first-child': {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  fruitName: {
    marginLeft: theme.spacing(2)
  },
  item: {
    cursor: 'pointer',
    transition: 'all 0.1s linear'
  },
  itemChecked: {
    backgroundColor: theme.palette.type === 'dark' ? '#111111' : '#DDDDDD',
    opacity: 0.5
  },
  checkMark: {
    opacity: 0.4
  },
  checkMarkChecked: {
    opacity: 1,
    color: 'green'
  }
}))

type Props = {
  fruits: Fruit[]
}

const FruitsList = ({ fruits: fruitIds }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation('chocobo-color')
  const [checklist, setChecklist] = useState<Record<number, boolean>>({})
  const locale = i18n.language

  useEffect(() => {
    setChecklist({})
  }, [fruitIds])

  const handleClickItem = (index: number) => {
    setChecklist({ ...checklist, [index]: !checklist[index] })
  }

  return (
    <List component={Paper} dense className={classes.fruitsList}>
      {fruitIds.map((fruit, index) => (
        <ListItem
          key={index}
          divider
          className={clsx(classes.item, checklist[index] && classes.itemChecked)}
          onClick={handleClickItem.bind(null, index)}
        >
          <FruitIcon fruit={fruit} size={0.75} />
          <Typography className={classes.fruitName}>{translate(locale, fruits[fruit], 'name')}</Typography>
          <ListItemSecondaryAction>
            <CheckIcon className={clsx(classes.checkMark, checklist[index] && classes.checkMarkChecked)} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default FruitsList