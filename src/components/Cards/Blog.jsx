import React from "react";
import propTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const BlogCard = ({ post, readmore }) => (
  <div className="card mb-4">
    <img
      className="card-img-top"
      src="http://placehold.it/750x300"
      alt="Card image cap"
    />
    <div className="card-body">
      <h2 className="card-title">{post.title}</h2>
      <p className="card-text">{post.body}</p>
      {readmore && <Link to={`/blog/${post.id}`}>Read More &rarr;</Link>}
    </div>
    <div className="card-footer text-muted">
      Posted on <Moment format="MMMM D, YYYY">{post.created_at}</Moment>&nbsp;by&nbsp;
      <a href="#">Start Bootstrap</a>
    </div>
  </div>
);

BlogCard.propType = {
  post: propTypes.objectOf(Object).isRequired,
  readmore: propTypes.bool
};

BlogCard.defaultProps = {
  post: {
    title: "Lorem Ipsum",
    body: "Lorum Ipsum. Lorum Ipsum. Lorum Ipsum.",
    created_at: "2018-06-02 10:48:10"
  },
  readmore: true
};

export default BlogCard;
