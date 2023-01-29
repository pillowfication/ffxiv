import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { alpha } from '@mui/system'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Section from '../src/Section'
import Link from '../src/Link'
import Lulu from '../public/images/lulu-icon.svg'

const Index = (): React.ReactElement => {
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
      <Box component={Section} sx={{ mt: 2, mb: 4 }}>
        <Grid container spacing={4} alignItems='flex-end'>
          <Grid item xs={12} md='auto'>
            <Box sx={{
              width: { xs: 250, md: 300 },
              height: { xs: 250, md: 400 },
              overflow: 'hidden',
              margin: '0 auto',
              border: '2px solid black',
              borderRadius: '40px',
              backgroundColor: theme => alpha(theme.palette.primary.main, 0.25),
              textAlign: 'center',
              '& svg': {
                width: { xs: 180, md: 300 },
                height: { xs: 360, md: 600 }
              }
            }}>
              <Lulu />
            </Box>
          </Grid>
          <Grid item xs={12} md>
            <Typography variant='h4' gutterBottom>Lulu Pillow</Typography>
            <Typography paragraph style={{ fontSize: '1.3em' }}>
              {t('_description')}
            </Typography>
            <Typography paragraph style={{ fontSize: '1.3em' }}>
              Message Lulu Pillow<wbr />@Adamantoise or Pillowfication#0538 with questions or comments.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Section>
        <Stack component='dl' spacing={2}>
          {[
            { key: 'bozja', url: '/bozja' },
            { key: 'chocoboColor', url: '/chocobo-color' },
            { key: 'highOrLow', url: '/high-or-low' },
            { key: 'miniCactpot', url: '/mini-cactpot' },
            { key: 'nameGenerator', url: '/name-generator' },
            { key: 'oceanFishing', url: '/ocean-fishing' },
            { key: 'skywatcher', url: '/skywatcher' },
            { key: 'wondrousTails', url: '/wondrous-tails' },
            { key: 'zadnor', url: '/zadnor' }
          ]
            .map(({ key, url }) => ({ key, url, title: t(`${key}.title`) }))
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(({ key, url, title }) => (
              <div key={key}>
                <dt>
                  <Link href={url}>
                    <Typography variant='h5' display='inline'>{title}</Typography>
                  </Link>
                </dt>
                <Box component='dd' m={0}>
                  <Typography>{t(`${key}.description`)}</Typography>
                </Box>
              </div>
            ))}
        </Stack>
      </Section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'index']))
    }
  }
}

export default Index
