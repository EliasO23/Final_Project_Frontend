import ImagineDragons from '../assets/img/ImagineDragons.jpeg'
import OneRepublic from '../assets/img/One_Republic.jpeg'
import GrupoFrontera from '../assets/img/GrupoFrontera.jpeg'
import Codplay from '../assets/img/Codplay.jpeg'
import GrupoFirme from '../assets/img/GrupoFirme.jpeg'
import Avicii from '../assets/img/Avicii.jpg'
import MarkAmbor from '../assets/img/MarkAmbor.jpeg'
import styles from './ArtistCardList.module.css'
import ArtistCard from '../artistCard/ArtistCard'

const ArtistCardList = () => {

  const artistList = [
    {
      id: 1,
      name: 'Imagine Dragons',
      image: ImagineDragons,
    },
    {
      id: 2,
      name: 'One Republic',
      image: OneRepublic,
    },
    {
      id: 3,
      name: 'Grupo Frontera',
      image: GrupoFrontera,
    },
    {
      id: 4,
      name: 'Grupo Firme',
      image: GrupoFirme,
    },
    {
      id: 5,
      name: 'Avicii',
      image: Avicii,
    },
    {
      id: 6,
      name: 'Codplay',
      image: Codplay,
    },
    {
      id: 7,
      name: 'Mark Ambor',
      image: MarkAmbor,
    },
  ];

  return (
    <div className={styles.artistCardList}>
      {artistList.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}

export default ArtistCardList