import React from 'react'
import { useTranslation } from 'next-i18next'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import { translate } from './ffxiv-chocobo-color'
import { Shade, Color } from './ffxiv-chocobo-color/data'

interface Props {
  shade: Shade
  color: Color
  selected?: boolean
  onClick?: () => void
}

const ShadeButton = ({ shade, color, selected = false, onClick }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Tooltip title={translate('shade', shade, locale)}>
      <Paper component='span' onClick={onClick} sx={{
        display: 'inline-block',
        width: '2.5em',
        height: '2.5em',
        backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
        borderStyle: 'solid',
        borderWidth: selected ? 3 : 1,
        borderColor: selected ? 'primary.light' : '#00000055',
        borderRadius: '50%',
        m: 0.75,
        cursor: 'pointer'
      }} />
    </Tooltip>
  )
}

export default ShadeButton
