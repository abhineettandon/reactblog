import React from "react";

class Categories extends React.Component {
  state = { categories: [] };

  componentDidMount() {
    fetch("http://blog.test/api/category")
      .then(response => response.json())
      .then(categories => this.setState({ categories: categories }));
  }

  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                {this.state.categories.map(category => (
                  <li>
                    <a href="#">{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
