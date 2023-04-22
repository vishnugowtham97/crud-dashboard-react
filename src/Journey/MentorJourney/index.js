import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <div className="landing-page-heading">
        <h1> Mentor Landing Page</h1>
        <div className="option-alignment">
          <Link to="/mentors/create">Create Mentor</Link>
          <Link to="/mentors/manage">Manage Mentor</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
