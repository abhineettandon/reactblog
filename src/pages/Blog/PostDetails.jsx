import React from "react";
import ContentLoader from "react-content-loader";
import BlogLayout from "../../layouts/blogLayout.jsx";
import Blog from "../../components/Cards/Blog.jsx";
import Comment from "../../components/Cards/Comment.jsx";
import Widget from "../../components/Cards/Widget.jsx";

class BlogDetails extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      post_id: match.params.id,
      post: null
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
        {post ? (
          <div>
            <Blog key={post.id} post={post} readmore={false} />
            <Widget title="Comments">
              {post.comments.length > 0
                ? post.comments.map((comment, index) => (
                    <div>
                      <Comment key={index} comment={comment} />
                      <br />
                    </div>
                  ))
                : "Liked this post? Be the first to comment."}
            </Widget>
          </div>
        ) : (
          <ContentLoader>
            <rect x="0" y="0" rx="4" ry="4" width="400" height="13" />
            <rect x="0" y="20" rx="5" ry="5" width="400" height="90" />
            <rect x="0" y="120" rx="3" ry="3" width="400" height="5" />
            <rect x="0" y="130" rx="3" ry="3" width="400" height="5" />
            <rect x="0" y="140" rx="3" ry="3" width="400" height="5" />
            <rect x="0" y="150" rx="3" ry="3" width="400" height="5" />
            <rect x="0" y="160" rx="3" ry="3" width="400" height="5" />
          </ContentLoader>
        )}
      </BlogLayout>
    );
  }
}

export default BlogDetails;
