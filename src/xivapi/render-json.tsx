import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import LinkIcon from '@mui/icons-material/Link'
import ImageIcon from '@mui/icons-material/Image'

const MAX_DEPTH = 3

function isImageUrl (url: string): boolean {
  return /^(\/|http).*\.(png|jpg)(\?.*)?$/.test(url)
}

const SpanKey = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? '#ff9691' : '#b75052'
}))
const SpanFunction = styled('span')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#c5b6ff' : '#3e20b7'
}))
const SpanString = styled('span')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#c9fdbc' : '#0b6300'
}))
const SpanNumber = styled('span')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#c5b6ff' : '#3e20b7'
}))
const SpanKeyword = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? '#c5b6ff' : '#3e20b7'
}))

const renderKey = (key: string | undefined): React.ReactElement | undefined => {
  return key !== undefined ? <SpanKey>{`"${key}": `}</SpanKey> : undefined
}

interface Props {
  depth: number
  objKey?: string
  comma?: boolean
  onChangeUrl?: (url: string) => void
  _isContent?: boolean // This is a weird one that I pass if the url is /content
}

const JSONObject = ({ data, opt: { depth, objKey, comma = false, onChangeUrl, _isContent = false } }: { data: object, opt: Props }): React.ReactElement => {
  const [open, setOpen] = useState(depth <= MAX_DEPTH)
  const handleToggleOpen = (): void => { setOpen(!open) }

  if (!open) {
    return (
      <>
        <Box component='span' onClick={handleToggleOpen} sx={{
          display: 'inline-block',
          position: 'relative',
          width: '100%',
          cursor: 'pointer',
          '&::before': {
            content: '"-"',
            position: 'absolute',
            left: '-1em',
            fontWeight: 'bold'
          }
        }}>
          {renderKey(objKey)}{'{ ... }'}{comma && ','}
        </Box>
        <br />
      </>
    )
  } else {
    return (
      <>
        <Box component='span' onClick={handleToggleOpen} sx={{
          display: 'inline-block',
          position: 'relative',
          width: '100%',
          cursor: 'pointer',
          '&::before': {
            content: '"+"',
            position: 'absolute',
            left: '-1em',
            fontWeight: 'bold'
          }
        }}>
          {renderKey(objKey)}{'{'}
        </Box>
        <br />
        <Box component='ul' sx={{
          listStyleType: 'none',
          m: 0,
          p: 0,
          pl: 4
        }}>
          {Object.keys(data).map((key, index, array) => (
            <li key={index}>
              {renderJSON((data as Record<string, any>)[key], {
                depth: depth + 1,
                objKey: key,
                comma: index !== array.length - 1,
                onChangeUrl,
                _isContent
              })}
            </li>
          ))}
        </Box>
        <span>{'}'}{comma && ','}</span>
        <br />
      </>
    )
  }
}

const JSONArray = ({ data, opt: { depth, objKey, comma = false, onChangeUrl, _isContent = false } }: { data: any[], opt: Props }): React.ReactElement => {
  const [open, setOpen] = useState(depth <= MAX_DEPTH)
  const handleToggleOpen = (): void => { setOpen(!open) }

  if (!open) {
    return (
      <>
        <Box component='span' onClick={handleToggleOpen} sx={{
          display: 'inline-block',
          position: 'relative',
          width: '100%',
          cursor: 'pointer',
          '&::before': {
            content: '"-"',
            position: 'absolute',
            left: '-1em',
            fontWeight: 'bold'
          }
        }}>
          {renderKey(objKey)}{'[ ... ]'}{comma && ','}
        </Box>
        <br />
      </>
    )
  } else {
    return (
      <>
        <Box component='span' onClick={handleToggleOpen} sx={{
          display: 'inline-block',
          position: 'relative',
          width: '100%',
          cursor: 'pointer',
          '&::before': {
            content: '"+"',
            position: 'absolute',
            left: '-1em',
            fontWeight: 'bold'
          }
        }}>
          {renderKey(objKey)}{'['}
        </Box>
        <br />
        <Box component='ul' sx={{
          listStyleType: 'none',
          m: 0,
          p: 0,
          pl: 4
        }}>
          {data.map((datum, index) => (
            <li key={index}>
              {renderJSON(datum, { depth: depth + 1, comma: index !== data.length - 1, onChangeUrl, _isContent })}
            </li>
          ))}
        </Box>
        <span>{']'}{comma && ','}</span>
        <br />
      </>
    )
  }
}

const JSONBasicType = ({ opt: { objKey, comma = false }, children }: { opt: Props, children?: React.ReactElement }): React.ReactElement => {
  return (
    <>
      <span>{renderKey(objKey)}{children}{comma && ','}</span>
      <br />
    </>
  )
}

const JSONString = ({ data, opt }: { data: string, opt: Props }): React.ReactElement => {
  const { objKey, comma = false, onChangeUrl, _isContent = false } = opt
  const [openImg, setOpenImg] = useState(false)
  const handleToggleOpenImg = (): void => { setOpenImg(!openImg) }

  if (_isContent || objKey === 'Url') {
    return (
      <>
        <span>
          {renderKey(objKey)}<Link component={SpanString} onClick={onChangeUrl !== undefined ? () => onChangeUrl(_isContent ? `/${data}` : data) : undefined} sx={{ cursor: 'pointer' }}>"{data}"{!_isContent && <> <LinkIcon fontSize='small' sx={{ verticalAlign: 'text-bottom' }} /></>}</Link>{comma && ','}
        </span>
        <br />
      </>
    )
  } else if (isImageUrl(data)) {
    return (
      <>
        <span>
          {renderKey(objKey)}<Link component={SpanString} onClick={handleToggleOpenImg}>"{data}" <ImageIcon fontSize='small' sx={{ verticalAlign: 'text-bottom' }} /></Link>{comma && ','}
        </span>
        {openImg && (
          <>
            <br />
            <img src={data.startsWith('http') ? data : `https://xivapi.com${data}`} />
          </>
        )}
        <br />
      </>
    )
  }

  return <JSONBasicType opt={opt}><SpanString>"{data}"</SpanString></JSONBasicType>
}

const JSONFunction = ({ data, opt }: { data: Function, opt: Props }): React.ReactElement => {
  return <JSONBasicType opt={opt}><SpanFunction>{String(data)}</SpanFunction></JSONBasicType>
}

const JSONNumber = ({ data, opt }: { data: number, opt: Props }): React.ReactElement => {
  return <JSONBasicType opt={opt}><SpanNumber>{data}</SpanNumber></JSONBasicType>
}

const JSONUndefined = ({ opt }: { opt: Props }): React.ReactElement => {
  return <JSONBasicType opt={opt}><SpanKeyword>undefined</SpanKeyword></JSONBasicType>
}

const JSONNull = ({ opt }: { opt: Props }): React.ReactElement => {
  return <JSONBasicType opt={opt}><SpanKeyword>null</SpanKeyword></JSONBasicType>
}

export default function renderJSON (data: any, opt: Props): React.ReactElement {
  if (data === undefined) return <JSONUndefined opt={opt} />
  if (data === null) return <JSONNull opt={opt} />

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
