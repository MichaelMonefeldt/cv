import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Start from './screens/Start';
import Project from './screens/Project';
import ScrollToTop from './ScrollToTop';
import './App.css';
import './assets/fonts/Fonts.module.css';
import projects from './projects.json';

function AppScrollManager({ scrollRef }) {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);

  useLayoutEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const previousPath = previousPathRef.current;
    const currentPath = location.pathname;

    sessionStorage.setItem(
      `scroll-position:${previousPath}`,
      String(scrollEl.scrollTop)
    );

    previousPathRef.current = currentPath;

    if (currentPath === '/' && !location.state?.scrollTo) {
      const savedScrollTop = sessionStorage.getItem(`scroll-position:${currentPath}`);

      requestAnimationFrame(() => {
        scrollEl.scrollTop = savedScrollTop ? Number(savedScrollTop) : 0;
      });
    } else {
      requestAnimationFrame(() => {
        scrollEl.scrollTop = 0;
      });
    }
  }, [location.pathname, location.state, scrollRef]);

  return null;
}

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
        <AppScrollManager scrollRef={appRef} />
        {/* <Header 
          showHeader={showHeader}
          onScrollToSection={handleScrollToSection}
        /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Start 
                scrollRef={appRef}
                topRef={topRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
              />
            }
          />
          <Route
            path="/projekt/:projectName"
            element={
              <Project 
                projects={projects}
                scrollRef={appRef}
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
