import cx from 'classnames';

import {useChallenges} from "../hooks/useChallenges";
import { useCountdown } from '../hooks/useCountdown';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useCountdown();

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return (
    <div>
        <div className= {styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button
            disabled
            className= {styles.CountdownButton}
            >
                Ciclo encerrado
            </button>
        ) : (
            <>
                { isActive ? (
            <button
            type="button"
            className= {`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
            onClick={resetCountdown}
            >
                Abandonar ciclo
            </button>
        ) : (
            <button
            type="button"
            className={styles.CountdownButton}
            onClick={startCountdown}
            >
                Inciar ciclo
            </button>
        )} 
            </>
        )}

    </div>
    );
}