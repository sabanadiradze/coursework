import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizzSelection() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:3000/quizzes");
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="container quiz-selection">
      <h1 className="my-4">Choose a Quiz</h1>
      <ul className="list-group">
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="list-group-item">
            <Link to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
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

export default QuizzSelection;
