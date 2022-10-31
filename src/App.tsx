import React, { useState } from "react";
import logo from './logo.svg';
import menu from './menu.png';
import './App.css';
import {
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
  ListItemText
} from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import "./i18n";
import { useTranslation } from "react-i18next";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function App() {
  const [open, setState] = useState<boolean>(false);
  const { t, i18n } = useTranslation()

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  function ListItemLink(props: ListItemLinkProps) {
    const { primary, to } = props;

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
            <ListItemLink to="/" primary="Home" />
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
        <Box className="lang" >
          <span onClick={() => i18n.changeLanguage("en")} className={i18n.language == "en" ? "current" : ""}>en</span>|
          <span onClick={() => i18n.changeLanguage("it")} className={i18n.language == "it" ? "current" : ""}>it</span>|
          <span onClick={() => i18n.changeLanguage("pt")} className={i18n.language == "pt" ? "current" : ""}>pt</span>
        </Box>
        <Routes>
          <Route path="/" element={
            <div id="home">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="who">{t('who')}</div>
              <div className="where">{t('where')}</div>
              <div className="coming-soon">{t('coming-soon')}</div>
            </div>
          } />
          <Route path="location" element={
            <div id="location">
              <div className="title">{t('location-title')}</div>
              <div className="location-description-1">{t('location-description-1')}</div>
              <div className="location-description-1">{t('location-description-1')}</div>
              <div className="location-description-2">{t('location-description-2')}</div>
              <div className="location-description-3">{t('location-description-3')}</div>
              <div className="location-amenities">
                {t('location-amenities')}
                <li><span>{t('location-amenities-1')}</span></li>
                <li><span>{t('location-amenities-2')}</span></li>
                <li><span>{t('location-amenities-3')}</span></li>
                <li><span>{t('location-amenities-4')}</span></li>
                <li><span>{t('location-amenities-5')}</span></li>
              </div>
            </div>} />
          <Route path="agenda" element={<React.Fragment>
            <p>Agenda</p>
          </React.Fragment>} />
          <Route path="rsvp" element={<React.Fragment>
            <p>RSVP</p>
          </React.Fragment>} />
          <Route path="faqs" element={<React.Fragment>
            <p>FAQs</p>
          </React.Fragment>} />
          <Route path="*" element={<React.Fragment>
            <p>Ops</p>
          </React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
