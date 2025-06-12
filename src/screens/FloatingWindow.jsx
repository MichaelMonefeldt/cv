import React from 'react';
import styles from '../styles/FloatingWindow.module.css';

export default function FloatingWindow({ body, windowOpen, setWindowOpen }) {
    return (
        windowOpen && 
        <div 
            className={styles.container}
            onClick={() => 
                    setWindowOpen(false)
                }
            >
            <div className={styles.floatingWindow} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Members</h2>
                    <span className={styles.closeBtn} onClick={() => {
                        (e) => e.stopPropagation();
                        setWindowOpen(false);
                    }}>⨉</span>
                </div>
                <div className={styles.content}>
                    {body}
                </div>
            </div>
        </div>
        );
    }