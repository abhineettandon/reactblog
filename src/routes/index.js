import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, About, Services, Contact, Login, Register } from "../pages";

import BlogRoutes from "../pages/Blog/BlogRoutes";

const Routes = () => (
  <Switch>
    <Route path="/blog" component={BlogRoutes} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
