import React from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import Link from '../src/Link'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link'
import Lulu from '../public/images/lulu-icon.svg'

const useStyles = makeStyles((theme) => ({
  splash: {
    marginBottom: theme.spacing(6)
  },
  gridShrink: {
    [theme.breakpoints.up('md')]: {
      flex: '0 0 auto'
    }
  },
  gridGrow: {
    [theme.breakpoints.up('md')]: {
      flex: '1 1 0px'
    }
  },
  luluContainer: {
    width: '300px',
    height: '400px',
    margin: '0 auto',
    overflow: 'hidden',
    border: '2px solid black',
    borderRadius: '48px',
    textAlign: 'center',
    backgroundColor: theme.palette.type === 'light'
      ? fade(theme.palette.primary.main, 0.2)
      : fade(theme.palette.primary.dark, 0.5),
    [theme.breakpoints.down('sm')]: {
      width: '15rem',
      height: '15rem'
    },
    '& svg': {
      width: '300px',
      height: '600px',
      [theme.breakpoints.down('sm')]: {
        width: '12rem',
        height: '22rem'
      }
    }
  },
  luluPillow: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold'
  }
}))

type IndexSectionProps = {
  url: string,
  title: string,
  children?: React.ReactNode
}

const IndexSection = ({ url, title, children }: IndexSectionProps) => {
  return (
    <>
      <Link href={url}>
        <Typography variant='h5' display='inline'>{title}</Typography>
      </Link>
      {children}
    </>
  )
}

const Index = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container alignItems='flex-end' spacing={4} className={classes.splash}>
        <Grid item xs={12} className={classes.gridShrink}>
          <div className={classes.luluContainer}>
            <Lulu />
          </div>
        </Grid>
        <Grid item xs={12} className={classes.gridGrow}>
          <Typography variant='h4' className={classes.luluPillow}>Lulu Pillow</Typography>
          <Typography paragraph style={{ fontSize: '1.3em' }}>
            A bunch of FFXIV-related stuff I try making.
          </Typography>
          <Typography paragraph style={{ fontSize: '1.3em' }}>
            Message Lulu Pillow@Adamantoise or Pillowfication#0538 with questions or comments.
          </Typography>
        </Grid>
      </Grid>

      <IndexSection url='/high-or-low' title='High or Low'>
        <Typography paragraph>
          Calculator for the guessing game “High or Low” played against Tista-Bie in Eulmore.
        </Typography>
      </IndexSection>

      <IndexSection url='/mini-cactpot' title='Mini Cactpot'>
        <Typography paragraph>
          Calculator for the <MuiLink href='https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/goldsaucer/cactpot/'>Mini Cactpot</MuiLink> lottery.
        </Typography>
      </IndexSection>

      <IndexSection url='/ocean-fishing' title='Ocean Fishing'>
        <Typography paragraph>
          Schedule for upcoming ocean fishing voyages, with information on blue fish and achievements.
        </Typography>
      </IndexSection>

      <IndexSection url='/skywatcher' title='Skywatcher'>
        <Typography paragraph>
          Schedule for weather in Eorzea, and calculator for upcoming weather patterns.
        </Typography>
      </IndexSection>

      <IndexSection url='/wondrous-tails' title='Wondrous Tails'>
        <Typography paragraph>
          Calculator for the Wondrous Tails mini-game.
        </Typography>
      </IndexSection>
    </>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Index
