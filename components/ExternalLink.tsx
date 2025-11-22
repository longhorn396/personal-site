import { Launch } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'

type ExternalLinkProps = {
  href: string
  text: string
}

const ExternalLink = ({ href, text }: ExternalLinkProps): React.JSX.Element => {
  return (
    <Link color="info" href={href} target="_blank" rel="noreferrer noopener" underline="hover">
      {text} <Launch fontSize="inherit" />
    </Link>
  )
}

export default ExternalLink
