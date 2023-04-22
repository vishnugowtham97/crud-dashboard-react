import React from "react";
import Layout from "../Component/Layout";
import CRUD from "../Component/Crud";

function CreateStudent() {
  return (
    <div className="student-content-page">
      <hr />
      <h1>Create Student</h1>
      <hr />
      <br />
      <br />
      <div className="form-page">
        <CRUD />
        <Layout />
      </div>
    </div>
  );
}
export default CreateStudent;
