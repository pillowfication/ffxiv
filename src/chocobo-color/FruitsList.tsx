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
      padding: theme.spacing(0.25, 0)
    },
    '& > li > div:first-child': {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  counter: {
    width: '2em',
    marginRight: theme.spacing(2),
    textAlign: 'right'
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

interface Props {
  fruits: Fruit[]
}

const FruitsList = ({ fruits: fruitIds }: Props): React.ReactElement => {
  const classes = useStyles()
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
      <List component='ol' dense className={classes.fruitsList}>
        {fruitIds.map((fruit, index) => (
          <ListItem
            key={index}
            divider
            ContainerProps={{
              className: clsx(classes.item, checklist[index] && classes.itemChecked),
              onClick: handleClickItem.bind(null, index)
            }}
          >
            <Typography variant='body2' className={classes.counter}>{index + 1}</Typography>
            <FruitIcon fruit={fruit} size={0.9} />
            <Typography className={classes.fruitName}>{translate(locale, fruits[fruit], 'name')}</Typography>
            <ListItemSecondaryAction>
              <CheckIcon className={clsx(classes.checkMark, checklist[index] && classes.checkMarkChecked)} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default FruitsList
