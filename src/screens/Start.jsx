import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import Descriptor from '../components/Descriptor';
import LayeredSVGAnimation from '../components/LayeredSVGAnimation';
import TypingEffect from '../components/TypingEffect';
import TypeOnScroll from '../components/TypeOnScroll';
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
import skills from '../skills.json';

export default function Start({scrollRef,topRef, contactRef, isLargeScreen}) {
    const [windowOpen, setWindowOpen] = useState(false);
    const [skillTitle, setSkillTitle] = useState(<div></div>)
    const [skillBody, setSkillBody] = useState(<div></div>)
    
    const navigate = useNavigate();


    const openSkill = (section, name) => {
        const skill = section[name];
        setSkillTitle(name);
        setSkillBody(
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <p>{skill.description}</p>
                {skill.example_projects.length > 0 && (
                    <>
                        <p><b>Læs, hvordan jeg har brugt {name} i mine projekter:</b></p>
                        <div className={styles.exampleProjects}>
                            {skill.example_projects.map((proj) => (
                                <p
                                    key={proj}
                                    className={styles.exampleProject}
                                    onClick={() => navigate(`/projekt/${proj}`)}
                                >
                                    {proj}
                                </p>
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
        setWindowOpen(true);
    };

    const specialRef = useRef(null);
    const projectRefs = useRef({});

    return (
        <div id="top" ref={topRef} className={styles.startContainer}>
            <div 
                className={styles.special}
                ref={specialRef}
            >
                <div style={{padding: '70px 40px', height: isLargeScreen ? '100%' : '75%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
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
                        src="./Portræt.jpg"
                        alt="Michael Monefeldt"
                        className={styles.portrait}
                    />
                </div>
            </div>

            <div className={`${styles.startContent} ${styles.project}`}  style={{ gridColumn: '1 / span 10', gridRow: '5 / span 3', backgroundColor: 'var(--background-color)' }}>
                <div
                    id="profile"
                    ref={(el) => {
                        projectRefs.current.pageturner = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectContent}>
                    <h2>
                        Profil
                    </h2>
                     <p>
                        Jeg er generalist med specialviden om UX-design, programmering, AI, digitalisering og kulturarv. Med min brede og blandede profil bygger jeg bro mellem forskellige fagligheder: Jeg kan tale med, når det bliver allermest teknisk, og samtidig kan jeg oversætte komplicerede dataproblemer og -løsninger til ledelse og kolleger uden erfaring med programmering.
                    </p>
                </div>
                <div className={styles.projectButtons}>
                    <button onClick={() => openSkill(skills.profil, "AI")}><TypeOnScroll text="AI" /></button>
                    <button onClick={() => openSkill(skills.profil, "Automatisering")}><TypeOnScroll text="Automatisering" /></button>
                    <button onClick={() => openSkill(skills.profil, "Digitalisering")}><TypeOnScroll text="Digitalisering" /></button>
                    <button onClick={() => openSkill(skills.profil, "Kommunikation")}><TypeOnScroll text="Kommunikation" /></button>
                    <button onClick={() => openSkill(skills.profil, "UX")}><TypeOnScroll text="UX" /></button>
                </div>
            </div>

            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 10', gridRow: '8 / span 3', backgroundColor: 'var(--text-color)' }}>
                <div
                    id="projects"
                    ref={(el) => {
                        projectRefs.current.wishwell = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectContent + " " + styles.black}>
                    <h2>
                        Projekter
                    </h2>
                    <p>
                        Her kan du gå på opdagelse i gennemførte og aktuelle projekter. Iblandt finder du både webapps, digitaliseringsindsatser og en udstilling.
                    </p>
                </div>
                <div className={styles.projectButtons + " " + styles.black}>
                    <button onClick={() => navigate("/projekt/PageTurner")}><TypeOnScroll text="PageTurner [Webapp]" /></button>
                    <button onClick={() => navigate("/projekt/Nodesamling")}><TypeOnScroll text="Opmærkning af Det Kgl. Biblioteks nodesamling [Digitalisering]" /></button>
                    <button onClick={() => navigate("/projekt/Lydrum")}><TypeOnScroll text="Etablering af lydrum på SDU [Digitalisering]" /></button>
                    <button onClick={() => navigate("/projekt/Katalogica")}><TypeOnScroll text="Katalogica [Webapp]" /></button>
                    <button onClick={() => navigate("/projekt/Vekselvirkninger")}><TypeOnScroll text="Vekselvirkninger [Udstilling]" /></button>
                </div>
            </div>

            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 10', gridRow: '11 / span 3', backgroundColor: 'var(--background-color)' }}>
                <div
                    id="technologies"
                    ref={(el) => {
                        projectRefs.current.dreamtrail = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectContent}>
                    <h2>
                        Teknologier
                    </h2>
                    <p>
                        Jeg anvender et hav af teknologier til at sikre effektive og pålidelige løsninger.
                        Her finder du en oversigt over de teknologier, jeg har størst erfaring og succes med i mit daglige arbejde.
                    </p>
                </div>
                <div className={styles.projectButtons}>
                    <button onClick={() => openSkill(skills.teknologi, "Azure")}><TypeOnScroll text="Azure" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "Alma")}><TypeOnScroll text="Alma" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "Docker")}><TypeOnScroll text="Docker" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "Figma")}><TypeOnScroll text="Figma" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "Python")}><TypeOnScroll text="Python" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "React")}><TypeOnScroll text="React" /></button>
                    <button onClick={() => openSkill(skills.teknologi, "SQL")}><TypeOnScroll text="SQL" /></button>
                </div>
            </div>

            <div className={`${styles.startContent} ${styles.project}`} style={{ gridColumn: '1 / span 10', gridRow: '14 / span 3', backgroundColor: 'var(--text-color)' }}>
                <div
                    id="publications"
                    ref={(el) => {
                        projectRefs.current.katalogica = el;
                    }}
                    className={styles.projectRefAnchor}
                />
                <div className={styles.projectContent + " " + styles.black}>
                    <h2>
                        Ekstra
                    </h2>
                    <p>
                        Dyk dybere i min baggrund og mine resultater.
                    </p>
                </div>
                <div className={styles.projectButtons + " " + styles.black}>
                    <button onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/experience/", "_blank", "noopener,noreferrer")}><TypeOnScroll text="Joberfaring" /></button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/education/", "_blank", "noopener,noreferrer")}><TypeOnScroll text="Uddannelser" /></button>
                    <button onClick={() => window.open("https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F74bccea4-3653-418b-ac5a-70feb0c7917a%2Flinked_in_profile&urlhash=nm3z&mt=LVHl2fhMiK48QlrAdViGce7SvjTgkxSy5BNbGcvp3m0wfJaG73609RcCRV1EAe05L7W1_HaUiOZPGoiFGCXUF4w5IvE&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BeX5x3eVuT5WGDWtVaBhe5Q%3D%3D", "_blank", "noopener,noreferrer")}><TypeOnScroll text="Google UX Design Professional Certificate" /></button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/publications/", "_blank", "noopener,noreferrer")}><TypeOnScroll text="Publikationer" /></button>
                </div>
            </div>

            <div id="contact" ref={contactRef} className={`${styles.footerWrapper} `} style={{ gridColumn: '1 / span 10', gridRow: '17 / span 2' }}>
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