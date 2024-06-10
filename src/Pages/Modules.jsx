import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Material.css";
import { loginStatus } from "../utils";
function Modules() {
  const [modules, setModules] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      const token = localStorage.getItem("authToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const response = await fetch("http://127.0.0.1:3000/modules", {
          headers,
        });
        if (response.ok) {
          const data = await response.json();
          setModules(data);
        } else {
          const errorText = await response.text();
          setError(errorText);
        }
      } catch (error) {
        setError("Error fetching modules");
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="home">
      <div className="container material py-5">
        <div className="material-header text-center my-4">
          <h1 className="display-4">Courses</h1>
        </div>
        <div className="modules">
          {error && <div className="alert alert-danger">{error}</div>}
          {modules.map((module, index) => (
            <Link to={"/modules/" + index + "/chapters"} key={index}>
              <div className="card mb-4 hover-effect">
                <div className="card-body">
                  <h2>{module.title}</h2>
                  <p>{module.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="footer py-2 fixed-bottom">
        <div className="container text-center">
          <div className="mb-3">
            <a href="https://www.facebook.com" className="text-white mx-2">
              Facebook
            </a>
            <a href="https://www.twitter.com" className="text-white mx-2">
              Twitter
            </a>
            <a href="https://www.linkedin.com" className="text-white mx-2">
              LinkedIn
            </a>
          </div>
          <div className="mb-3">
            <Link to="/privacy-policy" className="text-white mx-2">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-white mx-2">
              Terms of Use
            </Link>
            <Link to="/contact" className="text-white mx-2">
              Contact
            </Link>
          </div>
          <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Modules;
