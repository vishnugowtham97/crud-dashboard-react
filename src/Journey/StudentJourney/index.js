import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <div className="landing-page-heading">
        <h1> Students Landing Page</h1>
        <div className="option-alignment">
          <Link to="/students/create">Create Students</Link>
          <Link to="/students/manage">Manage Students</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
