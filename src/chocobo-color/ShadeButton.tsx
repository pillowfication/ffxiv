import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import { translate } from './ffxiv-chocobo-color'
import { Shade, Color } from './ffxiv-chocobo-color/data'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  shadeButton: {
    display: 'inline-block',
    width: '2.5em',
    height: '2.5em',
    margin: theme.spacing(0.75),
    border: '1px solid #0005',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  selected: {
    border: `3px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
  }
}))

type Props = {
  shade: Shade,
  color: Color,
  selected?: boolean,
  onClick: () => void
}

const ShadeButton = ({ shade, color, selected, onClick }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Tooltip placement='top' arrow title={translate('shade', shade, locale)}>
      <Paper
        className={clsx(classes.shadeButton, selected && classes.selected)}
        style={{ backgroundColor: `rgb(${color.R},${color.G},${color.B})` }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default ShadeButton
