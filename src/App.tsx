import React, { useState } from "react";
import menu from './menu.png';
import './App.css';
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
import "./i18n";
import { useTranslation } from "react-i18next";
import Home from "./Home";
import Location from "./Location";
import Agenda from "./Agenda";
import RSVP from "./RSVP";
import FAQs from "./FAQs";
import NotFound from "./NotFound";
import ListItemLink from "./ListItemLink";

function App() {
  const [open, setState] = useState<boolean>(false);
  const { i18n } = useTranslation()

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

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
        <Box className="lang" >
          <span onClick={() => i18n.changeLanguage("en")} className={i18n.language == "en" ? "current" : ""}>en</span>|
          <span onClick={() => i18n.changeLanguage("it")} className={i18n.language == "it" ? "current" : ""}>it</span>|
          <span onClick={() => i18n.changeLanguage("pt")} className={i18n.language == "pt" ? "current" : ""}>pt</span>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="location" element={<Location />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
