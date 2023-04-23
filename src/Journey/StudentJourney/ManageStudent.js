import React from "react";

function ManageStudent() {
  return (
    <div className="student-content-page">
      <hr />
      <h1>Manage Student</h1>
      <hr />
      <p className="content">
        Managing Student Details access was denied
        <br />
        please sign in
      </p>
      <div className="form-control">
        <div className="col mb-3">
          <label for="exampleInputEmail1" className="col form-label">
            Email address
          </label>
          <input
            type="email"
            className="row_form-control-email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="row form-text"></div>
        </div>
        <div className="col mb-3">
          <label for="exampleInputPassword1" className="col form-label">
            Password
          </label>
          <input
            type="password"
            className="row_form-control-pass"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
}
export default ManageStudent;
