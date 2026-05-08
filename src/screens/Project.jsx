import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Bodies from '../components/Bodies';
import Button from '../components/Button'; 
import manyBook from '../assets/images/manyBook.jpg';
import arrowBackIcon from '../assets/images/arrow_back.svg';
import styles from '../styles/Project.module.css';

export default function Project({projects}) {
    const [isHovered, setIsHovered] = useState(false);
    const { projectName } = useParams();
    // You can replace this with a dynamic import or a switch case based on projectName
    const projectMetaData = projects
    const project = projectMetaData[projectName];
    if (!project) {
        return <div className={styles.error}>Project not found</div>;
    }
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectContent}>
                <div className={styles.imageContainer} style={{ gridColumn: '1 / span 10', gridRow: '1 / span 3' }}>
                    <img src={project.image} alt={projectName} className={styles.projectImage} />
                </div>
                <div className={styles.titleElement} style={{ gridColumn: '2 / span 8', gridRow: '3 / span 2'}}>
                    <h1>{projectName}</h1>
                    <h2>{project.subheader}</h2>
                </div>

                <Bodies project={projectName} />
                <div className={styles.buttonContainer} style={{ gridColumn: '2 / span 8', gridRow: '6' }}>
                    <Button
                        text="Tilbage til start"
                        startImage={arrowBackIcon}
                        onClick={() => window.history.back()}
                        style="SecondBtn"
                    />
                </div>
            </div>
        </div>
    );
}