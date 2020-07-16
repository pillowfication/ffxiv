import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/high-or-low/Calculator'
import About from '../src/high-or-low/About'

const HighOrLow = () => {
  return (
    <Page title='High or Low'>
      <Calculator />
      <About />
    </Page>
  )
}

export default HighOrLow
