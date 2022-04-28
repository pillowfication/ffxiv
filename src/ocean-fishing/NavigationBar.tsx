import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestionCircle, faFish, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from '../../src/Link'
import { useTranslation } from '../i18n'

const PAGES = [{
  url: '/' as const,
  icon: faHome,
  name: '_title'
}, {
  url: '/about' as const,
  icon: faQuestionCircle,
  name: 'aboutPage._title'
}, {
  url: '/fish' as const,
  icon: faFish,
  name: 'fishPage._title'
}, {
  url: '/bonuses' as const,
  icon: faStar,
  name: 'bonusesPage._title'
}]

interface Props {
  page: typeof PAGES[number]['url']
}

// const useStyles = makeStyles(theme => ({
//   navigation: {
//     marginBottom: theme.spacing(2),
//     textAlign: 'center',
//     '& a': {
//       color: theme.palette.text.primary,
//       textTransform: 'none',
//       borderRightColor: `${theme.palette.type === 'light' ? theme.palette.grey[500] : theme.palette.grey[700]} !important`,
//       '&:hover': {
//         textDecoration: 'none'
//       }
//     }
//   },
//   icon: {
//     [theme.breakpoints.down('xs')]: {
//       margin: theme.spacing(1, 0),
//       fontSize: '1.5em'
//     }
//   },
//   text: {
//     marginLeft: theme.spacing(1),
//     [theme.breakpoints.down('xs')]: {
//       display: 'none'
//     }
//   }
// }))

const AchievementsInformation = ({ page }: Props): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  return (
    <nav className={'classes.navigation'}>
      <ButtonGroup variant='contained'>
        {PAGES.map(({ url, icon, name }) =>
          <Button
            key={url}
            component={Link}
            href={`/ocean-fishing${url}`}
            disabled={url === page}
          >
            <FontAwesomeIcon icon={icon} fixedWidth className={'classes.icon'} />
            <span className={'classes.text'}>{t(name)}</span>
          </Button>
        )}
      </ButtonGroup>
    </nav>
  )
}

export default React.memo(AchievementsInformation)
