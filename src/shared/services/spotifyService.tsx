const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const API_URL = 'https://api.spotify.com/v1';

const accessToken = '';

const getAccessToken = async () => {
    if (accessToken) {
        return accessToken;
    }

    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    return data.access_token;
};


const searchTrack = async (query: string) => {
    const token = await getAccessToken();
    const response = await fetch(`${API_URL}/search?q=${query}&type=track&limit=10`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    
    const data = await response.json();
    console.log(data);
    return data.tracks.items;
};

export { searchTrack };
