import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Footer({showHeader}) {
    const navigate = useNavigate();

    return (
        <div className={`${styles.footerContainer}`}>
            <p className={styles.logo}>Skriv til mig:</p>
            <a href="mailto:michaelmonefeldt@gmail.com" className={styles.emailLink}>
                michaelmonefeldt@gmail.com
            </a>
        </div>
    );
}