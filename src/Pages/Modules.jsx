import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Material.css";

function Modules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [modules, setModules] = useState([
    {
      title: "Module 1: Introduction to Cybersecurity",
      description:
        "Learn the basics of cybersecurity, including key concepts and terminology.",
      progress: 80,
      videos: ["Video 1", "Video 2"],
      downloadableResources: ["Lecture Slides", "Reading Materials"],
      quizzes: ["Quiz 1"],
    },
    {
      title: "Module 2: Network Security",
      description:
        "Understand the principles of network security and how to protect network infrastructure.",
      progress: 50,
      videos: ["Video 3", "Video 4"],
      downloadableResources: ["Lecture Slides", "Reading Materials"],
      quizzes: ["Quiz 2"],
    },
  ]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="container material">
      <div className="material-header text-center my-4">
        <h1 className="display-4">Courses</h1>
      </div>

      <div className="search-bar my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="modules">
        {modules.map((module, index) => (
          <Link to={"/modules/chapters"} key={index}>
            <div className="card mb-4 hover-effect">
              <div className="card-body">
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <footer className="footer bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <div className="mb-3">
            <Link to="/faq" className="text-white mx-2">
              FAQs
            </Link>
            <Link to="/support" className="text-white mx-2">
              Support
            </Link>
            <Link to="/feedback" className="text-white mx-2">
              Feedback
            </Link>
          </div>
          <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Modules;
