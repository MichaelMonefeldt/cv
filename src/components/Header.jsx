import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from '../styles/Header.module.css';

export default function Header({showHeader, onScrollToSection, language, setLanguage}) {
    const navigate = useNavigate();
    const location = useLocation();
    // Only used on small screens, where the buttons collapse into a menu
    const [menuOpen, setMenuOpen] = useState(false);

    const goToSection = (section) => {
        setMenuOpen(false);
        navigate('/', { state: { scrollTo: section } });
    };

    return (
        <div className={`${styles.headerContainer} ${styles.visible}`}>
            <div className={styles.headerLeft} onClick={() => {
                setMenuOpen(false);
                navigate('/');
                onScrollToSection('top')}}>
                <p className={`${styles.logo} ${styles.visible}`} onClick={() => navigate('/')}>MICHAEL MONEFELDT</p>
            </div>
            <button
                className={styles.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className={`${styles.headerRight} ${menuOpen ? styles.open : ''}`}>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => goToSection('profile')}>
                    Profil
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => goToSection('projects')}>
                    Projekter
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => goToSection('technologies')}>
                    Teknologier
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => goToSection('publications')}>
                    Ekstra
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => goToSection('contact')}>
                    Kontakt
                </button>
                <button className={`${styles.headerBtn} ${styles.visible}`} onClick={() => setLanguage(language === 'da' ? 'en' : 'da')}>
                    {language === 'da' ? (
                        <>
                            <u>DK</u>/EN
                        </>
                    ) : (
                        <>
                            DK/<u>EN</u>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
