import { Box, makeStyles } from '@material-ui/core';
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
      <img alt={alt} height="100%" src={src} width="100%" />
    </Box>
  );
};

export default AccentedImage;
