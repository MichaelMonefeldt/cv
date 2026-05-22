import React, { useState, useEffect } from "react";
import arrowUp from '../assets/images/arrow_up.svg';
import styles from '../styles/ScrollToTopButton.module.css';

const ScrollToTopButton = ({ scrollRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = scrollRef?.current;
    const target = el || window;

    const getScrollTop = () => (el ? el.scrollTop : window.scrollY);

    const toggleVisibility = () => {
      setIsVisible(getScrollTop() > 300);
    };

    target.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // set initial state

    return () => target.removeEventListener("scroll", toggleVisibility);
  }, [scrollRef]);

  const scrollToTop = () => {
    const el = scrollRef?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.scrollToTopButton}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img
        className={styles.invertible}
        src={arrowUp}
        alt=""
        style={{ height: "20px", width: "20px" }}
      />
    </button>
  );
};

export default ScrollToTopButton;
