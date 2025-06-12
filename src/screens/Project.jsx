import React, {useState} from 'react';
import styles from '../styles/Project.module.css';
import { useParams } from 'react-router-dom';

export default function Project() {
    const [isHovered, setIsHovered] = useState(false);
    const { projectName } = useParams();
    // You can replace this with a dynamic import or a switch case based on projectName
    const projectData = {
        'librerate': {
            description: 'This is the description for Project 1.',
            image: 'path/to/project1-image.jpg',
            link: 'https://example.com/project1'
        },
        'katalogica': {
            description: 'This is the description for Project 2.',
            image: 'path/to/project2-image.jpg',
            link: 'https://example.com/project2'
        }
    };
    const project = projectData[projectName];
    if (!project) {
        return <div className={styles.error}>Project not found</div>;
    }
    return (
        <div className={styles.projectContainer}>
            <h1 className={styles.projectTitle}>{projectName}</h1>
            <div className={styles.projectContent}>
                <img 
                    src={project.image} 
                    alt={`${projectName} screenshot`} 
                    className={styles.projectImage}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                {isHovered && (
                    <div className={styles.projectDescription}>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                )}
            </div>
        </div>
    );
}