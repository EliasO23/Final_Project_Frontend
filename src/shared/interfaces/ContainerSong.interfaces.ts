export interface Song {
    id: number;
    title: string;
    artist: string;
    image: string;
    duration: string;
}

export interface ContainerSongProps {
    song: Song;
    isFavorite: boolean;
    toggleFavorite: () => void;
}
