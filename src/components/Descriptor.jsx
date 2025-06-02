import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowRight from '../assets/images/arrow_right.svg';
import styles from '../styles/Descriptor.module.css';

export default function Descriptor({ description, goTo }) {
    const navigate = useNavigate();

    return (
        <div className={styles.descriptorContainer}>
            <p className={styles.description}>{description}</p>
            <button className={styles.button} onClick={() =>
                navigate(goTo)}>
                <img src={arrowRight
                    } alt="Arrow Right" style={{height: '25px', padding: '0', margin: '0'}} />
            </button>
        </div>
    );
}