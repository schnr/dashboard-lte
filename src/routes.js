import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route  path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
 
export default Routes;
