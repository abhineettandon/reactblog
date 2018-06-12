import React from "react";

import BlogLayout from "../../layouts/blogLayout.jsx";
import BlogCard from "../../components/Cards/Blog.jsx";

class BlogDetails extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      post_id: match.params.id,
      post: {}
    };
  }
  componentDidMount() {
    fetch("http://blog.test/api/post/" + this.state.post_id)
      .then(response => response.json())
      .then(post => this.setState({ post: post }));
  }
  render() {
    const { post } = this.state;
    return (
      <BlogLayout>
        <BlogCard key={post.id} post={post} readmore={false} />
      </BlogLayout>
    );
  }
}

export default BlogDetails;
