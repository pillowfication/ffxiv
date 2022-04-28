import React from 'react'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import translate from '../translate'
import { Stain, Color } from './ffxiv-chocobo-color'
import { useTranslation } from '../i18n'

interface Props {
  stain?: Stain
  color?: Color
  inline?: boolean
  selected?: boolean
  onClick?: () => void
  className?: string
}

const StainButton = ({ stain, color, inline = false, selected = false, onClick }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const stainColor = (stain !== undefined ? stain.color : color) as any as Color
  const title = stain !== undefined
    ? translate(locale, stain, 'name')
    : `(${String(color?.R)}, ${String(color?.G)}, ${String(color?.B)})`

  return (
    <Tooltip
      placement='top'
      arrow
      disableInteractive
      title={title}
    >
      <Paper
        component='span'
        square
        sx={{
          display: 'inline-block',
          width: inline ? '1em' : '2em',
          height: inline ? '1em' : '2em',
          backgroundColor: `rgb(${stainColor.R},${stainColor.G},${stainColor.B})`,
          borderStyle: 'solid',
          borderWidth: selected ? 3 : 1,
          borderColor: selected ? 'primary.main' : '#00000055',
          m: 0.5,
          lineHeight: '100%',
          verticalAlign: inline ? 'text-bottom' : 'middle',
          cursor: onClick === undefined ? undefined : 'pointer'
        }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default StainButton
