import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "./Material.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Modules from "./Pages/Modules";
import Chapters from "./Pages/Chapters";
import Chapter from "./Pages/Chapter";
import Quizzes from "./Pages/Quizzes";
import Quizzselection from "./Pages/Quizzselection";
import Videos from "./Pages/Videos";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modules/:id/chapters" element={<Chapters />} />
        <Route path="/modules" element={<Modules chapterId={1} />} />
        <Route path="/modules/chapter/:id/:chapter" element={<Chapter />} />
        <Route path="/quizzes" element={<Quizzselection />} />
        <Route path="/quizzes/:id" element={<Quizzes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
