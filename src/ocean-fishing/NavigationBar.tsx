import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestionCircle, faFish, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from '../../src/Link'

const NavigationBar = (): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  return (
    <Box component='nav' sx={{ textAlign: 'center', mb: 2 }}>
      <ButtonGroup variant='contained'>
        {[{
          url: '/',
          icon: faHome,
          name: '_title'
        }, {
          url: '/about',
          icon: faQuestionCircle,
          name: 'aboutPage._title'
        }, {
          url: '/fish',
          icon: faFish,
          name: 'fishPage._title'
        }, {
          url: '/bonuses',
          icon: faStar,
          name: 'bonusesPage._title'
        }]
          .map(({ url, icon, name }) =>
            <Button key={url} component={Link} href={`/ocean-fishing${url}`}>
              <Box sx={{ display: 'inline-block', mr: { xs: 0, sm: 1 }, fontSize: { xs: '1.5em', sm: '1em' } }}>
                <FontAwesomeIcon icon={icon} />
              </Box>
              <Typography sx={{ display: { xs: 'none', sm: 'inline' }, textTransform: 'none' }}>{t(name)}</Typography>
            </Button>
          )
        }
      </ButtonGroup>
    </Box>
  )
}

export default React.memo(NavigationBar)
