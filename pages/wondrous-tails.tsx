import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/wondrous-tails/Calculator'

const WondrousTails = () => {
  return (
    <Page title='Wondrous Tails'>
      <Calculator />
    </Page>
  )
}

WondrousTails.getInitialProps = async () => ({
  namespacesRequired: ['common', 'wondrous-tails']
})

export default WondrousTails
