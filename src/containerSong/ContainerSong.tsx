import styles from './ContainerSong.module.css'
import { Link } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import { ContainerSongProps } from '../shared/interfaces/ContainerSong.interfaces';

const ContainerSong = ({ song, isFavorite, toggleFavorite }: ContainerSongProps) => {
    return (
        <>
            <tbody>
                <tr >
                    <td className={styles.center}>
                        <img
                            className={styles.songImage}
                            src={song.image}
                            alt={song.title}
                        />
                        <div>
                            <h4>{song.title}</h4>
                            <Link to={'/artist'}>
                                <h6 className={styles.artistName}>{song.artist}</h6>
                            </Link>
                        </div>
                    </td>
                    <td>{song.duration}</td>
                    <td className={styles.actions}>
                        <button onClick={toggleFavorite} className={styles.likeButton}>{isFavorite ? <FcLike /> : <FcLikePlaceholder />}</button>
                        <button className={styles.playButton}><FaPlay /></button>
                    </td>
                </tr>
            </tbody>

        </>
    )
}

export default ContainerSong