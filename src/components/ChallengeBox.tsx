import {useChallenges} from '../hooks/useChallenges';
import { useCountdown } from '../hooks/useCountdown';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
        const {activeChallenge, resetChallenge, completedChallenge} = useChallenges();
        const { resetCountdown } = useCountdown();
        
    function handleChallengeSucceded () {
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed () {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className= {styles.ChallengeBoxContainer}>
           { activeChallenge ? (
               <div className= {styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button
                        type="button"
                        className={styles.challengesFaliedButton}
                        onClick={handleChallengeFailed}
                       >
                           Falhei
                        </button>
                        
                       <button
                        type="button"
                        className={styles.challengesSuccededButton}
                        onClick={handleChallengeSucceded}
                       >
                           Completei
                        </button>
                   </footer>
               </div>
           ) : (
                <div className= {styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
           )}
        </div>
    );
}