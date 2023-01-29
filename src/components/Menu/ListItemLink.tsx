import { ReactEventHandler } from 'react';
import { ListItemText, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface ListItemLinkProps {
  primary: string;
  to: string;
  onClick?: ReactEventHandler<{}>
  className?: string
}

function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, onClick, className } = props;

  return (
    <li>
      <ListItem button disableRipple component={Link} to={to} onClick={onClick} style={{ backgroundColor: 'transparent' }} >
        <ListItemText primary={primary} className={className} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;