import { AppBar, Box, Button, ButtonGroup, Grid, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { scroller } from 'react-scroll'
import LeftDrawer from './Drawer'

type NavbarProps = {
  sections?: {
    to: string
    display: string
  }[]
}

const Navbar = ({ sections }: NavbarProps): React.JSX.Element => {
  const [sectionLinksDisabled, setSectionLinksDisabled] = React.useState(false)
  const drawerToggled = (open: boolean) => setSectionLinksDisabled(open)
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      <AppBar color="secondary" role="banner">
        <Toolbar>
          <Grid container sx={{ width: '100%' }}>
            <Grid size={5}>
              <LeftDrawer notifyParent={drawerToggled} />
            </Grid>
            <Grid className="center" size={2}>
              <Link href="/" aria-label="Homepage" title="Devin Drawhorn" aria-disabled={sectionLinksDisabled}>
                <Image alt="Logo" src="/logo.png" height={48} width={32} />
              </Link>
            </Grid>
            <Grid sx={{ pt: '9px' }} size={5}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <ButtonGroup
                  aria-label="Page Navigation"
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  size="small"
                >
                  {sections &&
                    sections.map((section, index) => {
                      return (
                        <Button
                          color="info"
                          disabled={sectionLinksDisabled}
                          key={index}
                          onClick={() => scroller.scrollTo(section.to, { smooth: 'easeInOutQuad' })}
                          variant="contained"
                        >
                          {section.display}
                        </Button>
                      )
                    })}
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default Navbar
