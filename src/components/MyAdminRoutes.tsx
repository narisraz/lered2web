import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PlatformList from '../pages/admin/platform/List';

function MyAdminRoutes() {
  return (
    <Switch>
      <Route path="/admin/platform/list">
        <PlatformList />
      </Route>
    </Switch>
  );
}

export default MyAdminRoutes;
