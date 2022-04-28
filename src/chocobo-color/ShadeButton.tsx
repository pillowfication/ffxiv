import React from 'react'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import { translate } from './ffxiv-chocobo-color'
import { Shade, Color } from './ffxiv-chocobo-color/data'
import { useTranslation } from '../i18n'

interface Props {
  shade: Shade
  color: Color
  selected?: boolean
  onClick?: () => void
  className?: string
}

const ShadeButton = ({ shade, color, selected = false, onClick }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Tooltip
      placement='top'
      arrow
      disableInteractive
      title={translate('shade', shade, locale)}
    >
      <Paper
        component='span'
        sx={{
          display: 'inline-block',
          width: '2.5em',
          height: '2.5em',
          backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
          borderStyle: 'solid',
          borderWidth: selected ? 3 : 1,
          borderColor: selected ? 'primary.main' : '#00000055',
          borderRadius: '50%',
          m: 0.75,
          cursor: 'pointer'
        }}
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default ShadeButton
