import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import handleLogout from "./Dashboard";

function Header() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/homepage");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homepage">
          BeAware
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/videos">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/modules">
                Material
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quizzes">
                Quizzes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleLogoutClick}
                className="nav-link"
                to="/homepage"
              >
                Log Out
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
