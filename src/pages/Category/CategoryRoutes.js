import React from "react";
import { Switch, Route } from "react-router-dom";

import ListCategoryPosts from "./ListCategoryPosts.jsx";

const CategoryRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:id`} component={ListCategoryPosts} />
  </Switch>
);

export default CategoryRoutes;
