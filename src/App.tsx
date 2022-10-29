import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";

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
        Test
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        Test
      </SwipeableDrawer>
      <img src={logo} className="App-logo" alt="logo" />
      <p>fabio - marília</p>
      <p>Saturday, July 8, 2023 at 6 pm in Ragusa, Sicily</p>
      <p>Formal invitation and details to follow.</p>
    </div>
  );
}

export default App;
