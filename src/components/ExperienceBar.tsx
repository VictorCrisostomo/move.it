import {useChallenges} from "../hooks/useChallenges";

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useChallenges();

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className= {styles.experienceBar}>
            <img src="/logo-full.svg" alt="Logo Move.it" />

            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>

            <span className= {styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                {currentExperience}px    
            </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}