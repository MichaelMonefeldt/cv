import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LayeredSVGAnimation from './LayeredSVGAnimation';
import arrowDownIcon from '../assets/images/arrow_down.svg';
import styles from '../styles/Header.module.css';

export default function Footer({showHeader}) {
    const navigate = useNavigate();

    return (
        <div className={`${styles.footerContainer}`}>
            {/* <LayeredSVGAnimation /> */}
            <h2>Kontakt</h2>
            <a href="mailto:michaelmonefeldt@gmail.com" className={styles.emailLink}>
                michaelmonefeldt@gmail.com
            </a>
            <div className={styles.socialIcons}>
                <a href="https://github.com/michaelmonefeldt" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/michaelmonefeldt/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/michael_monefeldt/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className={styles.scrollToTop} onClick={() => navigate('/')}>
                <img src={arrowDownIcon} alt="Scroll to top" />
            </div>
        </div>
    );
}