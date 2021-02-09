import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import translate from '../translate'
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
  },
  inline: {
    margin: 0,
    fontSize: '0.75em',
    verticalAlign: 'text-bottom'
  }
}))

interface Props {
  stain?: Stain
  color?: Color
  inline?: boolean
  selected?: boolean
  onClick?: () => void
  className?: string
}

const StainButton = ({ stain, color, inline = false, selected = false, onClick, className }: Props): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const locale = i18n.language
  const stainColor = (stain !== undefined ? stain.color : color) as any as Color
  const title = stain !== undefined
    ? translate(locale, stain, 'name')
    : `(${String(color?.R)}, ${String(color?.G)}, ${String(color?.B)})`

  return (
    <Tooltip placement='top' arrow title={title}>
      <Paper
        component='span'
        square
        className={clsx(
          classes.stainButton,
          inline && classes.inline,
          selected && classes.selected,
          onClick !== undefined && classes.clickable,
          className
        )}
        style={{ backgroundColor: `rgb(${stainColor.R},${stainColor.G},${stainColor.B})` }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default StainButton
