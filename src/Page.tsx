import React from 'react'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import Footer from '../src/Footer'

type Props = {
  title?: string,
  children?: React.ReactNode
}

const Page = ({ title, children }: Props) => {
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

export default Page
