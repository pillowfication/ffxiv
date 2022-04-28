import React from 'react'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import { useTranslation } from '../i18n'

interface Props {
  strength: 1 | 2 | 3
  size?: 'small' | 'normal' | 'large'
}

const Tug = ({ strength, size = 'normal' }: Props): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
  switch (strength) {
    case 1:
      return (
        <Tooltip arrow placement='top' title={t('tug.light') as string}>
          <Paper component='span' sx={{
            display: 'inline-block',
            width: '1.2em',
            height: '1.2em',
            borderRadius: '0.2em',
            fontWeight: 'bold',
            fontSize: size === 'small' ? '0.95em' : size === 'large' ? '1.33em' : '1em',
            lineHeight: '1.2em',
            textAlign: 'center',
            backgroundColor: theme => theme.palette.mode === 'dark' ? '#078203' : '#aaffaa'
          }}>
            !
          </Paper>
        </Tooltip>
      )
    case 2:
      return (
        <Tooltip arrow placement='top' title={t('tug.medium') as string}>
          <Paper component='span' sx={{
            display: 'inline-block',
            width: '1.2em',
            height: '1.2em',
            borderRadius: '0.2em',
            fontWeight: 'bold',
            fontSize: size === 'small' ? '0.95em' : size === 'large' ? '1.33em' : '1em',
            lineHeight: '1.2em',
            textAlign: 'center',
            backgroundColor: theme => theme.palette.mode === 'dark' ? '#195ecf' : '#aaaaff'
          }}>
            !!
          </Paper>
        </Tooltip>
      )
    case 3:
      return (
        <Tooltip arrow placement='top' title={t('tug.heavy') as string}>
          <Paper component='span' sx={{
            display: 'inline-block',
            width: '1.2em',
            height: '1.2em',
            borderRadius: '0.2em',
            fontWeight: 'bold',
            fontSize: size === 'small' ? '0.95em' : size === 'large' ? '1.33em' : '1em',
            lineHeight: '1.2em',
            textAlign: 'center',
            backgroundColor: theme => theme.palette.mode === 'dark' ? '#9e0000' : '#ffaaaa'
          }}>
            !!!
          </Paper>
        </Tooltip>
      )
  }
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
}

export default React.memo(Tug)
