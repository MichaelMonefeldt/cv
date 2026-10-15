import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import Header from './components/Header';
import Start from './screens/Start';
import Project from './screens/Project';
import ScrollToTop from './ScrollToTop';
import './App.css';
import './assets/fonts/Fonts.module.css';
import useMediaQuery from './useMediaQuery';
import projects from './projects.json';

const SCROLL_STORAGE_KEY = 'scroll-positions';

function readScrollPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

// Sets scrollTop, retrying for a while if the page isn't tall enough yet.
function restoreScroll(scrollEl, top) {
  let frame;
  let tries = 0;
  const step = () => {
    scrollEl.scrollTop = top;
    if (Math.abs(scrollEl.scrollTop - top) > 1 && tries++ < 60) {
      frame = requestAnimationFrame(step);
    }
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

// Remembers the scroll position of every history entry (by location.key):
// back/forward restores it, new navigations go to `state.scrollTo` or the top.
function AppScrollManager({ scrollRef }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positionsRef = useRef(readScrollPositions());
  const keyRef = useRef(location.key);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      positionsRef.current[keyRef.current] = scrollEl.scrollTop;
      try {
        sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positionsRef.current));
      } catch {
        // Storage unavailable; positions are still kept in memory.
      }
    };

    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [scrollRef]);

  useLayoutEffect(() => {
    const scrollEl = scrollRef.current;
    keyRef.current = location.key;
    if (!scrollEl) return;

    if (navigationType === 'POP') {
      return restoreScroll(scrollEl, positionsRef.current[location.key] ?? 0);
    }

    const sectionId = location.state?.scrollTo;
    const section = sectionId && document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollEl.scrollTop = 0;
    }
  }, [location.key, navigationType, scrollRef]);

  return null;
}

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [language, setLanguage] = useState('da');
  const appRef = useRef(null);
  const topRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isLargeScreen = useMediaQuery('(min-width:800px)');

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
        <Header 
          showHeader={showHeader}
          onScrollToSection={handleScrollToSection}
          language={language}
          setLanguage={setLanguage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Start 
                scrollRef={appRef}
                topRef={topRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                isLargeScreen={isLargeScreen}
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
