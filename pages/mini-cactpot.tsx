import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/mini-cactpot/Calculator'
import About from '../src/mini-cactpot/About'

const MiniCactpot = () => {
  return (
    <Page title='Mini Cactpot'>
      <Calculator />
      <About />
    </Page>
  )
}

MiniCactpot.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mini-cactpot']
})

export default MiniCactpot
