import React, { forwardRef } from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core'
import { LinkProps } from 'next/link'
import i18n from './i18n'

type LinkRef = any

export type NextLinkProps =
  | (Omit<MuiLinkProps, 'href' | 'classes'> & Pick<LinkProps, 'href' | 'as' | 'prefetch'>)
  | HTMLAnchorElement

const NextLink = ({ href, as, prefetch, ...props }: LinkProps, ref: LinkRef) => (
  <i18n.Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} {...props} />
  </i18n.Link>
)

export default forwardRef<NextLinkProps, LinkRef>(NextLink)
