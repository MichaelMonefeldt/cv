import React, { useEffect, useState } from 'react';

const TypingEffectLoop = ({ sentences }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | highlighting | deleting
  const [highlight, setHighlight] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const currentSentence = sentences[sentenceIndex];

  useEffect(() => {
    let timeout;

    if (phase === 'typing') {
      if (text.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setText(currentSentence.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setHighlight(true);
          setPhase('highlighting');
        }, 1000); // pause before highlighting
      }
    }

    if (phase === 'highlighting') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, 700); // highlight duration
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText('');
        }, 100);
      } else {
        setHighlight(false);
        setTimeout(() => {
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setPhase('typing');
        }, 500); // pause before typing next sentence
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, sentenceIndex, currentSentence]);

  return (
    <div style={{ fontFamily: 'Space_Mono', fontSize: '90px',}}>
      <span
        style={{
          backgroundColor: highlight ? 'white' : 'transparent',
          color: highlight ? 'black' : 'white',
          transition: 'background-color 0.3s, color 0.3s',
          padding: '0 4px',
        }}
      >
        {text}
      </span>
      <span className="cursor" style={{ animation: 'blink 1s step-end infinite' }}>|</span>

      <style>
        {`
          @keyframes blink {
            from, to { opacity: 1 }
            50% { opacity: 0 }
          }
        `}
      </style>
    </div>
  );
};

export default TypingEffectLoop;
