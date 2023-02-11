import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Homepage, About, Services, Admin, PageNotFound } from "./components";
import Service from "./Service";
import Login from "../components/Login";
import Register from "../components/Register";
const Routes = () => {
  let isAuthenticated = true;
  const location = useLocation();
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
        <Route path="/Login" component={Login} />
        <Route path="/registration" component={Register} />
        <Route path="/Service/:id" component={Service} />
        <Route path="/Admin">
          {isAuthenticated === true ? (
            <Admin />
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )}
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
