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
import starStorm from '../assets/images/star_storm.svg';
import wishlist_screenshot from '../assets/images/wishlist_screenshot.png';
import walkEx from '../assets/images/walkEx.svg';
import katalogica_concept from '../assets/images/k_concept_dk.png';
import fromPhoneToComputer from '../assets/images/fromPhoneToComputer.svg';
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


export default function Start({scrollRef,topRef, projectsRef, contactRef, isLargeScreen}) {
    const [windowOpen, setWindowOpen] = useState(false);
    const [skillTitle, setSkillTitle] = useState(<div></div>)
    const [skillBody, setSkillBody] = useState(<div></div>)
    
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    const scrollEl = scrollRef?.current;
                    if (scrollEl) {
                        sessionStorage.setItem(
                            'start-scroll-position',
                            String(scrollEl.scrollTop)
                        );
                    }
                }, 500);
            }
        }
    }, [location.state, scrollRef]);

    const specialRef = useRef(null);
    const toolsRef = useRef(null);
    const projectRefs = useRef({});

    return (
        <div id="top" ref={topRef} className={styles.startContainer}>
            <div 
                className={styles.special}
                ref={specialRef}
            >
                <div style={{padding: '40px', height: isLargeScreen ? '100%' : '75%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <TypingEffect
                        size={isLargeScreen ? "20vh" : "65px"}
                        alignment={"flex-start"}
                        sentences={
                            [
                                'UX-DESIGNER',
                                'FULL STACK-UDVIKLER',
                                'STORYTELLER'
                            ]
                        }
                    />
                </div>
                <div className={styles.portraitContainer}>
                    <img 
                        src="./portrait.jpg"
                        alt="Michael Monefeldt"
                        className={styles.portrait}
                    />
                </div>
            </div>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 4', gridRow: '5 / span 4', backgroundColor: 'var(--primary)' }}>
                <div
                    ref={(el) => {
                        projectRefs.current.pageturner = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectHeader}>
                    <img src="./projects/pageturner_logo.svg" alt="PageTurner"/>
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
                        scale={5}
                    />
                <Descriptor
                    description="Den simpleste måde at holde styr på, hvad du læser"
                    goTo="/projekt/PageTurner"
                />
            </FadeInOnScroll>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '2 / span 4', gridRow: '9 / span 4', backgroundColor: 'var(--secondary)' }}>
                <div
                    ref={(el) => {
                        projectRefs.current.wishwell = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                
                <div className={styles.projectHeader}>
                    <img  src="./projects/wishwell_logo.svg" alt="WishWell"/>
                    <h3>WishWell</h3>
                </div>

                <img
                    src={wishlist_screenshot}
                    alt="WishWell-koncept"
                    style={{
                        height: 'auto',
                        width: '30%',
                        borderRadius: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        zIndex: 10,
                    }}
                />

                <img 
                    src={starStorm}
                    alt="WishWell-koncept" 
                    style={{
                        position: 'absolute',
                        height: 'auto',
                        width: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                        opacity: 0.1,
                    }}
                />
            
                <Descriptor
                    description="En smart måde at dele dine ønsker med dine nærmeste"
                    goTo="/projekt/WishWell"
                />
            </FadeInOnScroll>

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '6 / span 4', gridRow: '13 / span 4', backgroundColor: 'var(--fortiary)' }}>
                <div
                    ref={(el) => {
                        projectRefs.current.dreamtrail = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectHeader}>
                    <img src="./projects/dreamtrail_logo.svg" alt="DreamTrail"/>
                    <h3>DreamTrail</h3>
                </div>
                <img
                    src={walkEx}
                    alt="DreamTrail-koncept"
                    style={{
                        height: 'auto',
                        width: '80%',  
                        objectFit: 'cover',
                    }}
                />
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

            <FadeInOnScroll className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '2 / span 4', gridRow: '17 / span 4', backgroundColor: 'var(--tertiary)' }}>                
                <div
                    ref={(el) => {
                        projectRefs.current.katalogica = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectHeader}>
                    <img src="./projects/katalogica_logo.svg" alt="Katalogica"/>
                    <h3 style={{color: 'black'}}>Katalogica</h3>
                </div>

                <img
                    src={katalogica_concept}
                    alt="Katalogica-koncept"
                    style={{
                        height: 'auto',
                        width: '70%',
                        objectFit: 'cover',
                    }}
                />
                <Descriptor
                    description="Høster metadata i gamle bøger med hjælp fra AI"
                    goTo="/projekt/Katalogica"
                />
            </FadeInOnScroll>

            {/* {isLargeScreen && (
                <div 
                    className={styles.centeredHeader} 
                    style={{ gridColumn: '2 / span 8', gridRow: '22 / span 1'}}
                    ref={toolsRef}
                >
                    <h2>
                        Dyk ned i mine kompetencer
                    </h2>
                </div>
            )}

            {isLargeScreen && Object.entries(technologies).map(([category, techs], index) => (
                <div
                    key={category}
                    className={`${isLargeScreen ? styles.startContent : ''} ${styles.goldenHover}`}
                    style={{ 
                        gridColumn: `${index === 0 ? '2' : '6'} / span 4`, gridRow: '23 / span 2', 
                        backgroundColor: 'white',
                        // index % 2 === 0 ? 'var(--secondary)' : 'var(--primary)' 
                    }}
                >
                    <h2 className={styles.title}>{category}</h2>
                    <div className={styles.hiddenContent}>
                        {Object.entries(techs).map(([techKey, tech]) => (
                            <p key={techKey} onClick={() => {
                                setSkillTitle(tech.name);
                                setSkillBody(
                                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                        <p>{tech.description}</p>
                                        <p><b>Brugt i udviklingen af:</b></p>
                                        <div className={styles.exampleProjects}>
                                            {tech.example_projects.map((proj, idx) => (
                                                <p 
                                                    key={idx} 
                                                    className={styles.exampleProject}
                                                    onClick={() => {
                                                        navigate(`/projekt/${proj}`);
                                                    }}  
                                                >
                                                    {proj}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                );
                                setWindowOpen(true);
                            }}>
                                <b><span style={{fontSize: '20px', marginRight: '10px'}}>→</span> {tech.name}</b>
                            </p>
                        ))}
                    </div>
                    {index === 0 && (
                    <img 
                        src="/coding.jpg"
                        alt="Coding"
                        style={{ position: 'absolute', right: '0px', height: 'auto', width: '50%' }}
                    />
                    )}
                    {index === 1 && (
                    <img 
                        src="/ux.jpg"
                        alt="Design"
                        style={{ position: 'absolute', right: '0px', height: '120%', width: '50%', objectFit: 'cover', top: '-20px' }}
                    />
                    )}
                </div>
            ))} */}

            <div id="contact" ref={contactRef} className={`${styles.footerWrapper} `} style={{ gridColumn: '1 / span 10', gridRow: '21 / span 2' }}>
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