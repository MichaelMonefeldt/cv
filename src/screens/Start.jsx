import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Descriptor from '../components/Descriptor';
import LayeredSVGAnimation from '../components/LayeredSVGAnimation';
import TypingEffect from '../components/TypingEffect';
import FloatingWindow from '../screens/FloatingWindow';
import SpinningLoad from '../components/SpinningLoad';
import Footer from '../components/Footer';
import k_logo from '../assets/images/k_logo.png';
import l_logo from '../assets/images/l_logo.svg';
import fromPhoneToComputer from '../assets/images/fromPhoneToComputer.svg';
import reading from '../assets/images/reading.jpg';
import manyBook from '../assets/images/manyBook.jpg';
import styles from '../styles/Start.module.css';
import technologies from '../technologies.json';

export default function Start({topRef, projectsRef, contactRef}) {
    const [windowOpen, setWindowOpen] = useState(false);
    const [skillTitle, setSkillTitle] = useState(<div></div>)
    const [skillBody, setSkillBody] = useState(<div></div>)
    
    const location = useLocation();
    
    useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

    return (
        <div id={top} ref={topRef} className={styles.startContainer}>
            <div className={styles.special} style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                    gridColumn: '1 / span 10', gridRow: '1 / span 5', backgroundColor:'white'
                    }}>
                <div className={`${styles.startContent}`}>
                    <LayeredSVGAnimation />
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

            {Object.entries(technologies).map(([category, techs], index) => (
                <div 
                    key={category}
                    className={`${styles.startContent} ${styles.goldenHover}`}
                    style={{ gridColumn: `${1 + index * 5} / span 5`, gridRow: '6 / span 2' }}
                >
                    <h2 className={styles.title}>{category}</h2>
                    <div className={styles.hiddenContent}>
                        {Object.entries(techs).map(([techKey, tech]) => (
                            <p key={techKey} onClick={() => {
                                setSkillTitle(tech.name);
                                setSkillBody(
                                    <div>
                                        <h3>{tech.name}</h3>
                                        <p>{tech.description}</p>
                                    </div>
                                );
                                setWindowOpen(true);
                            }}>
                                <b><span style={{fontSize: '20px', marginRight: '10px'}}>→</span> {tech.name}</b>
                            </p>
                        ))}
                    </div>
                </div>
            ))}

            <div id="projects" ref={projectsRef} className={styles.startContent}
                style={{ 
                    backgroundColor: 'rgb(0, 0, 0)',
                    color: 'white',
                    gridColumn: '1 / span 10', 
                    gridRow: '8 / span 1', 
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
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

            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 5', gridRow: '9 / span 4', backgroundColor: 'var(--secondary)' }}>
                <img className={styles.projectHeader} src={l_logo} alt="Librerate"/>
                <img 
                    src={fromPhoneToComputer}
                    alt="Librerate-koncept" 
                    style={{
                        height: 'auto',
                        width: '70%',
                        objectFit: 'cover',
                    }}
                />
                <Descriptor
                    description="Scan et væld af materialer med din mobil og registrer dem hurtigere."
                    goTo="/project/librerate"
                />
            </div>
            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '9 / span 4' }}>
                <img className={styles.projectHeader} src={k_logo} alt="Katalogica"/>
                <img src={reading} alt="Reader reading" />
                <Descriptor
                    description="Hold styr på dine læsevaner og modtag anbefalinger"
                    goTo="/project/pageTurner"
                />
            </div>
            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '13 / span 4', backgroundColor: 'var(--tertiary)' }}>
                <img className={styles.projectHeader} src={k_logo} alt="Katalogica"/>
                <img src={manyBook} alt="Katalogica-koncept" />
                <Descriptor
                    description="AI-drevet webapplikation der høster metadata i bøger."
                    goTo="/project/katalogica"
                />
            </div>

            <div id="contact" ref={contactRef} className={`${styles.footerWrapper} `} style={{ gridColumn: '1 / span 10', gridRow: '17 / span 3' }}>
                <Footer showHeader={true} />
            </div>

            <FloatingWindow
                title={skillTitle}
                body={
                    skillBody
                }
                windowOpen={windowOpen}
                setWindowOpen={setWindowOpen}
            />
        </div>
    );
}