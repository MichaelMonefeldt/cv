import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowDownIcon from '../assets/images/arrow_down.svg';
import styles from '../styles/Header.module.css';

export default function Footer({showHeader}) {
    const navigate = useNavigate();

    return (
        <div className={`${styles.footerContainer}`}>
            <img style={{filter: 'invert(1)', position: 'absolute', top: '0', height: '18px'}} src={arrowDownIcon} alt="Scroll down" className={styles.scrollDownIcon} onClick={() => navigate('/')} />
            <p className={styles.logo}>Skriv til mig:</p>
            <a href="mailto:michaelmonefeldt@gmail.com" className={styles.emailLink}>
                michaelmonefeldt@gmail.com
            </a>
        </div>
    );
}