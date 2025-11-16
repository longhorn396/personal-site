import { Launch } from '@mui/icons-material'
import React from 'react'
import { theme } from './DefaultTheme'

type ExternalLinkProps = {
  href: string
  text: string
}

// const useStyles = makeStyles({
//   a: {
//     color: theme.palette.info.main,
//     textDecoration: 'none',
//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },
// });

const ExternalLink = ({ href, text }: ExternalLinkProps): JSX.Element => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {text} <Launch fontSize="inherit" />
    </a>
  )
}

export default ExternalLink
