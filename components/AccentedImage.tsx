import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type AccentedImageProps = {
  alt: string
  height: string
  src: string
  unoptimized?: boolean
  width: string
}

const AccentedImage = ({ alt, height, src, width, unoptimized }: AccentedImageProps): React.JSX.Element => {
  return (
    <Box
      sx={{ border: `4px solid`, borderColor: 'info.main', borderRadius: '8px', m: '0 auto', position: 'relative' }}
      height={height}
      width={width}
    >
      <Image alt={alt} src={src} fill sizes="auto" unoptimized={unoptimized} />
    </Box>
  )
}

export default AccentedImage
