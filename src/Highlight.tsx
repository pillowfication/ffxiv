import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Head from 'next/head'
import ReactHighlight from 'react-highlight.js'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  highlight: {
    marginBottom: theme.spacing(2),
    '& pre': {
      margin: theme.spacing(1)
    },
    '& code': {
      background: 'none'
    }
  }
}))

type Props = {
  language: string
  children: React.ReactNode,
}

const Highlight = ({ language, children }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const themeCss = theme.palette.type === 'dark' ? 'atom-one-dark' : 'github'

  return (
    <Paper variant='outlined' className={classes.highlight}>
      <Head>
        <link
          key='hljs-css'
          rel='stylesheet'
          href={`https://highlightjs.org/static/demo/styles/${themeCss}.css`}
        />
      </Head>
      <ReactHighlight language={language}>
        {children}
      </ReactHighlight>
    </Paper>
  )
}

export default Highlight
