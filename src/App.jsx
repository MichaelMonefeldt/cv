import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Start from './screens/Start';
import Project from './screens/Project';
import './App.css';
import './assets/fonts/Fonts.module.css';
import projects from './projects.json';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const appRef = useRef(null);
  const topRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToSection = (section) => {
    switch (section) {
      case 'projects':
        handleScrollToProjects();
        break;
      case 'contact':
        handleScrollToContact();
        break;
      default:
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
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
          onScrollToSection={handleScrollToSection}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Start 
                topRef={topRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
              />
            }
          />
          <Route
            path="/project/:projectName"
            element={
              <Project 
                projects={projects}
              />
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
