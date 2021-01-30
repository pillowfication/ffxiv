import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import { translate } from '../utils'
import { Stain, Color } from './ffxiv-chocobo-color'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  stainButton: {
    display: 'inline-block',
    width: '2em',
    height: '2em',
    margin: theme.spacing(0.5),
    border: '1px solid #0005'
  },
  clickable: {
    cursor: 'pointer'
  },
  selected: {
    border: `3px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
  }
}))

type Props = {
  stain?: Stain,
  color?: Color,
  selected?: boolean,
  onClick?: () => void,
  className?: string
}

const StainButton = ({ stain, color, selected, onClick, className }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const locale = i18n.language
  const stainColor = stain ? stain.color : color
  const title = stain ? translate(locale, stain, 'name') : `(${color.R}, ${color.G}, ${color.B})`

  return (
    <Tooltip placement='top' arrow title={title}>
      <Paper
        component='span'
        square
        className={clsx(classes.stainButton, selected && classes.selected, onClick && classes.clickable, className)}
        style={{ backgroundColor: `rgb(${stainColor.R},${stainColor.G},${stainColor.B})` }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default StainButton
