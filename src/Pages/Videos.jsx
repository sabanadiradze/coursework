import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Videos() {
  const [videos, setVideos] = useState([]);
  const isLoggedIn = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        const response = await axios.get(
          "http://localhost:3000/videos",
          isLoggedIn ? config : {}
        );
        setVideos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, [isLoggedIn]);

  return (
    <div className="home">
      <div className="container material py-5">
        <div className="material-header text-center my-4">
          <h1 className="display-4">Videos</h1>
        </div>
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4 mb-4" key={video._id}>
              <div className="card h-100 video-card">
                <img
                  src={`${video.image}`}
                  className="card-img-top video-image"
                  alt={video.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.description}</p>
                  <a
                    target="_blank"
                    href={video.link}
                    className="btn btn-primary"
                  >
                    Watch Video
                  </a>
                  {video.isLocked && !isLoggedIn && (
                    <p className="text-danger mt-2">This video is locked.</p>
                  )}
                </div>
              </div>
            </div>
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

export default Videos;
