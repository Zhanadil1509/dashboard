import React from 'react';
import {Route, Switch} from "react-router-dom";

import Dashboard from "./Dashboard";
import Create from "./Create";

const Routes = () => {
  return (
    <Switch>
      <Route path={'/create'} component={Create}/>
      <Route path={'/'} component={Dashboard} />
    </Switch>
  );
};

export default Routes;