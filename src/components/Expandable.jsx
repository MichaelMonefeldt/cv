import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Expandable.module.css';

function Expandable({ image, startImage, text, open, setOpen, menuContent, right, invert=false }) {
  const menuRef = useRef(null);

  const buttonRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div 
        ref={buttonRef} 
        className={styles.openMenuButton} 
        style={{backgroundColor: open && 'var(--tertiary-background-color)'}} 
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}>
        {image ? (
          <img className={`${styles.imageButton} ${!invert && 'invertible'}`} src={image} alt={text} style={{filter: invert ? 'invert(1)' : 'invert(0)'}} />
        ) : (
          <span className={`${styles.textButton} ${startImage && styles.withStart} `}>
            {startImage && <img className='invertible' src={startImage} alt={text} style={{height: '20px', width: 'auto'}}/>}
            <span id={styles.lable} className={styles.lable}>{text ? text : 'Loading...'}</span> 
            <span>▿</span>
          </span>
        )}
      </div>
      <div className={`${styles.menuContent} ${open ? styles.open : ''} ${right ? styles.right : ''}`}>
        {menuContent}
      </div>
      {/* {(description && hovering && !open) && (
        <FloatingDescription
          targetRef={buttonRef}
          text={description}
        />
      )} */}
    </div>
  );
}

export default Expandable;