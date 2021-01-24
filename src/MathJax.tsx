declare var MathJax: any

import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Highlight from './Highlight'

let calledRender = false
function queueRenderMath () {
  if (typeof MathJax !== 'undefined' && !calledRender) {
    calledRender = true
    setTimeout(() => {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
      calledRender = false
    }, 0)
  }
}

const useStyles = makeStyles(theme => ({
  noMathJaxBlock: {
    marginBottom: theme.spacing(2)
  },
  noMathJaxInline: {
    fontFamily: 'monospace',
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  },
  mathJaxBlock: {
    maxWidth: '100%',
    overflowX: 'auto',
    fontSize: '1.125em'
  },
  mathJaxInline: {
  }
}))

type Props = {
  math: string,
  displayMode?: boolean
}

const MathJaxComponent = ({ math, displayMode }: Props) => {
  const classes = useStyles()

  useEffect(queueRenderMath, [math, displayMode])

  if (typeof MathJax === 'undefined') {
    return displayMode
      // @ts-ignore
      ? <Highlight language='latex' className={classes.noMathJaxBlock}>{`\\[${math}\\]`}</Highlight>
      : <span className={classes.noMathJaxInline}>{`\\(${math}\\)`}</span>
  } else {
    return displayMode
      ? <div className={classes.mathJaxBlock}>{`\\[${math}\\]`}</div>
      : <span className={classes.mathJaxInline}>{`\\(${math}\\)`}</span>
  }
}

export default MathJaxComponent

export const $ = (math: string) => <NoSsr><MathJaxComponent math={math} /></NoSsr>
export const $$ = (math: string) => <NoSsr><MathJaxComponent math={math} displayMode /></NoSsr>

export const mathJaxRequire = (module: string) => <div style={{ display: 'none' }}><MathJaxComponent math={`\\require{${module}}`} /></div>
