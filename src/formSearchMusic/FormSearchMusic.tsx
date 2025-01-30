
import { useState } from 'react'
import { searchTrack } from '../shared/services/spotifyService.tsx'
import styles from './FormSearchMusic.module.css'

const FormSearchMusic = () => {
    const [query, setQuery] = useState('')
    const [tracks, setTraks] = useState<{ album: { images: { url: string }[] }, name: string, artists: { name: string }[] }[]>([])

    const handleSearch = async () => {
        if (!query) return;
        const results = await searchTrack(query);
        setTraks(results);
    }


    return (
        <>
            <div className={styles.container}>
                <h2>Busca tus canciones favoritas</h2>

                <input
                    type="text"
                    placeholder="Escribe el nombre de una canción..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.input}
                />
                <button className={styles.btn} onClick={handleSearch}>Buscar</button>

                <h3 className={styles.results}> Resultados de busqueda .. </h3>

                <ul className={styles.list}>
                    {tracks.map((track, index) => (
                        <li key={index}>
                            <img src={track.album.images[0].url} alt={track.name} />
                            <div className={styles.songInfo}>
                                <h3>{track.name}</h3>
                                <p>{track.artists[0].name}</p>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default FormSearchMusic