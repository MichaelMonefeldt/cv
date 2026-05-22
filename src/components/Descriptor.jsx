import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowRight from '../assets/images/arrow_right.svg';
import styles from '../styles/Descriptor.module.css';

export default function Descriptor({ description, goTo, color }) {
    const navigate = useNavigate();

    return (
        <div className={styles.descriptorContainer}>
            <div className={styles.descriptorShadow}></div>
            <div className={styles.descriptor} 
            onClick={() =>
                    navigate(goTo)}
            style={{ backgroundColor: color }}>
                <p className={styles.description}>{description}</p>
                <button style={{padding: '0px'}}>
                    <img src={arrowRight
                        } alt="Arrow Right" style={{height: '35px', padding: '0', margin: '0'}} />
                </button>   
            </div>
        </div>
    );
}