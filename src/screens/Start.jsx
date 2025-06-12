import React from 'react';
import { useNavigate } from 'react-router-dom';
import Descriptor from '../components/Descriptor';
import LayeredSVGAnimation from '../components/LayeredSVGAnimation';
import TypingEffect from '../components/TypingEffect';
import SpinningLoad from '../components/SpinningLoad';
import Footer from '../components/Footer';
import k_concept_dk from '../assets/images/k_concept_dk.png';
import k_logo from '../assets/images/k_logo.png';
import l_logo from '../assets/images/l_logo.svg';
import fromPhoneToComputer from '../assets/images/fromPhoneToComputer.svg';
import michael from '../assets/images/michael.svg';
import styles from '../styles/Start.module.css';

export default function Start({topRef, projectsRef, contactRef}) {
    const navigate = useNavigate();
    
    return (
        <div ref={topRef} className={styles.startContainer}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                    gridColumn: '1 / span 10', gridRow: '1 / span 5',
                    }}>
                <div className={`${styles.startContent} ${styles.special}`}>
                    <LayeredSVGAnimation />
                    {/* <img src={michael} alt="Michael Monefeldt" style={{height: 'auto', width: '80%', filter: 'invert(1)'}}/> */}
                </div>
                <div className={styles.startContent} style={{padding: '40px'}}>
                    <TypingEffect 
                        sentences={
                            [
                                'Michael Monefeldt',
                                'UX/UI-designer',
                                'Full Stack-udvikler',
                            ]
                        }
                    />
                </div>
            </div>


            <div className={`${styles.startContent} ${styles.goldenHover}`} style={{ gridColumn: '1 / span 2', gridRow: '6' }}>
                <h2 className={styles.title}>Full-Stack</h2>
                <div className={styles.hiddenContent}>
                    <p>ReactJS</p>
                    <p>ElectronJS</p>
                    <p>FastAPI</p>
                    <p>Flask</p>
                </div>
            </div>
            <div className={`${styles.startContent} ${styles.goldenHover}`} style={{ gridColumn: '3 / span 2', gridRow: '6' }}>
                <h2 className={styles.title}>Cloud Computing</h2>
                <div className={styles.hiddenContent}>
                    <p>AWS</p>
                    <p>Azure</p>
                    <p>PostgreSQL</p>
                </div>
            </div>
            <div className={`${styles.startContent} ${styles.goldenHover}`} style={{ gridColumn: '5 / span 2', gridRow: '6' }}>
                <h2 className={styles.title}>UX / UI</h2>
                <div className={styles.hiddenContent}>
                    <p>Figma</p>
                    <p>Affinity Designer 2</p>
                </div>
            </div>
            <div className={`${styles.startContent} ${styles.goldenHover}`} style={{ gridColumn: '7 / span 2', gridRow: '6' }}>
                <h2 className={styles.title}>Formidling</h2>
            </div>


            <div ref={projectsRef} className={styles.startContent}
                style={{ 
                    backgroundColor: 'rgb(0, 0, 0)',
                    color: 'white',
                    gridColumn: '1 / span 10', 
                    gridRow: '7 / span 1', 
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '40px',
                }}>
                <h2 
                    style={{
                        textAlign: 'center', 
                        fontSize: '2rem', 
                        fontFamily: 'Space_Mono, monospace',
                    }}>
                    <SpinningLoad color={'white'} size={'50px'} />
                    Projekter
                </h2>
            </div>


            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '8 / span 5', backgroundColor: '#AEB862' }}>
                <img className={styles.projectHeader} src={k_logo} alt="Katalogica" style={{height: '55px', width: 'auto'}}/>
                <img src={k_concept_dk} alt="Katalogica-koncept" />
                <Descriptor
                    description="AI-drevet webapplikation der høster metadata i bøger."
                    goTo="/project/katalogica"
                />
            </div>
            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 5', gridRow: '8 / span 5' }}>
                <img className={styles.projectHeader} src={l_logo} alt="Librerate" style={{height: '52px', width: 'auto'}}/>
                <img src={fromPhoneToComputer} alt="Librerate-koncept" />
                <Descriptor
                    description="Scan et væld af materialer med din mobil og registrer dem hurtigere."
                    goTo="/project/librerate"
                />
            </div>

            <div ref={contactRef} className={`${styles.footerWrapper} `} style={{ gridColumn: '1 / span 10', gridRow: '13 / span 2' }}>
                <Footer showHeader={true} />
            </div>
        </div>
    );
}