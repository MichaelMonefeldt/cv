import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ startImage, endImage, text, width='100%', style, onClick, backgroundColor, color, loading, disabled }) {
    return (
        <button onClick={onClick} className={`${style === 'DeclineBtn' ? styles.DeclineBtn : style === 'SecondBtn' ? styles.SecondBtn : styles.MainBtn}`} disabled={loading || disabled} style={{ width: width, backgroundColor: backgroundColor, color: color }}>
            {loading ? (
                <>
                    <div className={styles.whiteSpinner}></div>
                </>
            ) : startImage ? (
                <div className={styles.inside}>
                    <img
                        src={startImage}
                        alt={text}
                        style={{ height: '25px', width: 'auto', filter: 'invert(1)' }}
                    />
                    {text}
                </div>
            ) : endImage ? (
                <div className={styles.inside}>
                    {text}
                    <img
                        src={endImage}
                        alt={text}
                        style={{ height: '25px', width: 'auto', filter: 'invert(1)' }}
                    />
                </div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
}

export default Button;