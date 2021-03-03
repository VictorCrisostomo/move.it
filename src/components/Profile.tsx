import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className= {styles.profileContainer}>
            <img src="https://instagram.fbps1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125462352_285082236157798_7406462623746786745_n.jpg?_nc_ht=instagram.fbps1-1.fna.fbcdn.net&_nc_ohc=UKFseQJxli4AX8PI6uy&tp=1&oh=21f170d933cf6b9141bdcb7260d417ff&oe=6062EC6F" alt="Victor Crisostomo"/>
            <div>
                <strong>Gabi Alana ❤️</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}