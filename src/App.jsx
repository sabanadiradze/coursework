import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./chapter.css";
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
        <Route path="/modules/chapters" element={<Chapters />} />
        <Route path="/modules" element={<Modules chapterId={1} />} />
        <Route path="/modules/chapter/:id" element={<Chapter />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
