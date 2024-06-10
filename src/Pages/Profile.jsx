import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Profile.css";
import { chapters } from "../constant";
import { loginStatus } from "../utils";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [completedCourses, setCompletedCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(true);
    const fetchProfileData = async () => {
      try {
        var status = await loginStatus();
        setIsLoggedIn(status);

        if (status) {
          const response = await axios.get("http://localhost:3000/profile", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          });
          const { username, email, bio, profilePhoto, completedCourses } =
            response.data;
          setName(username);
          setEmail(email);
          setBio(bio);
          setProfilePhotoUrl("http://localhost:3000" + profilePhoto);
          setCompletedCourses(completedCourses || []);
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };
    fetchProfileData();
  }, []);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
    setProfilePhotoUrl(URL.createObjectURL(file));
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    formData.append("newPassword", newPassword);
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        "http://localhost:3000/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const calculateProgress = (completedCourses, chapters) => {
    const progress = Object.keys(chapters).map((courseId) => {
      const totalChapters = Object.keys(chapters[courseId]).length;
      const completedCourse = completedCourses.find(
        (course) => course.id === courseId
      );
      const completedChapters = completedCourse
        ? completedCourse.chapters.length
        : 0;
      return {
        courseId,
        completedChapters,
        totalChapters,
        progress: (completedChapters / totalChapters) * 100,
      };
    });
    return progress;
  };

  const progressData = calculateProgress(completedCourses, chapters);

  return (
    <div className="container profile">
      {!isLoggedIn ? (
        <div className="text-center my-5">
          <h2>You need to be logged in to view this page</h2>
          <button className="btn btn-primary" onClick={handleLoginRedirect}>
            Login
          </button>
        </div>
      ) : (
        <>
          <h1 className="my-4">Profile Overview</h1>

          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>User Information</h2>
                  <img
                    src={profilePhotoUrl || "/path/to/default-photo.jpg"}
                    alt="Profile"
                    className="img-thumbnail mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <input
                    type="file"
                    onChange={handleProfilePhotoChange}
                    className="form-control mb-3"
                  />
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <textarea
                      className="form-control"
                      id="bio"
                      rows="3"
                      value={bio}
                      onChange={handleBioChange}
                    ></textarea>
                  </div>
                  <button className="btn btn-primary mt-2" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Security Settings</h2>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                  </div>

                  <button className="btn btn-primary mt-2" onClick={handleSave}>
                    Update
                  </button>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h2>Learning Progress</h2>
                  <h3>Courses Progress</h3>
                  <div className="row">
                    {progressData.map((course, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="mb-3">
                          <h4>Course {course.courseId}</h4>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${course.progress}%` }}
                              aria-valuenow={course.progress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <p>
                            {course.completedChapters} / {course.totalChapters}{" "}
                            chapters completed
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3>Completed Courses</h3>
                  <ul className="list-group">
                    {completedCourses.map((course, index) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}
                      >
                        {course.id}
                        <span>Chapters: {course.chapters.join(", ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <footer className="footer py-1 position-sticky">
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

export default Profile;
