import React from 'react'
import reactStringReplace from 'react-string-replace'

// Just replace <Emphasis>asdf</Emphasis> tags right now
const TAGS_MAP: Record<string, string> = {
  Emphasis: 'em'
}

export default function renderFfxiv (markdown: string): React.ReactNode {
  return reactStringReplace(markdown, /(<Emphasis>[\s\S]*?<\/Emphasis>)/g, (match, index) => {
    if (match === null) {
      return match
    } else {
      const [, tag, content] = match.match(/^<(.+?)>([\s\S]*?)<\/\1>$/) as RegExpMatchArray
      return React.createElement(
        TAGS_MAP[tag] !== undefined ? TAGS_MAP[tag] : React.Fragment,
        { key: index },
        content // Recurse here if needed
      )
    }
  })
}
