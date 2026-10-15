import React, { useEffect, useRef, useState } from 'react';

// Types `text` once, the first time it scrolls into view. The cursor blinks
// while typing and disappears when the text is complete.
const TypeOnScroll = ({ text = '', speed = 25 }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || length >= text.length) return;

    const timeout = setTimeout(() => setLength(length + 1), speed);
    return () => clearTimeout(timeout);
  }, [started, length, text.length, speed]);

  const done = length >= text.length;

  return (
    <span ref={ref} style={inheritFont}>
      <span style={srOnly}>{text}</span>
      <span aria-hidden="true" style={inheritFont}>
        {text.slice(0, length)}
        {started && !done && (
          <span style={{ ...inheritFont, display: 'inline-block', width: 0, animation: 'blink 1s step-end infinite' }}>|</span>
        )}
        {/* Reserve the full width so the button doesn't grow while typing */}
        <span style={{ ...inheritFont, visibility: 'hidden' }}>{text.slice(length)}</span>
      </span>

      <style>
        {`
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
};

// The global `*` rule in App.css sets a font on every element, so spans
// must opt back in to the button's font explicitly.
const inheritFont = {
  fontFamily: 'inherit',
  fontWeight: 'inherit',
};

const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
};

export default TypeOnScroll;
