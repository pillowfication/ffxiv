import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles, alpha } from '@material-ui/core/styles'
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
      ? alpha(theme.palette.primary.main, 0.2)
      : alpha(theme.palette.primary.dark, 0.5),
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

interface IndexSectionProps {
  url: string
  title: string
  children?: React.ReactNode
}

const IndexSection = ({ url, title, children }: IndexSectionProps): React.ReactElement => {
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

const Index = (): React.ReactElement => {
  const classes = useStyles()
  const router = useRouter()
  const { t, i18n } = useTranslation('index')

  return (
    <>
      <NextSeo
        title='Lulu’s Tools'
        description='A bunch of FFXIV-related stuff I try making.'
        canonical={`https://ffxiv.pf-n.co${router.asPath}`}
        openGraph={{
          url: `https://ffxiv.pf-n.co${router.asPath}`,
          title: t('_title'),
          description: t('_description'),
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
            {t('_description')}
          </Typography>
          <Typography paragraph style={{ fontSize: '1.3em' }}>
            Message Lulu Pillow@Adamantoise or Pillowfication#0538 with questions or comments.
          </Typography>
        </Grid>
      </Grid>
      <Section>
        <dl className={classes.links}>
          {[
            { key: 'bozja', url: '/bozja' },
            { key: 'chocoboColor', url: '/chocobo-color' },
            { key: 'highOrLow', url: '/high-or-low' },
            { key: 'miniCactpot', url: '/mini-cactpot' },
            { key: 'nameGenerator', url: '/name-generator' },
            { key: 'oceanFishing', url: '/ocean-fishing' },
            { key: 'skywatcher', url: '/skywatcher' },
            { key: 'wondrousTails', url: '/wondrous-tails' },
            { key: 'xivapi', url: '/xivapi' },
            { key: 'zadnor', url: '/zadnor' }
          ]
            .map(({ key, url }) => ({ key, url, title: t(`${key}.title`) }))
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(({ key, url, title }) => (
              <IndexSection key={key} url={url} title={title}>
                {t(`${key}.description`)}
              </IndexSection>
            ))}
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
