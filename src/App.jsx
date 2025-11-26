import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contacts from './pages/Contacts.jsx';
import './App.css';

function App() {
  useEffect(() => {
    const applyThemeByTime = () => {
      const hour = new Date().getHours();
      const isNightTime = (hour >= 21 || hour < 6);

      if (isNightTime) {
        document.body.classList.add("dark-mode");
        const HUE = 234, SATURATION = 38, BASE_LIGHTNESS = 15;
        const newLightness = BASE_LIGHTNESS * (1 - 0.40);
        document.body.style.backgroundColor = `hsl(${HUE}, ${SATURATION}%, ${newLightness}%)`;
      } else {
        document.body.classList.remove("dark-mode");
        document.body.style.backgroundColor = '';
      }
    };

    applyThemeByTime();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;