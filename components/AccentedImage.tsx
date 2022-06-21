import { Box, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { theme } from './DefaultTheme';

type AccentedImageProps = {
  alt: string;
  height: string;
  src: string;
  width: string;
};

const useStyles = makeStyles({
  box: {
    border: `4px solid ${theme.palette.info.main}`,
    borderRadius: '4px',
    margin: '0 auto',
    position: 'relative',
  },
});

const AccentedImage = ({ alt, height, src, width }: AccentedImageProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.box} height={height} width={width}>
      <Image alt={alt} layout="fill" src={src} />
    </Box>
  );
};

export default AccentedImage;
