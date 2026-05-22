import React, {useState, useRef} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import Bodies from '../components/Bodies';
import Button from '../components/Button'; 
import ScrollToTopButton from '../components/ScrollToTopButton';
import manyBook from '../assets/images/manyBook.jpg';
import arrowBackIcon from '../assets/images/arrow_back.svg';
import styles from '../styles/Project.module.css';

export default function Project({projects, scrollRef}) {
    const [isHovered, setIsHovered] = useState(false);
    const { projectName } = useParams();
    const navigate = useNavigate();
    // You can replace this with a dynamic import or a switch case based on projectName
    const projectMetaData = projects
    const project = projectMetaData[projectName];
    if (!project) {
        return <div className={styles.error}>Project not found</div>;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectContent}>
                <div className={styles.imageContainer} style={{ gridColumn: '1 / span 10', gridRow: '1 / span 3', backgroundColor: project.color }}>
                    <img
                        src={arrowBackIcon}
                        alt="Back"
                        className={styles.backBtn}
                        onClick={() => navigate(-1)}
                    />
                    {project.link ? ( 
                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.image} 
                                alt={projectName} 
                                className={styles.projectImage} 
                            />
                        </Link>
                    ) : (
                        <img 
                            src={project.image} 
                            alt={projectName} 
                            className={styles.projectImage} 
                        />
                    )}
                </div>
                <div className={styles.titleElement} style={{ gridColumn: '2 / span 8', gridRow: '3 / span 2'}}>
                    <h1>{projectName}</h1>
                    <h2>{project.subheader}</h2>
                </div>

                <Bodies project={projectName} />

                {project.link && (
                    <div className={styles.visit} style={{ gridColumn: '4 / span 8', gridRow: '6', backgroundColor: project.color }}>
                        <p>Besøg {projectName}</p>  
                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                alt={projectName}
                                className={styles.visitImage}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                        </Link>
                    </div>
                )}

                <div className={styles.buttonContainer} style={{ gridColumn: '2 / span 8', gridRow: project.link ? '7' : '6' }}>
                    <Button
                        text="Tilbage til start"
                        startImage={arrowBackIcon}
                        onClick={() => navigate(-1)}
                        style="SecondBtn"
                    />
                </div>
            </div>
            <ScrollToTopButton scrollRef={scrollRef} />
        </div>
    );
}