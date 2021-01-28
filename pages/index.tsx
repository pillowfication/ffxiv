import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles, fade } from '@material-ui/core/styles'
import { NextSeo } from 'next-seo'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Section from '../src/Section'
import Footer from '../src/Footer'
import Link from '../src/Link'
import Lulu from '../public/images/lulu-icon.svg'
import { useTranslation } from '../src/i18n'

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
  },
  links: {
    '& dd': {
      margin: theme.spacing(0, 0, 2)
    }
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
      <dt>
        <Link href={url}>
          <Typography variant='h5' display='inline'>{title}</Typography>
        </Link>
      </dt>
      <dd>
        <Typography paragraph>
          {children}
        </Typography>
      </dd>
    </>
  )
}

const Index = () => {
  const classes = useStyles()
  const router = useRouter()
  const { i18n } = useTranslation()

  return (
    <>
      <NextSeo
        title='Lulu’s Tools'
        description='A bunch of FFXIV-related stuff I try making.'
        canonical={`https://ffxiv.pf-n.co${router.asPath}`}
        openGraph={{
          url: `https://ffxiv.pf-n.co${router.asPath}`,
          title: 'Lulu’s Tools',
          description: 'A bunch of FFXIV-related stuff I try making.',
          locale: i18n.language,
          site_name: 'Lulu’s Tools'
        }}
      />
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
      <Section>
        <dl className={classes.links}>
          <IndexSection url='/chocobo-color' title='Chocobo Color'>
            Calculator for changing your chocobo’s color.
          </IndexSection>
          <IndexSection url='/high-or-low' title='High or Low'>
            Calculator for the guessing game “High or Low” played against Tista-Bie in Eulmore.
          </IndexSection>
          <IndexSection url='/mini-cactpot' title='Mini Cactpot'>
            Calculator for the Mini Cactpot lottery.
          </IndexSection>
          <IndexSection url='/name-generator' title='Name Generator'>
            FFXIV random name generator for all the races.
          </IndexSection>
          <IndexSection url='/ocean-fishing' title='Ocean Fishing'>
            Schedule for upcoming ocean fishing voyages with information on blue fish, achievements, and more.
          </IndexSection>
          <IndexSection url='/skywatcher' title='Skywatcher'>
            Schedule for weather in Eorzea and forecaster for upcoming weather patterns.
          </IndexSection>
          <IndexSection url='/wondrous-tails' title='Wondrous Tails'>
            Calculator for the Wondrous Tails mini-game.
          </IndexSection>
          <IndexSection url='/xivapi' title='XIVAPI'>
            An interface for browsing the XIVAPI.
          </IndexSection>
        </dl>
      </Section>
      <Footer />
    </>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'index']
})

export default Index
