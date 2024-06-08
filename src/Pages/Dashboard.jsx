import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleLogout } from "../utils";
function Dashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "20rem" }}>
        <h3 className="card-title text-center">Dashboard</h3>
        <p className="text-center">Welcome to the dashboard!</p>
        <button onClick={handleLogout} className="btn btn-danger w-100">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
