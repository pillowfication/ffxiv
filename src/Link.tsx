import React, { forwardRef } from 'react'
import Link, { LinkProps } from 'next/link'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core'

type LinkRef = any

export type NextLinkProps =
  | (Omit<MuiLinkProps, 'href' | 'classes'> & Pick<LinkProps, 'href' | 'as' | 'prefetch'>)
  | HTMLAnchorElement

const NextLink = ({ href, as, prefetch, ...props }: LinkProps, ref: LinkRef) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} {...props} />
  </Link>
)

export default forwardRef<NextLinkProps, LinkRef>(NextLink)
