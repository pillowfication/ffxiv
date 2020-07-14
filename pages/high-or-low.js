import React from 'react'
import Page from '../src/Page'
import HighOrLowCalculator from '../src/high-or-low/HighOrLowCalculator'
import About from '../src/high-or-low/About'

export default function HighOrLow () {
  return (
    <Page title='High or Low'>
      <HighOrLowCalculator />
      <About />
    </Page>
  )
}
