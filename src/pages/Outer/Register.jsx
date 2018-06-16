import React from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../../layouts/defaultLayout.jsx";
import Widget from "../../components/Cards/Widget.jsx";

const Register = () => (
  <DefaultLayout>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Widget title="Register">
          <form method="POST">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input className="form-control" type="confirm_password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary col-md-12" disabled>
                Sumit
              </button>
            </div>
            <div className="form-group">
              <Link to="/login">Alredy have account? Login here</Link>
            </div>
          </form>
        </Widget>
      </div>
    </div>
  </DefaultLayout>
);

export default Register;
