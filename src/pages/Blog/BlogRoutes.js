import React from "react";
import { Switch, Route } from "react-router-dom";

import BlogLlist from "./Bloglist.jsx";
import BlogDetails from "./BlogDetails.jsx";

const BlogRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:id`} component={BlogDetails} />
    <Route exact path={`${match.url}`} component={BlogLlist} />
  </Switch>
);

export default BlogRoutes;
