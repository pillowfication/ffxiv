import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import { translate } from '../utils'
import { Stain } from './ffxiv-chocobo-color/data'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  stainButton: {
    display: 'inline-block',
    width: '2em',
    height: '2em',
    margin: theme.spacing(0.5),
    border: '1px solid #0005',
    cursor: 'pointer'
  },
  selected: {
    border: `3px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
  }
}))

type Props = {
  stain: Stain,
  selected?: boolean,
  onClick: () => void
}

const StainButton = ({ stain, selected, onClick }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Tooltip placement='top' arrow title={translate(locale, stain, 'name')}>
      <Paper
        square
        className={clsx(classes.stainButton, selected && classes.selected)}
        style={{ backgroundColor: `rgb(${stain.color.R},${stain.color.G},${stain.color.B})` }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default StainButton
