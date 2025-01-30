import { useState } from 'react';
import styles from './ArtistCard.module.css';
import { FaPlay } from 'react-icons/fa';
import { Artist } from '../shared/interfaces/ArtistCard.interfaces';

const ArtistCard = ( {artist}: {artist: Artist} ) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.artistCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <img src={artist.image} alt={artist.name} className={styles.artistImage} />
            </div>
            <div className={styles.infoArtist}>
                <h3 className={styles.artistName}>{artist.name}</h3>
                <p className={styles.artistLabel}>Artista</p>
            </div>
            {isHovered && (
                <button className={styles.playButton}>
                    <FaPlay />
                </button>
            )}
        </div>
    )
}

export default ArtistCard