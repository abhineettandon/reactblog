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
      formErrors: {
        email: {
          required: false,
          valid: false
        },
        password: {
          required: false
        }
      },
      isFormValid: false,
      failAlert: {
        open: false,
        message: ""
      }
    };
  }

  updateErrorState = (key, value) => {
    this.setState(
      oldState => ({
        formErrors: {
          ...oldState.formErrors,
          [key]: { ...oldState.formErrors[key], ...value }
        }
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
          this.updateErrorState("email", { required: true });
        } else {
          this.updateErrorState("email", { required: false });
        }

        if (value !== "") {
          const regEx = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
          );
          if (!regEx.test(value)) {
            this.updateErrorState("email", { valid: true });
          } else {
            this.updateErrorState("email", { valid: false });
          }
        } else {
          this.updateErrorState("email", { valid: false });
        }
        break;
      case "password":
        if (value === "") {
          this.updateErrorState("password", { required: true });
        } else {
          this.updateErrorState("password", { required: false });
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
        window.location.href = "/";
      })
      .catch(error =>
        this.setState(() => ({ failAlert: { open: true, message: error } }))
      );
  };

  render() {
    const { formData, formErrors, isFormValid, failAlert } = this.state;
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Widget title="Login">
              <Alert color="danger" isOpen={failAlert.open}>
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
                    invalid={
                      formErrors.email.required || formErrors.email.valid
                    }
                  />
                  {formErrors.email.required && (
                    <FormFeedback>Email is required</FormFeedback>
                  )}
                  {formErrors.email.valid && (
                    <FormFeedback>Enter a valid email</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={this.handleChange}
                    invalid={formErrors.password.required}
                  />
                  {formErrors.password.required && (
                    <FormFeedback>Password is required</FormFeedback>
                  )}
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
