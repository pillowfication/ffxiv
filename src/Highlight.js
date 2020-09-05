import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import cn from 'classnames'
import Head from 'next/head'
import ReactHighlight from 'react-highlight.js'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
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

const Highlight = ({ className, ...props }) => {
  const theme = useTheme()
  const classes = useStyles()
  const themeCss = theme.palette.type === 'dark' ? 'atom-one-dark' : 'github'

  return (
    <Paper variant='outlined' className={cn(classes.highlight, className)}>
      <Head>
        <link
          key='hljs-css'
          rel='stylesheet'
          href={`https://highlightjs.org/static/demo/styles/${themeCss}.css`}
        />
      </Head>
      <ReactHighlight {...props} />
    </Paper>
  )
}

export default Highlight
