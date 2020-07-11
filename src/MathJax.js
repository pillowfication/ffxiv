/* global MathJax */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AirbnbPropTypes from 'airbnb-prop-types'
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
    fontSize: '1.125em'
  },
  mathJaxInline: {
  }
}))

// TODO: SSR still not happy
export default function MathJaxComponent (props) {
  const { $, $$ } = props
  const [isMounted, setIsMounted] = useState(false)
  const classes = useStyles()
  useEffect(() => { isMounted && queueRenderMath() }, [isMounted, $, $$])
  useEffect(() => { setIsMounted(true) }, [])

  return (
    !isMounted || typeof MathJax === 'undefined'
      ? $$
        ? <Highlight language='latex' className={classes.noMathJaxBlock}>{`\\[${$$}\\]`}</Highlight>
        : <span className={classes.noMathJaxInline}>{`\\(${$}\\)`}</span>
      : $$
        ? <div className={classes.mathJaxBlock}>{`\\[${$$}\\]`}</div>
        : <span className={classes.mathJaxInline}>{`\\(${$}\\)`}</span>
  )
}

const exclusivePropTypes = {
  $: PropTypes.string,
  $$: PropTypes.string
}
const exclusiveProps = Object.keys(exclusivePropTypes)

MathJaxComponent.propTypes = {
  ...Object.fromEntries(exclusiveProps.map(exclusiveProp => [
    exclusiveProp,
    AirbnbPropTypes.and([
      exclusivePropTypes[exclusiveProp],
      (props, propName, componentName) => {
        const propList = exclusiveProps.join(', ')
        const exclusivePropCount = Object.keys(props)
          .filter(prop => props[prop] != null)
          .reduce((count, prop) => (count + (exclusivePropTypes[prop] ? 1 : 0)), 0)
        if (exclusivePropCount > 1) {
          return new Error(`A ${componentName} cannot have more than one of these props: ${propList}`)
        }
        if (exclusivePropCount < 1) {
          return new Error(`A ${componentName} must have at least one of these props: ${propList}`)
        }
      }
    ])
  ]))
}
