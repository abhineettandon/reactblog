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
        name: false,
        email: false,
        password: false,
        confirm_password: false
      },
      isFormValid: false
    };
  }

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState(() => ({ formData: formData }), this.isValid(event.target));
  };

  isValid = ({ name, value }) => {
    switch (name) {
      case "name":
        value === ""
          ? this.updateErrorState("name", true)
          : this.updateErrorState("name", false);
        break;
      case "email":
        value === ""
          ? this.updateErrorState("email", true)
          : this.updateErrorState("email", false);
        break;
      case "password":
        value === ""
          ? this.updateErrorState("password", true)
          : this.updateErrorState("password", false);
        break;
      case "confirm_password":
        value === ""
          ? this.updateErrorState("confirm_password", true)
          : this.updateErrorState("confirm_password", false);
        break;
      default:
        break;
    }
  };

  updateErrorState = (key, value) => {
    this.setState(oldState => ({
      formErrors: { ...oldState.formErrors, [key]: value }
    }));
  };

  render() {
    const { formData, formErrors, isFormValid } = this.state;
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Widget title="Register">
              <Form>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={this.handleChange}
                    invalid={formErrors.name}
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
                  <Label>Confirm password</Label>
                  <Input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={this.handleChange}
                    invalid={formErrors.confirm_password}
                  />
                  <FormFeedback>Confirm password is required</FormFeedback>
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
