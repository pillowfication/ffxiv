/* global MathJax */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Highlight from './Highlight'

const setImmediatePolyfill = typeof setImmediate !== 'undefined'
  ? setImmediate
  : (action) => setTimeout(action, 1)

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

const useStyles = makeStyles((theme) => ({
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

// TODO: SSR still not happy
const MathJaxComponent = ({ math, displayMode }) => {
  const [isMounted, setIsMounted] = useState(false)
  const classes = useStyles()
  useEffect(() => { isMounted && queueRenderMath() }, [isMounted, math, displayMode])
  useEffect(() => { setIsMounted(true) }, [])

  return (
    !isMounted || typeof MathJax === 'undefined'
      ? displayMode
        ? <Highlight language='latex' className={classes.noMathJaxBlock}>{`\\[${math}\\]`}</Highlight>
        : <span className={classes.noMathJaxInline}>{`\\(${math}\\)`}</span>
      : displayMode
        ? <div className={classes.mathJaxBlock}>{`\\[${math}\\]`}</div>
        : <span className={classes.mathJaxInline}>{`\\(${math}\\)`}</span>
  )
}

MathJaxComponent.propTypes = {
  math: PropTypes.string.isRequired,
  displayMode: PropTypes.bool
}

export const $ = (math) => <MathJaxComponent math={math} />
export const $$ = (math) => <MathJaxComponent math={math} displayMode />
