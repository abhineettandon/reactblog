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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      formErrors: {
        name: {
          required: false
        },
        email: {
          required: false,
          valid: false
        },
        password: {
          required: false
        },
        confirm_password: {
          required: false,
          matched: false
        }
      },
      isFormValid: false,
      failAlert: {
        open: false,
        message: ""
      }
    };
  }

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState(
      () => ({ formData: formData }),
      this.isInputValid(event.target)
    );
  };

  isInputValid = ({ name, value }) => {
    switch (name) {
      case "name":
        value === ""
          ? this.updateErrorState("name", { required: true })
          : this.updateErrorState("name", { required: false });
        break;
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
        value === ""
          ? this.updateErrorState("password", { required: true })
          : this.updateErrorState("password", { required: false });
        break;
      case "confirm_password":
        value === ""
          ? this.updateErrorState("confirm_password", { required: true })
          : this.updateErrorState("confirm_password", { required: false });

        if (value !== "") {
          value !== this.state.formData.password
            ? this.updateErrorState("confirm_password", { matched: true })
            : this.updateErrorState("confirm_password", { matched: false });
        }
        break;
      default:
        break;
    }
  };

  updateErrorState = (key, value) => {
    this.setState(
      oldState => ({
        formErrors: {
          ...oldState.formErrors,
          [key]: { ...oldState.formErrors[key], ...value }
        }
      }),
      this.isFormValid()
    );
  };

  isFormValid = () => {
    const { formData, formErrors } = this.state;
    let validate = false;
    for (let errors in formErrors) {
      for (let validation in formErrors[errors]) {
        if (formErrors[errors][validation] !== true) {
          validate = true;
        } else {
          validate = false;
          break;
        }
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
  };

  handleSubmit = event => {
    event.preventDefault();
    const { formData } = this.state;
    axios
      .post("http://blog.test/api/auth/register", formData)
      .then(response => {
        console.log(response);
        // localStorage.setItem("user", JSON.stringify(response.data.user));
        // localStorage.setItem("api_token", response.data.api_token);
      })
      .catch(error =>
        this.setState(() => ({
          failAlert: {
            open: true,
            message: JSON.stringify(error.response.data)
          }
        }))
      );
  };

  render() {
    const { formData, formErrors, isFormValid, failAlert } = this.state;
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Widget title="Register">
              <Alert color="danger" isOpen={failAlert.open}>
                {failAlert.message}
              </Alert>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={this.handleChange}
                    invalid={formErrors.name.required}
                  />
                  <FormFeedback>Name is required</FormFeedback>
                </FormGroup>
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
                  <FormFeedback>Password is required</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>Confirm password</Label>
                  <Input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={this.handleChange}
                    invalid={
                      formErrors.confirm_password.required ||
                      formErrors.confirm_password.matched
                    }
                  />
                  {formErrors.confirm_password.required && (
                    <FormFeedback>Confirm password is required</FormFeedback>
                  )}
                  {formErrors.confirm_password.matched && (
                    <FormFeedback>Password not matched</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Button color="primary" block disabled={!isFormValid}>
                    Submit
                  </Button>
                </FormGroup>
                <FormGroup>
                  <Link to="/login">Already have an account? Login here</Link>
                </FormGroup>
              </Form>
            </Widget>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Register;
