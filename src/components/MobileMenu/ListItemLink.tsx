import { ReactElement, ReactEventHandler } from 'react';
import {
  ListItemText,
  ListItem
} from "@mui/material";
import {
  Link,
} from "react-router-dom";

interface ListItemLinkProps {
  icon?: ReactElement;
  primary: string;
  to: string;
  onClick: ReactEventHandler<{}>
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