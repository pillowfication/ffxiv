import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'

const NameGenerator = () => {
  return (
    <Page title='Name Generator'>
      <Typography paragraph>
        Hello!
      </Typography>
    </Page>
  )
}

NameGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common', 'name-generator']
})

export default NameGenerator
