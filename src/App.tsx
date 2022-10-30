import { useState } from "react";
import logo from './logo.svg';
import menu from './menu.png';
import './App.css';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [open, setState] = useState<boolean>(false);


  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  return (
    <div className="App">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none"
          }
        }}
      >
        <img src={menu} className="menu" alt="logo" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Box className="box" sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <Divider sx={{ mb: 2 }} />
          <ListItemButton>
            <ListItemText primary="Location" />
          </ListItemButton>
          <Divider sx={{ mb: 2 }} />
          <ListItemButton>
            <ListItemText primary="Agenda" />
          </ListItemButton>
          <Divider sx={{ mb: 2 }} />
          <ListItemButton>
            <ListItemText primary="RSVP" />
          </ListItemButton>
          <Divider sx={{ mb: 2 }} />
          <ListItemButton>
            <ListItemText primary="FAQs" />
          </ListItemButton>
          <Divider sx={{ mb: 2 }} />
        </Box>
      </SwipeableDrawer>
      <img src={logo} className="App-logo" alt="logo" />
      <p>fabio - marília</p>
      <p>Saturday, July 8, 2023 at 6 pm in Ragusa, Sicily</p>
      <p>Formal invitation and details to follow.</p>
    </div>
  );
}

export default App;
