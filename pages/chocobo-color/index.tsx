import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../../src/Page'
import Section from '../../src/Section'
import Link from '../../src/Link'
import Calculator from '../../src/chocobo-color/Calculator'
import { useTranslation } from '../../src/i18n'

const ChocoboColor = () => {
  const { t } = useTranslation('chocobo-color')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Section>
        <Typography paragraph>
          This calculator works by getting your chocobo’s color as close to the desired color as possible. In rare cases, this may still result in a different, nearby color to be chosen. Your chocobo’s true color values may also slightly differ from the possible colors, leading to inaccuracies. Feeding fruits in an order other than what is recommended may also cause color values to cap out, resulting in a different color.
        </Typography>
        <Typography paragraph>
          Sometimes things go wrong, and you should use a Han Lemon to reset and start over. See the <Link href='/chocobo-color/about'>About page</Link> for an in-depth explanation of the algorithm.
        </Typography>
      </Section>
      <Calculator />
    </Page>
  )
}

ChocoboColor.getInitialProps = async () => ({
  namespacesRequired: ['common', 'chocobo-color']
})

export default ChocoboColor
