import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import Footer from '../src/Footer'

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Typography variant='h1' gutterBottom>{title}</Typography>
      {children}
      <Footer />
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}

export default Page
