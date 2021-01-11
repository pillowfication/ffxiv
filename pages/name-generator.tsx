import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import generateElezen from '../src/name-generator/generate-elezen'
import { Clan, Gender } from '../src/name-generator/types'

const NameGenerator = () => {
  return (
    <Page title='Name Generator'>
      <Typography paragraph>
        {Array(10).fill(null).map(() => generateElezen(Clan.Wildwood, Gender.Male)).join(', ')}
      </Typography>
    </Page>
  )
}

NameGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common', 'name-generator']
})

export default NameGenerator
