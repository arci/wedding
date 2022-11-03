import './Menu.css';
import menu from './hamburger.svg';
import logo from './logo.svg';

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
  Routes,
  useLocation
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Home from "../Home/Home";
import Location from "../Location/Location";
import Agenda from "../Agenda/Agenda";
import RSVP from "../RSVP/RSVP";
import FAQs from "../FAQs/FAQs";
import NotFound from "../NotFound/NotFound";
import ListItemLink from "./ListItemLink";

function Menu() {
  const [open, setState] = useState<boolean>(false);

  const location = useLocation();

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const { t } = useTranslation()

  return (
    <>
      <Box className='mobile-menu'>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
          sx={{
            mr: 2,
            display: {
              sm: "block",
              md: "none"
            }
          }}
        >
          <img src={menu} className="menu-icon" alt="logo" />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <Box className="drawer" sx={{ mb: 2 }}>
            <ListItemLink to="/" primary={t('home')} onClick={() => toggleDrawer(false)} />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/location" primary={t('location')} onClick={() => toggleDrawer(false)} />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/agenda" primary={t('agenda')} onClick={() => toggleDrawer(false)} />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/rsvp" primary={t('rsvp')} onClick={() => toggleDrawer(false)} />
            <Divider sx={{ mb: 2 }} />
            <ListItemLink to="/faqs" primary={t('faqs')} onClick={() => toggleDrawer(false)} />
            <Divider sx={{ mb: 2 }} />
          </Box>
        </SwipeableDrawer>
      </Box>
      <Box
        className='desktop-menu'
        sx={{
          mr: 2,
          display: {
            xs: "none",
            sm: "none",
            md: "block"
          }
        }}
      >
        <img src={logo} className="logo" alt="logo" />
        <ListItemLink to="/" primary={t('home')} className={location.pathname === "/" ? "active" : ""} />
        <ListItemLink to="/location" primary={t('location')} className={location.pathname === "/location" ? "active" : ""} />
        <ListItemLink to="/agenda" primary={t('agenda')} className={location.pathname === "/agenda" ? "active" : ""} />
        <ListItemLink to="/rsvp" primary={t('rsvp')} className={location.pathname === "/rsvp" ? "active" : ""} />
        <ListItemLink to="/faqs" primary={t('faqs')} className={location.pathname === "/faqs" ? "active" : ""} />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Menu;
