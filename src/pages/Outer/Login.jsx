import React from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../../layouts/defaultLayout.jsx";
import Widget from "../../components/Cards/Widget.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formdata: { email: "", password: "" } };
  }

  handleChange = event => {
    const { formdata } = this.state;
    formdata[event.target.name] = event.target.value;
    this.setState({
      formdata
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://blog.test/api/login", {
      method: "POST",
      data: this.state.formdata
    });
    console.log(this.state.formdata);
  };

  render() {
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Widget title="Login">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={this.state.formdata.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.formdata.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary col-md-12">Submit</button>
                </div>
                <div className="form-group">
                  <Link to="/register">
                    Don't have an account? Register here.
                  </Link>
                </div>
              </form>
            </Widget>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Login;
