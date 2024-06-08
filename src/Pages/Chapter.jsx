import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function Chapter() {
  const { id } = useParams();
  const chapter = chapters[id];

  if (!chapter) {
    return <div className="container material">Chapter not found</div>;
  }

  return (
    <div className="container material my-5">
      <div className="chapter-content p-5 shadow-sm rounded">
        <h1 className="chapter-title mb-4">{chapter.title}</h1>
        {Object.values(chapter.paragraph).map((para, index) => (
          <p className="chapter-paragraph" key={index}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Chapter;
