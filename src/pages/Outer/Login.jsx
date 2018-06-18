import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Alert
} from "reactstrap";
import axios from "axios";

import DefaultLayout from "../../layouts/defaultLayout.jsx";
import Widget from "../../components/Cards/Widget.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { email: "", password: "" },
      formErrors: { email: false, password: false },
      isFormValid: false,
      loginFailAlert: false
    };
  }

  updateErrorState = (key, value) => {
    this.setState(
      oldState => ({
        oldState,
        formErrors: { ...oldState.formErrors, [key]: value }
      }),
      () => {
        const { formData, formErrors } = this.state;
        let validate = false;
        for (let errors in formErrors) {
          if (formErrors[errors] !== true) {
            validate = true;
          } else {
            validate = false;
            break;
          }
        }
        for (let input in formData) {
          if (formData[input] !== "") {
            validate = true;
          } else {
            validate = false;
            break;
          }
        }
        if (validate) {
          this.setState(oldState => ({ isFormValid: true }));
        } else {
          this.setState(oldState => ({ isFormValid: false }));
        }
      }
    );
  };

  isValid = ({ name, value }) => {
    switch (name) {
      case "email":
        if (value === "") {
          this.updateErrorState("email", true);
        } else {
          this.updateErrorState("email", false);
        }
        const emailReg = new RegExp("");
        break;
      case "password":
        if (value === "") {
          this.updateErrorState("password", true);
        } else {
          this.updateErrorState("password", false);
        }
        break;
    }
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState(() => ({ formData: formData }), this.isValid(event.target));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { formData } = this.state;
    axios
      .post("http://blog.test/api/auth/login", formData)
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("api_token", response.data.api_token);
      })
      .catch(error => this.setState(() => ({ loginFailAlert: true })));
  };

  render() {
    const { formData, formErrors, isFormValid, loginFailAlert } = this.state;
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Widget title="Login">
              <Alert color="danger" isOpen={loginFailAlert}>
                These credentials do not match our record. Please try again.
              </Alert>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={this.handleChange}
                    invalid={formErrors.email}
                  />
                  <FormFeedback>Email is required</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={this.handleChange}
                    invalid={formErrors.password}
                  />
                  <FormFeedback>Password is required</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Button disabled={!isFormValid} color="primary" block>
                    Submit
                  </Button>
                </FormGroup>
                <FormGroup>
                  <Link to="/register">
                    Don't have an account? Register here.
                  </Link>
                </FormGroup>
              </Form>
            </Widget>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Login;
