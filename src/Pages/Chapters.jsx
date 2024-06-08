import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { chapter0, chapter1 } from "../constant"; // Adjust the import path as needed

function Chapter() {
  const { id: chapterId } = useParams();

  // Convert the chapterId to an integer
  const chapterIndex = parseInt(chapterId, 10);

  // Define a mapping of chapterIndex to chapter data
  const chapterData = {
    0: chapter0,
    1: chapter1,
  };

  const chapter = chapterData[chapterIndex];
  if (!chapter) {
    return <div>Chapter not found</div>;
  }

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
              <h2>Chapters</h2>
              <ul className="list-group">
                {Object.keys(chapter).map((key) => (
                  <li className="list-group-item" key={key}>
                    <Link to={`/modules/chapter/${chapterId}/${key}`}>
                      {`Chapter ${key}: ${chapter[key].title}`}
                    </Link>
                  </li>
                ))}
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
