import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des pages (remplace par '../pages/...' si ton dossier pages est hors de src)
import Home from '/pages/Home';
import About from '/pages/About';
import Contact from '/pages/Contact';
import Projects from '/pages/Projects';

import './style.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;