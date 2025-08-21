import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import arrowDownIcon from '../assets/images/arrow_down.svg';
import styles from '../styles/Header.module.css';

export default function Footer({showHeader}) {
    const navigate = useNavigate();

    return (
        <div className={`${styles.footerContainer}`}>
            <p className={styles.logo}>Kontakt mig:</p>
            <a href="mailto:michaelmonefeldt@gmail.com" className={styles.emailLink}>
                michaelmonefeldt@gmail.com
            </a>
            <div className={styles.socialIcons}>
                <a href="https://github.com/michaelmonefeldt" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/michael-m-89aa4898/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/monefeldtofficial/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className={styles.scrollToTop} onClick={() => navigate('/')}>
                <img src={arrowDownIcon} alt="Scroll to top" />
            </div>
            <div className={styles.footerText}>
                <p>© 2025 Michael Monefeldt</p>
                <p>Alle rettigheder forbeholdes.</p>
            </div>
        </div>
    );
}