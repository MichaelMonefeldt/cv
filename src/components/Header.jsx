import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({showHeader, onScrollToSection}) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={`${styles.headerContainer} ${styles.visible}`}>
            <div className={styles.headerLeft} onClick={() => {
                navigate('/');
                onScrollToSection('top')}}>
                <p className={`${styles.logo} ${styles.visible}`} onClick={() => navigate('/')}>MICHAEL MONEFELDT</p>
            </div>
            <div className={styles.headerRight}>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>
                    Projekter
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}>
                    Kontakt
                </button>
            </div>
        </div>
    );
}