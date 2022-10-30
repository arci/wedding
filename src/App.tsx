import React, { useState } from "react";
import logo from './logo.svg';
import menu from './menu.png';
import './App.css';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}


function App() {
  const [open, setState] = useState<boolean>(false);
  
  
  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;

    return (
      <li>
        <ListItem button component={Link} to={to} onClick={() => toggleDrawer(false)}>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <div className="App">
      <Router>
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
            <ListItemLink to="/home" primary="Home" />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/location" primary="Location" />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/agenda" primary="Agenda" />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/rsvp" primary="RSVP" />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/faqs" primary="FAQs" />
            <Divider sx={{ mb: 2 }} />
          </Box>
        </SwipeableDrawer>
        <Routes>
          <Route path="home" element={<React.Fragment>
            <img src={logo} className="App-logo" alt="logo" />
            <p>fabio - marília</p>
            <p>Saturday, July 8, 2023 at 6 pm in Ragusa, Sicily</p>
            <p>Formal invitation and details to follow.</p>
          </React.Fragment>} />
          <Route path="location" element={<React.Fragment>
            <p>Location</p>
          </React.Fragment>} />
          <Route path="agenda" element={<React.Fragment>
            <p>Agenda</p>
          </React.Fragment>} />
          <Route path="rsvp" element={<React.Fragment>
            <p>RSVP</p>
          </React.Fragment>} />
          <Route path="faqs" element={<React.Fragment>
            <p>FAQs</p>
          </React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
