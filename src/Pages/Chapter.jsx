import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { chapters } from "../constant";
import axios from "axios";

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

  const handleMarkAsCompleted = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        "http://localhost:3000/completeChapter",
        {
          courseId: id,
          chapterId: chapter,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert("Chapter marked as completed");
      }
    } catch (error) {
      console.error("Error marking chapter as completed:", error);
      alert("Error marking chapter as completed");
    }
  };

  return (
    <div className="container material my-5">
      <div className="chapter-content p-5 shadow-sm rounded">
        <h1 className="chapter-title mb-4">{chapterData.title}</h1>
        {chapterData.paragraph && renderParagraphs(chapterData.paragraph)}
        {chapterData.sections && renderSections(chapterData.sections)}
        <button
          className="btn btn-primary mt-4"
          onClick={handleMarkAsCompleted}
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
}

export default Chapter;
