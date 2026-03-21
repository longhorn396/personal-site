import MenuIcon from '@mui/icons-material/Menu'
import { Button, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ThemePicker } from './ThemePicker'

type LeftDrawerProps = {
  notifyParent(arg0: boolean): void
}

const LeftDrawer = ({ notifyParent }: LeftDrawerProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open)
    notifyParent(open)
  }
  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Menu"
        onClick={toggleDrawer(true)}
        disabled={isOpen}
        sx={{ mt: '4px' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        color="info"
        open={isOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            'aria-label': 'Site Navigation',
            role: 'region',
            sx: { backgroundColor: 'background.default', p: '10px', width: '375px' },
          },
        }}
      >
        <Stack spacing={2}>
          <ThemePicker />
          <Divider sx={{ borderBottomWidth: '3px' }} />
          <Typography component="h1" variant="h5">
            Pages:
          </Typography>
          <Link href="/" passHref>
            <Button color="secondary" fullWidth variant="contained">
              Home
            </Button>
          </Link>
          <Typography variant="body1">Check back soon for more pages</Typography>
        </Stack>
      </Drawer>
    </React.Fragment>
  )
}

export default LeftDrawer
