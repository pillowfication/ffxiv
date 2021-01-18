import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import LinkIcon from '@material-ui/icons/Link'
import ImageIcon from '@material-ui/icons/Image'

const MAX_DEPTH = 3

function isImageUrl (url: string) {
  return /^(\/|http).*\.(png|jpg)$/.test(url)
}

type Props = {
  depth: number,
  objKey?: string,
  comma?: boolean,
  onChangeUrl?: (url: string) => void,
  _isContent?: boolean // This is a weird one that I pass if the url is /content
}

const useStyles = makeStyles(theme => ({
  level: {
    listStyleType: 'none',
    margin: theme.spacing(0),
    padding: theme.spacing(0, 0, 0, 4)
  },
  collapsible: {
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    '&::before': {
      content: '"+"',
      position: 'absolute',
      left: '-1em',
      fontWeight: 'bold'
    }
  },
  collapsibleClosed: {
    '&::before': {
      content: '"-"'
    }
  },
  key: {
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? '#ff9691' : '#b75052'
  },
  function: {
    color: theme.palette.type === 'dark' ? '#c5b6ff' : '#3e20b7'
  },
  string: {
    color: theme.palette.type === 'dark' ? '#c9fdbc' : '#0b6300',
    'a&': {
      cursor: 'pointer'
    }
  },
  icon: {
    display: 'inline-block',
    position: 'relative',
    width: '1.5em',
    color: theme.palette.text.primary,
    opacity: 0.5,
    '& > svg': {
      position: 'absolute',
      left: 0,
      bottom: '-0.2em'
    }
  },
  number: {
    color: theme.palette.type === 'dark' ? '#c5b6ff' : '#3e20b7'
  },
  undefined: {
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? '#c5b6ff' : '#3e20b7'
  },
  null: {
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? '#c5b6ff' : '#3e20b7'
  },
}))

const JSONObject = ({ data, opt: { depth, objKey, comma, onChangeUrl, _isContent } }: { data: object, opt: Props }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(depth <= MAX_DEPTH)

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  if (!open) {
    return (
      <>
        <span onClick={handleToggleOpen} className={clsx(classes.collapsible, !open && classes.collapsibleClosed)}>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}{'{ ... }'}{comma && ','}
        </span>
        <br />
      </>
    )
  } else {
    return (
      <>
        <span onClick={handleToggleOpen} className={clsx(classes.collapsible, !open && classes.collapsibleClosed)}>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}{'{'}
        </span>
        <br />
        <ul className={classes.level}>
          {Object.keys(data).map((key, index, array) => (
            <li key={index}>
              {renderJSON(data[key], { depth: depth + 1, objKey: key, comma: index !== array.length - 1, onChangeUrl, _isContent })}
            </li>
          ))}
        </ul>
        <span>{'}'}{comma && ','}</span>
        <br />
      </>
    )
  }
}

const JSONArray = ({ data, opt: { depth, objKey, comma, onChangeUrl, _isContent } }: { data: any[], opt: Props }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(depth <= MAX_DEPTH)

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  if (!open) {
    return (
      <>
        <span onClick={handleToggleOpen} className={clsx(classes.collapsible, !open && classes.collapsibleClosed)}>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}{'[ ... ]'}{comma && ','}
        </span>
        <br />
      </>
    )
  } else {
    return (
      <>
        <span onClick={handleToggleOpen} className={clsx(classes.collapsible, !open && classes.collapsibleClosed)}>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}{'['}
        </span>
        <br />
        <ul className={classes.level}>
          {data.map((datum, index) => (
            <li key={index}>
              {renderJSON(datum, { depth: depth + 1, comma: index !== data.length - 1, onChangeUrl, _isContent })}
            </li>
          ))}
        </ul>
        <span>{']'}{comma && ','}</span>
        <br />
      </>
    )
  }
}

const JSONString = ({ data, opt: { objKey, comma, onChangeUrl, _isContent } }: { data: string, opt: Props }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  if (_isContent || objKey === 'Url') {
    return (
      <>
        <span>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<Link onClick={() => onChangeUrl(_isContent ? `/${data}` : data)} className={classes.string}>"{data}"{!_isContent && <> <div className={classes.icon}><LinkIcon /></div></>}</Link>{comma && ','}
        </span>
        <br />
      </>
    )
  } else if (isImageUrl(data)) {
    return (
      <>
        <span>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<Link onClick={handleToggleOpen} className={classes.string}>"{data}" <div className={classes.icon}><ImageIcon /></div></Link>{comma && ','}
        </span>
        {open && (
          <>
            <br />
            <img src={data.startsWith('http') ? data : `https://xivapi.com${data}`} />
          </>
        )}
        <br />
      </>
    )
  } else {
    return (
      <>
        <span>
          {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<span className={classes.string}>"{data}"</span>{comma && ','}
        </span>
        <br />
      </>
    )
  }
}

const JSONFunction = ({ data, opt: { objKey, comma } }: { data: Function, opt: Props }) => {
  const classes = useStyles()

  return (
    <>
      <span>
        {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<span className={classes.function}>{String(data)}</span>{comma && ','}
      </span>
      <br />
    </>
  )
}

const JSONNumber = ({ data, opt: { objKey, comma } }: { data: number, opt: Props }) => {
  const classes = useStyles()

  return (
    <>
      <span>
        {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<span className={classes.number}>{data}</span>{comma && ','}
      </span>
      <br />
    </>
  )
}

const JSONUndefined = ({ opt: { objKey, comma } }: { data: string, opt: Props }) => {
  const classes = useStyles()

  return (
    <>
      <span>
        {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<span className={classes.undefined}>undefined</span>{comma && ','}
      </span>
      <br />
    </>
  )
}

const JSONNull = ({ opt: { objKey, comma } }: { data: string, opt: Props }) => {
  const classes = useStyles()

  return (
    <>
      <span>
        {objKey && <span className={classes.key}>{`"${objKey}": `}</span>}<span className={classes.null}>null</span>{comma && ','}
      </span>
      <br />
    </>
  )
}

export default function renderJSON (data: any, opt: Props) {
  if (data === undefined) return <JSONUndefined data={data} opt={opt} />
  if (data === null) return <JSONNull data={data} opt={opt} />

  switch (typeof data) {
    case 'object': {
      return Array.isArray(data)
        ? <JSONArray data={data} opt={opt} />
        : <JSONObject data={data} opt={opt} />
    }
    case 'function': return <JSONFunction data={data} opt={opt} />
    case 'string': return <JSONString data={data} opt={opt} />
    case 'number': return <JSONNumber data={data} opt={opt} />
    default:
      console.log(typeof data, data)
      return <JSONString data='???' opt={opt} />
  }
}
