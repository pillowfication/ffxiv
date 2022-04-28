import React, { useEffect } from 'react'
import NoSsr from '@mui/material/NoSsr'

declare const MathJax: any

let calledRender = false
function queueRenderMath (): void {
  if (!calledRender) {
    calledRender = true
    setTimeout(() => {
      if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub])
      }
      calledRender = false
    }, 0)
  }
}

interface Props {
  math: string
  displayMode?: boolean
}

const MathJaxComponent = ({ math, displayMode = false }: Props): React.ReactElement => {
  useEffect(queueRenderMath, [math, displayMode])
  return displayMode
    ? <div>{`\\[${math}\\]`}</div>
    : <span>{`\\(${math}\\)`}</span>
}

export default MathJaxComponent

export const $ = (math: string): React.ReactElement => (
  <NoSsr>
    <MathJaxComponent math={math} />
  </NoSsr>
)

export const $$ = (math: string): React.ReactElement => (
  <NoSsr>
    <MathJaxComponent math={math} displayMode />
  </NoSsr>
)

export const mathJaxRequire = (module: string): React.ReactElement => (
  <NoSsr>
    <div style={{ display: 'none' }}>
      <MathJaxComponent math={`\\require{${module}}`} />
    </div>
  </NoSsr>
)
