import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Homepage.css';

function Homepage() {
    return (
        <div className="home">
            <section className="hero-banner text-center text-white bg-dark">
                <div className="container py-5">
                    <h1 className="display-4">Empower Your Cybersecurity Skills</h1>
                    <p className="lead">Interactive training modules designed to fortify your digital safety.</p>
                    <div className="mt-4">
                        <Link to="/signup" className="btn btn-primary btn-lg mx-2">Get Started</Link>
                        <Link to="/about" className="btn btn-secondary btn-lg mx-2">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className="introduction py-5">
                <div className="container">
                    <p>Welcome to BeAware, your comprehensive pathway to mastering cybersecurity. Whether you're beginning your journey or looking to deepen your existing expertise, our platform is tailored to fit your needs.</p>
                    <div className="visual-elements my-4 d-flex justify-content-center">
                        <img src="/path/to/your/image1.png" alt="Shield Icon" className="img-fluid mx-2" />
                        <img src="/path/to/your/image2.png" alt="Lock Icon" className="img-fluid mx-2" />
                        <img src="/path/to/your/image3.png" alt="Network Icon" className="img-fluid mx-2" />
                    </div>
                </div>
            </section>

            <section className="how-it-works bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">How It Works</h2>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <h4>Step 1: Register or Log In</h4>
                            <p>Sign up to access personalized learning paths and track your progress.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Step 2: Choose Your Course</h4>
                            <p>Select from a variety of courses ranging from beginner to advanced levels.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Step 3: Engage and Learn</h4>
                            <p>Interactive quizzes, engaging videos, and comprehensive reading materials await you.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Step 4: Track Your Progress</h4>
                            <p>Monitor your achievements and review your learning journey at any time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-courses py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Explore Our Popular Courses</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="/path/to/course1.jpg" className="card-img-top" alt="Course 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Fundamentals of Cybersecurity</h5>
                                    <p className="card-text">Beginner Level</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="/path/to/course2.jpg" className="card-img-top" alt="Course 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Advanced Network Protection</h5>
                                    <p className="card-text">Advanced Level</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="/path/to/course3.jpg" className="card-img-top" alt="Course 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Threat Detection and Mitigation</h5>
                                    <p className="card-text">Intermediate Level</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Hear From Our Learners</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">"This platform has transformed my understanding of cybersecurity. Highly recommend!"</p>
                                <footer className="blockquote-footer">John Doe</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">"The courses are engaging and very informative. I feel much more confident now."</p>
                                <footer className="blockquote-footer">Jane Smith</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">"A great resource for anyone looking to improve their cybersecurity skills."</p>
                                <footer className="blockquote-footer">Michael Brown</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us py-5">
                <div className="container text-center">
                    <h2 className="mb-4">About Us</h2>
                    <p>Learn more about our mission to provide accessible and effective cybersecurity education.</p>
                    <div>
                        <Link to="/about" className="btn btn-secondary">More About Us</Link>
                    </div>
                </div>
            </section>

            <section className="call-to-action bg-dark text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Secure Your Digital World? Join Us Today!</h2>
                    <Link to="/signup" className="btn btn-primary btn-lg">Sign Up</Link>
                </div>
            </section>

            <footer className="footer bg-dark text-white py-3">
                <div className="container text-center">
                    <div className="mb-3">
                        <a href="https://www.facebook.com" className="text-white mx-2">Facebook</a>
                        <a href="https://www.twitter.com" className="text-white mx-2">Twitter</a>
                        <a href="https://www.linkedin.com" className="text-white mx-2">LinkedIn</a>
                    </div>
                    <div className="mb-3">
                        <Link to="/privacy-policy" className="text-white mx-2">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="text-white mx-2">Terms of Use</Link>
                        <Link to="/contact" className="text-white mx-2">Contact</Link>
                    </div>
                    <div className="mb-3">
                        <form className="form-inline justify-content-center">
                            <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Email" />
                            <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
                        </form>
                    </div>
                    <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;