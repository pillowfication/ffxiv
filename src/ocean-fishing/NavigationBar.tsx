import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Link from '../../src/Link'

const PAGES = [{
  url: '/',
  name: 'Index'
}, {
  url: '/about',
  name: 'About'
}, {
  url: '/fish',
  name: 'Fish'
}, {
  url: '/bonuses',
  name: 'Bonuses'
}] as const

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
  }
}))

const AchievementsInformation = ({ page }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.navigation}>
      <ButtonGroup>
        {PAGES.map(({ url, name }) =>
          <Button
            key={url}
            component={Link}
            href={`/ocean-fishing${url}`}
            disabled={url === page}
          >
            {name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}

export default React.memo(AchievementsInformation)
