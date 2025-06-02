import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({showHeader}) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={`${styles.headerContainer} ${showHeader ? styles.visible : styles.hidden}`}>
            <p className={styles.logo}>Michael Monefeldt</p>
        </div>
    );
}