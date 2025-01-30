
import BlindingLights from "../assets/img/Blinding_Lights.png"
import CountingStar from "../assets/img/Counting_Stars.jpeg"
import Stargazing from "../assets/img/Stargazing.jpeg"
import BelongTogether from "../assets/img/BelongTogether.jpg"
import { useEffect, useState } from 'react';
import ContainerSong from '../containerSong/ContainerSong';
import styles from './ListSongs.module.css'
import { IoMusicalNotesSharp } from "react-icons/io5";

const ListSongs = () => {

  // Lista de canciones
  const songList = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: BlindingLights,
      duration: "04:01"
    },
    {
      id: 2,
      title: "Counting Stars",
      artist: "One Republic",
      image: CountingStar,
      duration: "03:35"
    },
    {
      id: 3,
      title: "Stargazing",
      artist: "Myles Smith",
      image: Stargazing,
      duration: "03:50"
    },
    {
      id: 4,
      title: "Belong Together",
      artist: "Mark Ambor",
      image: BelongTogether,
      duration: "02:30"
    }
  ];

  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(isFavorite));
  }, [isFavorite]);

  // Función para cambiar el estado de favorito
  const toggleFavorite = (songId: number) => {
    setIsFavorite((prevFavorites: { [key: number]: boolean }) => ({
      ...prevFavorites,
      [songId]: !prevFavorites[songId],
    })); 
  };

  return (
    <>
      <section className={styles.songFavorites}>
        <h2>Made for you</h2>
        <section className={styles.mixCard}>
          <div className={styles.icon}>
            <i><IoMusicalNotesSharp /></i>
            <h4>Kodigo Music</h4>
          </div>
          <h2>Favorites</h2>
          <h3>Mix</h3>
        </section>
      </section>

      <section className={styles.recentlyPlayed}>
        <h3>Recently Played</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Song</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          {songList.map((song) => (
              <ContainerSong
                key={song.id}
                song={song}
                isFavorite={isFavorite[song.id]} // Pasamos si es favorito o no
                toggleFavorite={() => toggleFavorite(song.id)} // Pasamos la función para alternar favorito

              />
            ))}
        </table>
      </section>

    </>
  )
}

export default ListSongs