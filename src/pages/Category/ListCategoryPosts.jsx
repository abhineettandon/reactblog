import React from "react";

import BlogLayout from "../../layouts/blogLayout.jsx";
import Blog from "../../components/Cards/Blog.jsx";

class ListCategoryPost extends React.Component {
  constructor(props) {
    super();
    this.state = {
      category_id: props.match.params.id,
      category: null
    };
  }

  getCategoryDetail = category_id => {
    fetch("http://blog.test/api/category/" + category_id)
      .then(response => response.json())
      .then(category => this.setState({ category: category }));
  };

  componentDidMount() {
    this.getCategoryDetail(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.getCategoryDetail(nextProps.match.params.id);
  }

  render() {
    const { category } = this.state;
    return (
      <BlogLayout title="Category">
        {category &&
          category.posts.map((post, index) => <Blog key={index} post={post} />)}
      </BlogLayout>
    );
  }
}

export default ListCategoryPost;
