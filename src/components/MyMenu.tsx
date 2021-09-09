import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListAlt } from '@material-ui/icons'
import React from 'react';
import {
  Link,
} from "react-router-dom";


function MyMenu() {
  return (
    <List>
      <ListItem button key="1" component={Link} to="/platform/list">
        <ListItemIcon><ListAlt></ListAlt></ListItemIcon>
        <ListItemText primary="Plateformes" />
      </ListItem>
    </List>
  );
}

export default MyMenu;
