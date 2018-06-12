import React from "react";
import PropTypes from "prop-types";

const Widget = ({ title, children }) => (
  <div className="card my-4">
    <h5 className="card-header">{title}</h5>
    <div className="card-body">{children}</div>
  </div>
);

Widget.propTypes = {
  title: PropTypes.string.isRequired
};

Widget.defaultProps = {
  title: "Widget"
};

export default Widget;
