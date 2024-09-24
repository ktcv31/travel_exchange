import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import AddExperience from './components/Experiences/AddExperience';
import ExperienceCard from './components/Experiences/ExperienceCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/experience-card" element={<ExperienceCard />} />
        <Route path="/login" element={<Login/>} /> {/* Add the Login Route */}


      </Routes>
    </Router>
  );
}

export default App;
