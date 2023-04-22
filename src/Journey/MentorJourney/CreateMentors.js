import React from "react";
import Layout from "../Component/Layout";
import CRUD from "../Component/Crud";

function CreateMentors() {
  return (
    <div className="student-content-page">
      <hr />
      <h1>Create Mentors</h1>
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
export default CreateMentors;
