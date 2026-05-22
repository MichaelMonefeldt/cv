import React, { useEffect, useState } from 'react';

const TypingEffectLoop = ({ sentences = [], size, alignment, speed }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | highlighting | deleting
  const [highlight, setHighlight] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const currentSentence = sentences[sentenceIndex] || '';
  const hasMultipleSentences = sentences.length > 1;

  useEffect(() => {
    if (!currentSentence) return;

    let timeout;

    if (phase === 'typing') {
      if (text.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setText(currentSentence.slice(0, text.length + 1));
        }, speed || 100);
      } else {
        timeout = setTimeout(() => {
          if (hasMultipleSentences) {
            setHighlight(true);
            setPhase('highlighting');
          }
        }, 1000);
      }
    }
    else if (phase === 'highlighting') {
      timeout = setTimeout(() => {
        if (hasMultipleSentences) {
          setPhase('deleting');
        }
      }, 700);
    }

    else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText('');
        }, 100);
      } else {
        setHighlight(false);
        timeout = setTimeout(() => {
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setPhase('typing');
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, sentenceIndex, currentSentence, sentences.length, speed, hasMultipleSentences]);

  return (
    <div style={{  
        fontSize: `${size}`, 
        textAlign: alignment, 
        whiteSpace: 'pre-wrap', 
      }}>
      <span
        style={{
          backgroundColor: highlight ? 'white' : 'transparent',
          color: highlight ? 'var(--fiftiary)' : 'white',
          transition: 'background-color 0.3s, color 0.3s',
          padding: '0 4px',
          fontWeight: 'bold',
          fontFamily: 'ClashDisplay, serif',
        }}
      >
        {text}
      </span>
      <span
        className="cursor"
        style={{ animation: 'blink 1s step-end infinite' }}
      >
        |
      </span>

      <style>
        {`
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default TypingEffectLoop;