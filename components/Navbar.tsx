import React from 'react';
import {
  AppBar,
  Button,
  ButtonGroup,
  Grid,
  Hidden,
  makeStyles,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import LeftDrawer from './Drawer';

type NavbarProps = {
  sections?: {
    to: string;
    display: string;
  }[];
};

const useStyles = makeStyles({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonGroupWrapper: {
    paddingTop: '9px',
  },
});

const Navbar = ({ sections }: NavbarProps): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sectionLinksDisabled: false,
  });
  const drawerToggled = (open: boolean) => {
    setState({ sectionLinksDisabled: open });
  };
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      <AppBar color="secondary" role="banner">
        <Toolbar>
          <Grid container>
            <Grid item xs={5}>
              <LeftDrawer notifyParent={drawerToggled} />
            </Grid>
            <Grid className="center" item xs={2}>
              <Link href="/">
                <a aria-label="Homepage" title="Devin Drawhorn" aria-disabled={state.sectionLinksDisabled}>
                  <Image alt="Logo" src="/logo.png" height="48px" width="32px" />
                </a>
              </Link>
            </Grid>
            <Grid className={classes.buttonGroupWrapper} item xs={5}>
              <Hidden implementation="css" smDown>
                <ButtonGroup aria-label="Page Navigation" className={classes.buttonGroup} size="small">
                  {sections &&
                    sections.map((section, index) => {
                      return (
                        <Button
                          color="primary"
                          disabled={state.sectionLinksDisabled}
                          key={index}
                          onClick={() => scroller.scrollTo(section.to, { smooth: 'easeInOutQuad' })}
                          variant="outlined"
                        >
                          <span style={{ color: '#ffffff' }}>{section.display}</span>
                        </Button>
                      );
                    })}
                </ButtonGroup>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
