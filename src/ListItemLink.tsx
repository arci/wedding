import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import {
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
  ListItemText,
  ListItem
} from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  onClick: any
}

function ListItemLink(props: ListItemLinkProps) {
    const { primary, to, onClick } = props;

    return (
      <li>
        <ListItem button component={Link} to={to} onClick={onClick}>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

export default ListItemLink;