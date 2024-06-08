import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { chapters } from "../constant";

function Chapter() {
  const { id, chapter } = useParams();
  const chapterData = chapters[id][chapter];
  if (!chapterData) {
    return <div className="container material">Chapter not found</div>;
  }

  const renderParagraphs = (paragraphs) => {
    return Object.values(paragraphs).map((para, index) => (
      <p className="chapter-paragraph" key={index}>
        {para}
      </p>
    ));
  };

  const renderSections = (sections) => {
    return Object.values(sections).map((section, index) => (
      <div key={index} className="section">
        <h2 className="section-title">{section.title}</h2>
        {renderParagraphs(section.paragraphs)}
      </div>
    ));
  };

  return (
    <div className="container material my-5">
      <div className="chapter-content p-5 shadow-sm rounded">
        <h1 className="chapter-title mb-4">{chapterData.title}</h1>
        {chapterData.paragraph && renderParagraphs(chapterData.paragraph)}
        {chapterData.sections && renderSections(chapterData.sections)}
      </div>
    </div>
  );
}

export default Chapter;
