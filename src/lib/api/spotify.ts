import axios from 'axios';

const CLIENT_ID : string | undefined = process.env.SPOTIFY_CLIENT_ID;

const CLIENT_SECRET : string | undefined = process.env.SPOTIFY_CLIENT_SECRET;

const CURRENT_PLAYLIST : string | undefined = process.env.SPOTIFY_PLAYLIST_ID;

export const BASE_SPOTIFY_URL : string | undefined = process.env.SPOTIFY_BASE_URL;

const BASE_SPOTIFY_API_URL : string | undefined = process.env.SPOTIFY_BASE_API_URL;


/**
 * Access Token for Spotify
 * @returns string | null
 */
export const generateToken = async () : Promise<any> => {
  
    const credsBuffer : Buffer = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET);

    const response = await axios.post(`${BASE_SPOTIFY_URL}/api/token`, new URLSearchParams({
        grant_type: 'client_credentials',
    }), {
        headers: {
            'Authorization': `Basic ${credsBuffer.toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    //TODO handle responses

    return response;

}

/**
 * Get current playlist author is listening to (from env)
 * 
 * @param access_token string
 */
export const getCurrentPlaylist = async ( access_token: string ) => {
    const response = await axios.get(`${BASE_SPOTIFY_API_URL}playlists/${CURRENT_PLAYLIST}`, {
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    //TODO handle reponse codes

    return response;
}

