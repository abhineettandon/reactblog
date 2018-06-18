import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import DefaultLayout from "../../layouts/defaultLayout.jsx";
import Widget from "../../components/Cards/Widget.jsx";

const Register = () => (
  <DefaultLayout>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Widget title="Register">
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" />
            </FormGroup>
            <FormGroup>
              <Label>Confirm password</Label>
              <Input type="password" />
            </FormGroup>
            <FormGroup>
              <Button color="primary" block>
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

export default Register;
