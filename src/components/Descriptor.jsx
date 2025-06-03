import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowRight from '../assets/images/arrow_right.svg';
import styles from '../styles/Descriptor.module.css';

export default function Descriptor({ description, goTo }) {
    const navigate = useNavigate();

    return (
        <div className={styles.descriptorContainer}>
            <div className={styles.descriptorShadow}></div>
            <div className={styles.descriptor} onClick={() =>
                    navigate(goTo)}>
                <p className={styles.description}>{description}</p>
                <button>
                    <img src={arrowRight
                        } alt="Arrow Right" style={{height: '25px', padding: '0', margin: '0'}} />
                </button>
            </div>
        </div>
    );
}