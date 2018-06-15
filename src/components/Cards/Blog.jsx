import React from "react";
import propTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const BlogCard = ({ post, readmore }) => (
  <div className="card mb-4">
    <Card>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
      </CardBody>
      <img
        className="card-img-top"
        src="http://placehold.it/750x300"
        alt="Card image cap"
      />
      <CardBody>
        <CardText>{post.body}</CardText>
        <CardText>
          <small className="text-muted">
            Posted on <Moment format="MMMM D, YYYY">{post.created_at}</Moment>&nbsp;by&nbsp;
            <a href="#">Start Bootstrap</a>
            <span className="float-right">
              {post.likes_count}{" "}
              <i
                className="fa fa-thumbs-up"
                title={post.likes_user.map(like => like.user.name)}
              />&nbsp;
              {post.comments_count}&nbsp;
              <i className="fa fa-comment" title="Comments" />
            </span>
          </small>
        </CardText>
        {readmore ? (
          <CardLink>
            <Link to={`/blog/${post.id}`}>Read More &rarr;</Link>
          </CardLink>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
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
