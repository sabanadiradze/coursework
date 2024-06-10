import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { chapter0, chapter1 } from "../constant";
import "../chapter.css";

function Chapter() {
  const { id: chapterId } = useParams();

  const chapterIndex = parseInt(chapterId, 10);

  const chapterData = {
    0: chapter0,
    1: chapter1,
  };

  const chapter = chapterData[chapterIndex];
  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="home">
      <div className="container material">
        <div className="material-header text-center my-4">
          <h1 className="display-4">Chapters</h1>
          <p className="lead">
            Course Description: Make sure to read all of the chapters and don't forget to mark them as "Complete" after finishing it.
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
      </div>
      <footer className="footer py-2  position-sticky">
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

export default Chapter;
