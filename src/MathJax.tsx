import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Highlight from './Highlight'

declare const MathJax: any

let calledRender = false
function queueRenderMath (): void {
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
  }
}))

interface Props {
  math: string
  displayMode?: boolean
}

const MathJaxComponent = ({ math, displayMode = false }: Props): React.ReactElement => {
  const classes = useStyles()

  useEffect(queueRenderMath, [math, displayMode])

  if (typeof MathJax === 'undefined') {
    return displayMode
      // @ts-expect-error
      ? <Highlight language='latex' className={classes.noMathJaxBlock}>{`\\[${math}\\]`}</Highlight>
      : <span className={classes.noMathJaxInline}>{`\\(${math}\\)`}</span>
  } else {
    return displayMode
      ? <div className={classes.mathJaxBlock}>{`\\[${math}\\]`}</div>
      : <span>{`\\(${math}\\)`}</span>
  }
}

export default MathJaxComponent

export const $ = (math: string): React.ReactElement => (
  <NoSsr><MathJaxComponent math={math} /></NoSsr>
)

export const $$ = (math: string): React.ReactElement => (
  <NoSsr><MathJaxComponent math={math} displayMode /></NoSsr>
)

export const mathJaxRequire = (module: string): React.ReactElement => (
  <NoSsr><div style={{ display: 'none' }}><MathJaxComponent math={`\\require{${module}}`} /></div></NoSsr>
)
