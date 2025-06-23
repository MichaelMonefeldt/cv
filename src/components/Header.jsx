import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({showHeader, onScrollToSection}) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={`${styles.headerContainer} ${(location.pathname !== '/' || showHeader) ? styles.visible : styles.hidden}`}>
            <div className={styles.headerLeft} onClick={() => {
                navigate('/');
                onScrollToSection('top')}}>
                <p className={`${styles.logo} ${(location.pathname !== '/' || showHeader) ? styles.visible : styles.hidden}`} onClick={() => navigate('/')}>Michael Monefeldt</p>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.headerBtn} onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>
                    Projekter
                </button>
                <button className={styles.headerBtn} onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}>
                    Kontakt
                </button>
            </div>
        </div>
    );
}