import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../Homepage.css";

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCourseClick = (e, isLocked, courseId) => {
    if (isLocked && !isLoggedIn && courseId !== 0) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <div className="home">
      <section className="hero-banner text-center text-white">
        <div className="container py-5">
          <h1 className="display-4">Empower Your Cybersecurity Skills</h1>
          <p className="lead">
            Interactive training modules designed to fortify your digital
            safety.
          </p>
          <div className="mt-4">
            <Link to="/signup" className="btn btn-primary btn-lg mx-2">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="introduction py-5">
        <div className="container">
          <p>
            Welcome to BeAware, your comprehensive pathway to mastering
            cybersecurity. Whether you're beginning your journey or looking to
            deepen your existing expertise, our platform is tailored to fit your
            needs.
          </p>
        </div>
      </section>

      <section className="how-it-works py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <h4>Step 1: Register or Log In</h4>
              <p>
                Sign up to access personalized learning paths and track your
                progress.
              </p>
            </div>
            <div className="col-md-3">
              <h4>Step 2: Choose Your Course</h4>
              <p>
                Select from a variety of courses ranging from beginner to
                advanced levels.
              </p>
            </div>
            <div className="col-md-3">
              <h4>Step 3: Engage and Learn</h4>
              <p>
                Interactive quizzes, engaging videos, and comprehensive reading
                materials await you.
              </p>
            </div>
            <div className="col-md-3">
              <h4>Step 4: Track Your Progress</h4>
              <p>
                Monitor your achievements and review your learning journey at
                any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-courses py-5">
        <div className="container">
          <h2 className="text-center mb-4">Explore Our Popular Courses</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 position-relative">
              <Link
                to="/modules/0/chapters"
                className="card mb-4 text-decoration-none text-dark"
                onClick={(e) => handleCourseClick(e, false, 0)}
              >
                <div className="card-body">
                  <h5 className="card-title">Introduction to Cybersecurity</h5>
                  <p className="card-text">Beginner Level</p>
                  <div>Free</div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 position-relative">
              <div className="card mb-4 text-decoration-none text-dark">
                <div className="card-body">
                  <h5 className="card-title">Network Security</h5>
                  <p className="card-text">Advanced Level</p>
                  {!isLoggedIn && <div className="locked-overlay">Locked</div>}
                  <Link
                    to="/modules/1/chapters"
                    className={`stretched-link ${
                      !isLoggedIn ? "disabled-link" : ""
                    }`}
                    onClick={(e) => handleCourseClick(e, true, 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-4">Hear From Our Learners</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "This platform has transformed my understanding of
                  cybersecurity. Highly recommend!"
                </p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "The courses are engaging and very informative. I feel much
                  more confident now."
                </p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "A great resource for anyone looking to improve their
                  cybersecurity skills."
                </p>
                <footer className="blockquote-footer">Michael Brown</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">
            Ready to Secure Your Digital World? Join Us Today!
          </h2>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Sign Up
          </Link>
        </div>
      </section>

      <footer className="footer py-4">
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

export default Homepage;
