declare var MathJax: any

import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Highlight from './Highlight'

const setImmediatePolyfill = typeof setImmediate !== 'undefined'
  ? setImmediate
  : (action: Function) => setTimeout(action, 1)

let calledRender = false
function queueRenderMath () {
  if (typeof MathJax !== 'undefined' && !calledRender) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub])
    calledRender = true
    setImmediatePolyfill(() => {
      calledRender = false
    })
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { isMounted && queueRenderMath() }, [isMounted, math, displayMode])
  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted || typeof MathJax === 'undefined') {
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
