import React from "react";
import { Switch, Route } from "react-router-dom";

import CategoryRoutes from "../Category/CategoryRoutes";

import BlogLlist from "./ListPosts";
import BlogDetails from "./PostDetails";

const BlogRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/category`} component={CategoryRoutes} />
    <Route path={`${match.url}/:id`} component={BlogDetails} />
    <Route exact path={`${match.url}`} component={BlogLlist} />
  </Switch>
);

export default BlogRoutes;
