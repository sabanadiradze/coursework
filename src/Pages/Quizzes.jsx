import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../quizz.css";

function Quizzes() {
  const { id } = useParams();
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [results, setResults] = useState(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:3000/quizzes/${id}`);
        const data = await response.json();
        setQuizQuestions(data.questions);
        setSelectedAnswers(Array(data.questions.length).fill(null));
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    fetchQuizQuestions();
  }, [id]);

  if (!quizQuestions) {
    return <div className="container quiz">Quiz not found</div>;
  }

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = quizQuestions.map(
      (question, index) => question.answer === selectedAnswers[index]
    );
    setResults(correctAnswers);
  };

  const calculateScore = () => {
    return results.filter((result) => result).length;
  };

  const handleShowIncorrect = () => {
    if (showIncorrect) {
      setExpandedQuestions([]);
    } else {
      const incorrectQuestions = results
        .map((result, index) => (!result ? index : null))
        .filter((index) => index !== null);
      setExpandedQuestions(incorrectQuestions);
    }
    setShowIncorrect(!showIncorrect);
  };

  const toggleExpandQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((i) => i !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  return (
    <div className="container quiz">
      <h1 className="my-4">Cybersecurity Quiz</h1>
      <form onSubmit={handleSubmit}>
        {quizQuestions.map((question, questionIndex) => (
          <div key={questionIndex} className="quiz-question mb-4">
            <h5>{`${questionIndex + 1}. ${question.question}`}</h5>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${questionIndex}`}
                  id={`question-${questionIndex}-option-${optionIndex}`}
                  checked={selectedAnswers[questionIndex] === optionIndex}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {results && (
        <div className="quiz-results mt-4">
          <h3>Results</h3>
          <p>
            You got {calculateScore()} out of {quizQuestions.length} correct.
          </p>
          <button
            className="btn btn-secondary mb-3"
            onClick={handleShowIncorrect}
          >
            {showIncorrect ? "Hide Wrong Answers" : "Show Wrong Answers"}
          </button>
          <div className="accordion" id="resultsAccordion">
            {results.map((result, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${
                      result ? "text-success" : "text-danger"
                    } ${expandedQuestions.includes(index) ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={
                      expandedQuestions.includes(index) ? "true" : "false"
                    }
                    aria-controls={`collapse${index}`}
                    onClick={() => toggleExpandQuestion(index)}
                  >
                    {`Question ${index + 1}: ${
                      result ? "Correct" : "Incorrect"
                    }`}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    expandedQuestions.includes(index) ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#resultsAccordion"
                >
                  <div className="accordion-body">
                    <strong>{quizQuestions[index].question}</strong>
                    <ul>
                      {quizQuestions[index].options.map(
                        (option, optionIndex) => (
                          <li
                            key={optionIndex}
                            className={
                              optionIndex === quizQuestions[index].answer
                                ? "text-success"
                                : ""
                            }
                          >
                            {option}
                          </li>
                        )
                      )}
                    </ul>
                    <p>
                      <strong>Your Answer:</strong>{" "}
                      {quizQuestions[index].options[selectedAnswers[index]]}
                    </p>
                    <p>
                      <strong>Correct Answer:</strong>{" "}
                      {
                        quizQuestions[index].options[
                          quizQuestions[index].answer
                        ]
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quizzes;
