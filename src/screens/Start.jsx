import React, {useState, useEffect, useRef} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import Descriptor from '../components/Descriptor';
import LayeredSVGAnimation from '../components/LayeredSVGAnimation';
import TypingEffect from '../components/TypingEffect';
import FloatingWindow from '../screens/FloatingWindow';
import PixelSprite from '../components/PixelSprite';
import Footer from '../components/Footer';
import k_logo from '../assets/images/k_logo.png';
import l_logo from '../assets/images/l_logo.svg';
import pageturner_logo from '../assets/images/pageturner_logo.svg';
import wishwell_logo from '../assets/images/wishwell_logo.svg';
import dreamtrail_logo from '../assets/images/dreamtrail_logo.svg';
import fromPhoneToComputer from '../assets/images/fromPhoneToComputer.svg';
import reading from '../assets/images/reading.jpg';
import manyBook from '../assets/images/manyBook.jpg';
import styles from '../styles/Start.module.css';
import technologies from '../technologies.json';

function FadeInOnScroll({ children, className = "", style={}}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.7 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} ${styles.fadeInSection} ${isVisible ? styles.visible : ""}`}
            style={style}
        >
            {children}
        </div>
    );
}


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
                    gridColumn: '1 / span 10', gridRow: '1 / span 4', backgroundColor:'white'
                }}>
                <LayeredSVGAnimation />
                <div style={{padding: '40px'}}>
                    <TypingEffect
                        sentences={
                            [
                                'Michael Monefeldt',
                                'UX/UI-designer',
                                'Software-udvikler',
                            ]
                        }
                    />
                </div>
            </div>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 5', gridRow: '5 / span 3', backgroundColor: 'var(--primary)' }}>
                <div className={styles.projectHeader}>
                    <img src={pageturner_logo} alt="PageTurner"/>
                    <h3>PageTurner</h3>
                </div>
                <PixelSprite
                        frames={[
                            "/books_big/book_01.png",
                            "/books_big/book_02.png",
                            "/books_big/book_03.png",
                            "/books_big/book_04.png",
                            "/books_big/book_05.png",
                            "/books_big/book_06.png",
                            "/books_big/book_07.png",
                            "/books_big/book_08.png",
                            "/books_big/book_09.png",
                            "/books_big/book_10.png",
                            "/books_big/book_11.png",
                            "/books_big/book_12.png",
                            "/books_big/book_13.png",
                            "/books_big/book_14.png",
                            "/books_big/book_15.png",
                        ]}
                        fps={6}
                        scale={4}
                    />
                <Descriptor
                    description="Den simpleste måde at holde styr på dine læsevaner"
                    goTo="/projekt/PageTurner"
                />
            </FadeInOnScroll>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '7 / span 3', backgroundColor: 'var(--secondary)' }}>
                <div className={styles.projectHeader}>
                    <img  src={wishwell_logo} alt="WishWell"/>
                    <h3>WishWell</h3>
                </div>
                
                <Descriptor
                    description="En smartere måde at dele dine ønsker med familie og venner"
                    goTo="/projekt/WishWell"
                />
            </FadeInOnScroll>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 5', gridRow: '9 / span 3', backgroundColor: 'var(--fortiary)' }}>
                <div className={styles.projectHeader}>
                    <img src={dreamtrail_logo} alt="DreamTrail"/>
                    <h3>DreamTrail</h3>
                </div>
                <Descriptor
                    description="Appen der udfordrer dig til at bevæge dig mere"
                    goTo="/projekt/DreamTrail"
                />
            </FadeInOnScroll>

            {/* <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '11 / span 3', backgroundColor: 'var(--tertiary)' }}>
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
                    goTo="/projekt/Librerate"
                />
            </div> */}

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 5', gridRow: '11 / span 3', backgroundColor: 'var(--tertiary)' }}>
                <img className={styles.projectHeader} src={k_logo} alt="Katalogica"/>
                
                <Descriptor
                    description="AI-drevet webapplikation der høster metadata i gamle bøger."
                    goTo="/projekt/Katalogica"
                />
            </FadeInOnScroll>

            <div className={styles.centeredHeader} style={{ gridColumn: '1 / span 10', gridRow: '15 / span 1'}}>
                <h2>
                    Værktøjer og kompetencer
                </h2>
            </div>

            {Object.entries(technologies).map(([category, techs], index) => (
                <div
                    key={category}
                    className={`${styles.startContent} ${styles.goldenHover}`}
                    style={{ gridColumn: `${1 + index * 5} / span 5`, gridRow: '16 / span 2', backgroundColor: index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)' }}
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
                    {index === 0 && (
                    <FaLaptopCode 
                        style={{ position: 'absolute', right: '50px', height: '40px', width: '40px', color: 'white' }}
                    />
                    )}
                    {index === 1 && (
                    <MdOutlineDesignServices
                        style={{ position: 'absolute', right: '50px', height: '40px', width: '40px', color: 'white' }}
                    />
                    )}
                </div>
            ))}

            <div id="contact" ref={contactRef} className={`${styles.footerWrapper} `} style={{ gridColumn: '1 / span 10', gridRow: '18 / span 3' }}>
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