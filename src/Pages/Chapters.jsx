import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Chapter() {
  return (
    <>
      <div className="container material">
        <div className="material-header text-center my-4">
          <h1 className="display-4">Introduction to Cybersecurity</h1>
          <p className="lead">
            Course Description: Learn the basics of cybersecurity, including key
            concepts, terminology, and practices.
          </p>
        </div>

        <div className="modules">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Modules</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/material/chapter/1">
                    Chapter 1: What is Cybersecurity?
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/2">
                    Chapter 2: Importance of Cybersecurity
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/3">
                    Chapter 3: Types of Cyber Threats
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/4">
                    Chapter 4: Key Concepts in Cybersecurity
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/5">
                    Chapter 5: Cybersecurity Technologies and Tools
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/6">
                    Chapter 6: Cybersecurity Best Practices
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/7">
                    Chapter 7: Cybersecurity Frameworks and Standards
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/8">
                    Chapter 8: AI and ML in Cybersecurity
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/9">
                    Chapter 9: Emerging Trends in Cybersecurity
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/material/chapter/10">
                    Chapter 10: Career Paths in Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
            <p>
              © {new Date().getFullYear()} [Platform Name]. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Chapter;
