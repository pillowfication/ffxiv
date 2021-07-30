import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestionCircle, faFish, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from '../../src/Link'

const PAGES = [{
  url: '/' as const,
  icon: faHome,
  name: 'Index'
}, {
  url: '/about' as const,
  icon: faQuestionCircle,
  name: 'About'
}, {
  url: '/fish' as const,
  icon: faFish,
  name: 'Fish'
}, {
  url: '/bonuses' as const,
  icon: faStar,
  name: 'Bonuses'
}]

interface Props {
  page: typeof PAGES[number]['url']
}

const useStyles = makeStyles((theme) => ({
  navigation: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    '& a': {
      color: theme.palette.text.primary,
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1, 0),
      fontSize: '1.5em'
    }
  },
  text: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

const AchievementsInformation = ({ page }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.navigation}>
      <ButtonGroup>
        {PAGES.map(({ url, icon, name }) =>
          <Button
            key={url}
            component={Link}
            href={`/ocean-fishing${url}`}
            disabled={url === page}
          >
            <FontAwesomeIcon icon={icon} fixedWidth className={classes.icon} />
            <span className={classes.text}>{name}</span>
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}

export default React.memo(AchievementsInformation)
