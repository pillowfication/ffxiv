import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import i18n from '../../i18n'
import { TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  tug: {
    display: 'inline-block',
    width: '1.2em',
    height: '1.2em',
    borderRadius: '0.2em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    textAlign: 'center'
  },
  sup: {
    position: 'absolute',
    left: '2.25em',
    top: 0
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

type Props = {
  strength: 1 | 2 | 3,
  sup?: boolean,
  className?: string,
  t: TFunction
}

const Tug = ({ strength, sup, className, t }: Props) => {
  const classes = useStyles()

  switch (strength) {
    case 1:
      return (
        <Tooltip arrow placement='top' title={t('tug-light')}>
          <span className={clsx(classes.tug, sup && classes.sup, classes.light, className)}>!</span>
        </Tooltip>
      )
    case 2:
      return (
        <Tooltip arrow placement='top' title={t('tug-medium')}>
          <span className={clsx(classes.tug, sup && classes.sup, classes.medium, className)}>!!</span>
        </Tooltip>
      )
    case 3:
      return (
        <Tooltip arrow placement='top' title={t('tug-heavy')}>
          <span className={clsx(classes.tug, sup && classes.sup, classes.heavy, className)}>!!!</span>
        </Tooltip>
      )
  }
}

export default i18n.withTranslation('ocean-fishing')(Tug)
