import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './chapter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Header from './Pages/Header';
import Homepage from './Pages/Homepage';
import Profile from "./Pages/Profile";
import Material from "./Pages/Chapter";
import Chapter from "./Pages/Material";

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
        <Route path="/material" element={<Material />} />
        <Route path="/material/:chapterId" component={Chapter} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
