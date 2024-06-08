// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import '../Material.css';

// function Material() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [modules, setModules] = useState([
//         {
//             title: 'Module 1: Introduction to Cybersecurity',
//             description: 'Learn the basics of cybersecurity, including key concepts and terminology.',
//             progress: 80,
//             videos: ['Video 1', 'Video 2'],
//             downloadableResources: ['Lecture Slides', 'Reading Materials'],
//             quizzes: ['Quiz 1'],
//         },
//         {
//             title: 'Module 2: Network Security',
//             description: 'Understand the principles of network security and how to protect network infrastructure.',
//             progress: 50,
//             videos: ['Video 3', 'Video 4'],
//             downloadableResources: ['Lecture Slides', 'Reading Materials'],
//             quizzes: ['Quiz 2'],
//         },
//     ]);

//     const handleSearchChange = (e) => setSearchTerm(e.target.value);

//     return (
//         <div className="container material">
//             <div className="material-header text-center my-4">
//                 <h1 className="display-4">Courses</h1>

//             </div>

//             <div className="search-bar my-4">
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Search topics..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//             </div>

//             <div className="modules">
//                 {modules.map((module, index) => (
//                     <div className="card mb-4" key={index}>
//                         <div className="card-body">
//                             <h2>{module.title}</h2>
//                             <p>{module.description}</p>
//                             <div className="progress mb-3">
//                                 <div
//                                     className="progress-bar"
//                                     role="progressbar"
//                                     style={{ width: `${module.progress}%` }}
//                                     aria-valuenow={module.progress}
//                                     aria-valuemin="0"
//                                     aria-valuemax="100"
//                                 ></div>
//                             </div>
//                             <h3>Videos</h3>
//                             <ul>
//                                 {module.videos.map((video, idx) => (
//                                     <li key={idx}>{video}</li>
//                                 ))}
//                             </ul>
//                             <h3>Downloadable Resources</h3>
//                             <ul>
//                                 {module.downloadableResources.map((resource, idx) => (
//                                     <li key={idx}>{resource}</li>
//                                 ))}
//                             </ul>
//                             <h3>Quizzes</h3>
//                             <ul>
//                                 {module.quizzes.map((quiz, idx) => (
//                                     <li key={idx}>{quiz}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <footer className="footer bg-dark text-white py-3 mt-5">
//                 <div className="container text-center">
//                     <div className="mb-3">
//                         <Link to="/faq" className="text-white mx-2">FAQs</Link>
//                         <Link to="/support" className="text-white mx-2">Support</Link>
//                         <Link to="/feedback" className="text-white mx-2">Feedback</Link>
//                     </div>
//                     <p>© {new Date().getFullYear()} BeAware All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Material;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Material.css';

const chapters = {
    chapter1: {
        title: 'Chapter 1: What is Cybersecurity?',
        content: `Cybersecurity, often referred to as information technology security, is the practice of protecting systems, networks, and programs from digital attacks...`
    },
    chapter2: {
        title: 'Chapter 2: Importance of Cybersecurity',
        content: `In today's interconnected world, cybersecurity is crucial for several reasons. First and foremost, it protects sensitive information from unauthorized access and theft...`
    },
    
};

function Material() {
    const { chapterId } = useParams();
    const chapter = chapters[chapterId];

    return (
        <div className="container chapter">
            <div className="chapter-header text-center my-4">
                <h1 className="display-4">{chapter.title}</h1>
            </div>
            <div className="chapter-content">
                <p>{chapter.content}</p>
            </div>
            <div className="navigation-buttons text-center my-4">
                {chapterId !== 'chapter1' && (
                    <Link to={`/material/chapter${parseInt(chapterId.split('chapter')[1]) - 1}`} className="btn btn-primary mx-2">
                        Previous
                    </Link>
                )}
                {chapterId !== 'chapter10' && (
                    <Link to={`/material/chapter${parseInt(chapterId.split('chapter')[1]) + 1}`} className="btn btn-primary mx-2">
                        Next
                    </Link>
                )}
            </div>
            <div className="text-center">
                <Link to="/material" className="btn btn-secondary mt-4">Back to Materials Overview</Link>
            </div>
        </div>
    );
}

export default Material;