import React from 'react'
import { useTheme, SxProps, Theme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark, github } from 'react-syntax-highlighter/dist/cjs/styles/hljs' // eslint-disable-line
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import latex from 'react-syntax-highlighter/dist/cjs/languages/hljs/latex'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('latex', latex)
SyntaxHighlighter.registerLanguage('typescript', typescript)

interface Props {
  language?: string
  sx?: SxProps<Theme>
  children: React.ReactNode
}

const Highlight = ({ language, sx, children }: Props): React.ReactElement => {
  const theme = useTheme()

  return (
    <Paper
      component={SyntaxHighlighter}
      variant='outlined'
      language={language}
      style={theme.palette.mode === 'dark' ? atomOneDark : github}
      sx={sx}
    >
      {children}
    </Paper>
  )
}

export default Highlight
