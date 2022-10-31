import './MobileMenu.css';
import menu from './hamburger.png';

import { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../Home/Home";
import Location from "../Location/Location";
import Agenda from "../Agenda/Agenda";
import RSVP from "../RSVP/RSVP";
import FAQs from "../FAQs/FAQs";
import NotFound from "../NotFound/NotFound";
import ListItemLink from "./ListItemLink";

function MobileMenu() {
  const [open, setState] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  return (
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
          <ListItemLink to="/" primary="Home" onClick={() => toggleDrawer(false)} />
          <Divider sx={{ mb: 2 }} />
          <ListItemLink to="/location" primary="Location" onClick={() => toggleDrawer(false)} />
          <Divider sx={{ mb: 2 }} />
          <ListItemLink to="/agenda" primary="Agenda" onClick={() => toggleDrawer(false)} />
          <Divider sx={{ mb: 2 }} />
          <ListItemLink to="/rsvp" primary="RSVP" onClick={() => toggleDrawer(false)} />
          <Divider sx={{ mb: 2 }} />
          <ListItemLink to="/faqs" primary="FAQs" onClick={() => toggleDrawer(false)} />
          <Divider sx={{ mb: 2 }} />
        </Box>
      </SwipeableDrawer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MobileMenu;
