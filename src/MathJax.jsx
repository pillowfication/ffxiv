/* global MathJax */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AirbnbPropTypes from 'airbnb-prop-types'

import zf from './foundation.scss'
import styles from './MathJax.scss'

let calledRender = false
function queueRenderMath () {
  if (typeof MathJax !== 'undefined' && !calledRender) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub])
    calledRender = true
    setImmediate(() => {
      calledRender = false
    })
  }
}

class _MathJax extends Component {
  componentDidMount () {
    queueRenderMath()
  }

  componentDidUpdate () {
    queueRenderMath()
  }

  render () {
    return typeof MathJax === 'undefined'
      ? this.props.$$
        ? <div className={styles.noMathjax}><pre>{`\\[${this.props.$$}\\]`}</pre></div>
        : <span className={styles.noMathjax}>{`\\(${this.props.$}\\)`}</span>
      : this.props.$$
        ? <div className={zf.scroller}><p>{`\\[${this.props.$$}\\]`}</p></div>
        : <span>{`\\(${this.props.$}\\)`}</span>
  }
}

const exclusivePropTypes = {
  $: PropTypes.string,
  $$: PropTypes.string
}
const exclusiveProps = Object.keys(exclusivePropTypes)

_MathJax.propTypes = {
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

export default _MathJax
