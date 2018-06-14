import React from "react";
import { Media } from "reactstrap";

const Comment = ({ comment }) => (
  <Media>
    <Media left>
      <Media object src="/img/default-user.png" alt="image" />
    </Media>
    <Media body>
      <Media heading>{comment.user.name}</Media>
      {comment.body}
    </Media>
  </Media>
);

export default Comment;
