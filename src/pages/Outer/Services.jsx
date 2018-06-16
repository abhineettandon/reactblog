import React from "react";

import { Jumbotron, Button } from "reactstrap";
import Defaultlayout from "../../layouts/defaultLayout.jsx";

const Services = () => (
  <Defaultlayout>
    <Jumbotron>
      <h1>This is Services page</h1>
      <p className="lead">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
      <hr />
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  </Defaultlayout>
);

export default Services;
