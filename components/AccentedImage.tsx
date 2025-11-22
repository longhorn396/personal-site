import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type AccentedImageProps = {
  alt: string
  height: string
  src: string
  width: string
}

const AccentedImage = ({ alt, height, src, width }: AccentedImageProps): React.JSX.Element => {
  return (
    <Box
      sx={{ border: (t) => `4px solid ${t.palette.info.main}`, borderRadius: '4px', m: '0 auto', position: 'relative' }}
      height={height}
      width={width}
    >
      <Image alt={alt} src={src} fill sizes="100vw" />
    </Box>
  )
}

export default AccentedImage
