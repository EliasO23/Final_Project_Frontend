import styles from './SongCard.module.css'
import { FaPause } from "react-icons/fa6";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDebugReverseContinue } from "react-icons/vsc";

const SongCard = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.songCard}>
                <section className={styles.songInfo}>
                    <h3>I Ain't Worried</h3>
                    <h5>One Republic</h5>
                    <section className={styles.playerControls}>
                        <input
                            type="range"
                            className={styles.progressBar}
                            min="0"
                            max="100"
                            value="40"
                            readOnly
                        />
                        <section className={styles.time}>
                            <p>1:42</p>
                            <p>3:51</p>
                        </section>
                        <section className={styles.controls}>
                            <i><VscDebugReverseContinue /></i>
                            <i><FaPause /></i>
                            <i><VscDebugContinue /></i>
                        </section>
                    </section>
                </section>
            </div>
            <div className={styles.songliked}>
                <h2>Liked <br /><span>Songs</span></h2>
                <h5>100 Songs</h5>
            </div>
        </div>

    )
}

export default SongCard