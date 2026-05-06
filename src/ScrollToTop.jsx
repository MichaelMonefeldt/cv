import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const app = document.querySelector('.App');
    if (app) app.scrollTop = 0; // scroll the div
  }, [location]);

  return null;
}
