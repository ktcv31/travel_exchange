import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer'; 
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddExperience from './components/Experiences/AddExperience';
import ExperienceCard from './components/Experiences/ExperienceCard';
import Home from './components/Auth/Home'; 
import MapSearch from './components/Shared/Map'; // Import MapSearch
import Profile from './components/Auth/Profile'; 


function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-experience" element={<AddExperience />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/experience-card" element={<ExperienceCard />} />
            <Route path="/explore" element={<MapSearch />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
