import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Start from './screens/Start';
import Project from './screens/Project';
import './App.css';
import './assets/fonts/Fonts.module.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 3;
      if (appRef.current) {
        const scrollY = appRef.current.scrollTop;
        if (scrollY > scrollThreshold) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };

    const appNode = appRef.current;
    if (appNode) {
      appNode.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (appNode) {
        appNode.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App" ref={appRef}>
        <Header 
          showHeader={showHeader}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Start />
            }
          />
          <Route
            path="/project/:projectName"
            element={
              <Project />
            }
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
