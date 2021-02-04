import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  tug: {
    display: 'inline-block',
    width: '1.2em',
    height: '1.2em',
    borderRadius: '0.2em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    textAlign: 'center'
  },
  small: {
    fontSize: '0.95em'
  },
  light: {
    backgroundColor: theme.palette.type === 'dark' ? '#078203' : '#aaffaa'
  },
  medium: {
    backgroundColor: theme.palette.type === 'dark' ? '#195ecf' : '#aaaaff'
  },
  heavy: {
    backgroundColor: theme.palette.type === 'dark' ? '#9e0000' : '#ffaaaa'
  }
}))

interface Props {
  strength: 1 | 2 | 3
  size?: 'small' | 'normal'
  className?: string
}

const Tug = ({ strength, size = 'normal', className }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('ocean-fishing')

  switch (strength) {
    case 1:
      return (
        <Tooltip arrow placement='top' title={String(t('tug.light'))}>
          <Paper component='span' className={clsx(classes.tug, size === 'small' && classes.small, classes.light, className)}>!</Paper>
        </Tooltip>
      )
    case 2:
      return (
        <Tooltip arrow placement='top' title={String(t('tug.medium'))}>
          <Paper component='span' className={clsx(classes.tug, size === 'small' && classes.small, classes.medium, className)}>!!</Paper>
        </Tooltip>
      )
    case 3:
      return (
        <Tooltip arrow placement='top' title={String(t('tug.heavy'))}>
          <Paper component='span' className={clsx(classes.tug, size === 'small' && classes.small, classes.heavy, className)}>!!!</Paper>
        </Tooltip>
      )
  }
}

export default React.memo(Tug)
