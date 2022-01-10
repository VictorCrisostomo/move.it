import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className= {styles.profileContainer}>
            <img src="<img alt="https://instagram.funa1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/271200141_450402556555413_6801541137254318147_n.jpg?_nc_ht=instagram.funa1-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=3WxV-x6NwB4AX_734QN&amp;edm=ALbqBD0BAAAA&amp;ccb=7-4&amp;oh=00_AT_3YwA9-GkamiqBbXqMR2fsy9L6HaLoOFX3ZjjcaAMDFQ&amp;oe=61E2B5F0&amp;_nc_sid=9a90d6">" alt="Gabi Lana"/>
            <div>
                <strong>Gabi Alana</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
