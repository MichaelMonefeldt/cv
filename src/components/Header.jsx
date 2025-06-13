import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({showHeader, onScrollToSection}) {
    const navigate = useNavigate();

    return (
        <div className={`${styles.headerContainer} ${showHeader ? styles.visible : styles.hidden}`}>
            <div className={styles.headerLeft} onClick={() => {
                navigate('/');
                onScrollToSection('top')}}>
                <p className={`${styles.logo} ${showHeader ? styles.visible : styles.hidden}`} onClick={() => navigate('/')}>Michael Monefeldt</p>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.headerBtn} onClick={() => onScrollToSection('projects')}>
                    Projekter
                </button>
                <button className={styles.headerBtn} onClick={() => onScrollToSection('contact')}>
                    Kontakt
                </button>
            </div>
        </div>
    );
}