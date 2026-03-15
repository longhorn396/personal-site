import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type LeftDrawerProps = {
  notifyParent(arg0: boolean): void
}

const LeftDrawer = ({ notifyParent }: LeftDrawerProps): React.JSX.Element => {
  const [state, setState] = React.useState({
    left: false,
  })
  const toggleDrawer = (open: boolean) => () => {
    setState({ left: open })
    notifyParent(open)
  }
  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Menu"
        onClick={toggleDrawer(true)}
        disabled={state.left}
        sx={{ mt: '4px' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        color="secondary"
        open={state.left}
        onClose={toggleDrawer(false)}
        PaperProps={{ 'aria-label': 'Site Navigation', role: 'region', sx: { p: '64px 10px 0', width: '250px' } }}
      >
        <Typography aria-label="Pages" component="h1" variant="h5" />
        <List aria-label="Site Navigation" component="nav" role="navigation">
          <ListItem button>
            <Link href="/" passHref>
              <ListItemText
                sx={{
                  color: (t) => t.palette.info.main,
                  textDecoration: 'none',
                  width: 'min-content',
                  '& span': { m: 0, width: 'fit-content', '&:hover': { textDecoration: 'underline' } },
                }}
                primary="Home"
              />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default LeftDrawer
