import React from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import { Home, About, Services, Contact, Login, Register } from "../pages";

import BlogRoutes from "../pages/Blog/BlogRoutes";

const Routes = () => (
  <Switch>
    <ProtectedRoutes path="/blog" component={BlogRoutes} />
    {/* <Route exact path="/blog" component={BlogRoutes} /> */}
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/about" component={About} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
