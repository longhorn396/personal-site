import React from 'react'
import Link from 'next/link'
import { Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { theme } from './DefaultTheme'

type LeftDrawerProps = {
  notifyParent(arg0: boolean): void
}

// const useStyles = makeStyles({
//   drawer: {
//     padding: '64px 10px 0',
//     width: '250px',
//   },
//   listItemText: {
//     color: theme.palette.info.main,
//     textDecoration: 'none',
//     width: 'min-content',
//     '& span': {
//       margin: 0,
//       width: 'fit-content',
//       '&:hover': {
//         textDecoration: 'underline',
//       },
//     },
//   },
// });

const LeftDrawer = ({ notifyParent }: LeftDrawerProps): JSX.Element => {
  const [state, setState] = React.useState({
    left: false,
  })
  const toggleDrawer = (open: boolean) => () => {
    setState({ left: open })
    notifyParent(open)
  }
  return (
    <React.Fragment>
      <IconButton edge="start" color="inherit" aria-label="Menu" onClick={toggleDrawer(true)} disabled={state.left}>
        <MenuIcon />
      </IconButton>
      <Drawer
        color="secondary"
        open={state.left}
        onClose={toggleDrawer(false)}
        PaperProps={{ 'aria-label': 'Site Navigation', role: 'region' }}
      >
        <Typography aria-label="Pages" component="h1" variant="h5" />
        <List aria-label="Site Navigation" component="nav" role="navigation">
          <ListItem button>
            <Link href="/" passHref>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default LeftDrawer
