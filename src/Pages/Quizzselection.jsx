import React from 'react';
import { Link } from 'react-router-dom';


const quizzes = [
    { id: 1, title: "Introduction to Cybersecurity" },
    { id: 2, title: "Network Security" },

];

function Quizzselection() {
    return (
        <div className="container quiz-selection">
            <h1 className="my-4">Choose a Quiz</h1>
            <ul className="list-group ">
                {quizzes.map((quiz) => (
                    <li key={quiz.id} className="list-group-item">
                        <Link to={`/quizzes/${quiz.id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
            <footer className="footer py-2 fixed-bottom">
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
                    <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
                </div>
            </footer>
        </div>

    );
}

export default Quizzselection;