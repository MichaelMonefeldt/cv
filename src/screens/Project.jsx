import React, {useState} from 'react';
import styles from '../styles/Project.module.css';
import { useParams } from 'react-router-dom';

export default function Project({projects}) {
    const [isHovered, setIsHovered] = useState(false);
    const { projectName } = useParams();
    // You can replace this with a dynamic import or a switch case based on projectName
    const projectData = projects
    const project = projectData[projectName];
    if (!project) {
        return <div className={styles.error}>Project not found</div>;
    }
    return (
        <div className={styles.projectContainer}>
            <div style={{height: '8vh'}}></div>
            <div className={styles.projectContent}>
                <div className={styles.element} style={{ gridColumn: '2 / span 5', gridRow: '1 / span 3', border: '10px solid black', borderBottom: '0', borderRight: '0' }}>
                    <h1>{projectName}</h1>
                </div>
                <div className={styles.element} style={{ gridColumn: '7 / span 3', gridRow: '1 / span 3', border: '10px solid black' }}>
                    <h2>Teknologier</h2>
                    {project.technologies.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '4 / span 3', border: '10px solid black', borderTop: '0' }}>
                    Michael
                </div>
            </div>
        </div>
    );
}