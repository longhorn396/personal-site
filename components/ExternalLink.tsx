import { makeStyles } from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import React from 'react';
import { theme } from './DefaultTheme';

type ExternalLinkProps = {
  href: string;
  text: string;
};

const useStyles = makeStyles({
  a: {
    color: theme.palette.info.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const ExternalLink = ({ href, text }: ExternalLinkProps): JSX.Element => {
  const classes = useStyles();
  return (
    <a className={classes.a} href={href} target="_blank" rel="noreferrer noopener">
      {text} <Launch fontSize="inherit" />
    </a>
  );
};

export default ExternalLink;
