import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiPlus, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
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

// Icons signal what a project button does: open a floating window,
// navigate to an internal page, or open an external site in a new tab.
const buttonTypes = {
    window: { Icon: FiPlus, label: 'Åbner et vindue' },
    internal: { Icon: FiArrowRight, label: 'Går til side' },
    external: { Icon: FiArrowUpRight, label: 'Åbner ekstern side i ny fane' },
};

function ProjectButton({ type, text, onClick }) {
    const { Icon, label } = buttonTypes[type];
    return (
        <button onClick={onClick} title={label}>
            <TypeOnScroll text={text} />
            <Icon className={`${styles.buttonIcon} ${styles[type]}`} aria-hidden="true" />
        </button>
    );
}

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
                    <ProjectButton type="window" onClick={() => openSkill(skills.profil, "AI")} text="AI" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.profil, "Automatisering")} text="Automatisering" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.profil, "Digitalisering")} text="Digitalisering" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.profil, "Kommunikation")} text="Kommunikation" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.profil, "UX")} text="UX" />
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
                        Her kan du gå på opdagelse i artikler om mine færdige og aktuelle projekter. Kom med på rejsen og udforsk de forskellige udviklings-, digitaliserings- og udstillingsinitiativer, jeg har været en del af.
                    </p>
                </div>
                <div className={styles.projectButtons + " " + styles.black}>
                    <ProjectButton type="internal" onClick={() => navigate("/projekt/PageTurner")} text="PageTurner [Webapp]" />
                    <ProjectButton type="internal" onClick={() => navigate("/projekt/Nodesamling")} text="Opmærkning af Nodesamlingen [Digitalisering]" />
                    <ProjectButton type="internal" onClick={() => navigate("/projekt/Lydrum")} text="Etablering af lydrum på SDU [Digitalisering]" />
                    <ProjectButton type="internal" onClick={() => navigate("/projekt/Katalogica")} text="Katalogica [Webapp]" />
                    <ProjectButton type="internal" onClick={() => navigate("/projekt/Vekselvirkninger")} text="Vekselvirkninger [Udstilling]" />
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
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "Azure")} text="Azure" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "Alma")} text="Alma" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "Figma")} text="Figma" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "Python")} text="Python" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "React")} text="React" />
                    <ProjectButton type="window" onClick={() => openSkill(skills.teknologi, "SQL")} text="SQL" />
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
                    <ProjectButton type="external" onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/experience/", "_blank", "noopener,noreferrer")} text="Joberfaring" />
                    <ProjectButton type="external" onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/education/", "_blank", "noopener,noreferrer")} text="Uddannelser" />
                    <ProjectButton type="external" onClick={() => window.open("https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F74bccea4-3653-418b-ac5a-70feb0c7917a%2Flinked_in_profile&urlhash=nm3z&mt=LVHl2fhMiK48QlrAdViGce7SvjTgkxSy5BNbGcvp3m0wfJaG73609RcCRV1EAe05L7W1_HaUiOZPGoiFGCXUF4w5IvE&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BeX5x3eVuT5WGDWtVaBhe5Q%3D%3D", "_blank", "noopener,noreferrer")} text="Google UX Design Professional Certificate" />
                    <ProjectButton type="external" onClick={() => window.open("https://www.linkedin.com/in/michaelmonefeldt/details/publications/", "_blank", "noopener,noreferrer")} text="Publikationer" />
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