import React from 'react';
import {
  AppBar,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
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

const Navbar = ({ sections }: NavbarProps): JSX.Element => {
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
            <Grid size={5}>
              <LeftDrawer notifyParent={drawerToggled} />
            </Grid>
            <Grid className="center" size={2}>
              <Link href="/" legacyBehavior>
                <a aria-label="Homepage" title="Devin Drawhorn" aria-disabled={state.sectionLinksDisabled}>
                  <Image alt="Logo" src="/logo.png" height={48} width={32} />
                </a>
              </Link>
            </Grid>
            <Grid sx={{ pt: '9px' }} size={5}>
              <Paper sx={{ display: { xs: 'none', md: 'block' } }}>
                <ButtonGroup aria-label="Page Navigation" sx={{ display: 'flex', justifyContent: 'flex-end' }} size="small">
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
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
