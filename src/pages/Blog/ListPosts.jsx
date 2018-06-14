import React from "react";

import BlogLayout from "../../layouts/blogLayout.jsx";
import BlogCard from "../../components/Cards/Blog.jsx";

class BlogList extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch("http://blog.test/api/post")
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts.data }));
  }

  render() {
    return (
      <BlogLayout title="Recent posts">
        {this.state.posts.map(post => <BlogCard key={post.id} post={post} />)}
      </BlogLayout>
    );
  }
}

export default BlogList;
