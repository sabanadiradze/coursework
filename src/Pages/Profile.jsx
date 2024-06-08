import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Profile.css';

function Profile() {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [bio, setBio] = useState('Cybersecurity enthusiast with a passion for protecting digital assets.');
    const [password, setPassword] = useState('');
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [coursesInProgress, setCoursesInProgress] = useState([
        { title: 'Introduction to Cybersecurity', progress: 60 },
        { title: 'Advanced Network Protection', progress: 80 },
    ]);
    const [completedCourses, setCompletedCourses] = useState([
        { title: 'Fundamentals of Cybersecurity', certificateUrl: '#' },
    ]);

    const handleProfilePhotoChange = (e) => {
        setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleBioChange = (e) => setBio(e.target.value);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const toggleTwoFactorAuth = () => setTwoFactorAuth(!twoFactorAuth);

    return (
        <div className="container profile">
            <h1 className="my-4">Profile Overview</h1>

            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>User Information</h2>
                            <img
                                src={profilePhoto || '/path/to/default-photo.jpg'}
                                alt="Profile"
                                className="img-thumbnail mb-3"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                            <input type="file" onChange={handleProfilePhotoChange} className="form-control mb-3" />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bio" className="form-label">Bio</label>
                                <textarea
                                    className="form-control"
                                    id="bio"
                                    rows="3"
                                    value={bio}
                                    onChange={handleBioChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>Security Settings</h2>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Change Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="form-check form-switch mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="twoFactorAuth"
                                    checked={twoFactorAuth}
                                    onChange={toggleTwoFactorAuth}
                                />
                                <label className="form-check-label" htmlFor="twoFactorAuth">
                                    Two-Factor Authentication
                                </label>
                            </div>
                            <Link to="/account-settings" className="btn btn-link">Account Management</Link>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>Learning Progress</h2>
                            <h3>Courses In Progress</h3>
                            <div className="row">
                                {coursesInProgress.map((course, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="mb-3">
                                            <h4>{course.title}</h4>
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
                                            <button className="btn btn-primary mt-2">Resume Learning</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h3>Completed Courses</h3>
                            <ul className="list-group">
                                {completedCourses.map((course, index) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                        {course.title}
                                        <a href={course.certificateUrl} className="btn btn-secondary btn-sm">View Certificate</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <h2>Performance Overview</h2>
                            <p>Graphs/Charts: Visual representations of quiz scores, course completion rates, and other relevant performance metrics will be here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-dark text-white py-3">
                <div className="container text-center">
                    <div className="mb-3">
                        <Link to="/privacy-policy" className="text-white mx-2">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="text-white mx-2">Terms of Use</Link>
                        <Link to="/contact" className="text-white mx-2">Contact</Link>
                    </div>
                    <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Profile;
