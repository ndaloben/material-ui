import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position="fixed" >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="home">
            <ListItemIcon>
              <Home />
              <ListItemText primary="Homepage" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="pages">
            <ListItemIcon>
              <Pages />
              <ListItemText primary="Pages" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="groups">
            <ListItemIcon>
              <Group />
              <ListItemText primary="Groups" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="market">
            <ListItemIcon>
              <Storefront />
              <ListItemText primary="Marketplace" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="friends">
            <ListItemIcon>
              <Person />
              <ListItemText primary="Friends" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="settings">
            <ListItemIcon>
              <Settings />
              <ListItemText primary="Settings" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="profile">
            <ListItemIcon>
              <AccountBox />
              <ListItemText primary="Profile" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="switch">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar
