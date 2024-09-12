import { AccessTokenReponse } from '@/utils/api/extractToken';
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
export const generateToken = async () : Promise<AccessTokenReponse> => {
  
    const credsBuffer : Buffer = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET);

    try {
        const response = await axios.post<AccessTokenReponse>(`${BASE_SPOTIFY_URL}/api/token`, new URLSearchParams({
            grant_type: 'client_credentials',
        }), {
            headers: {
                'Authorization': `Basic ${credsBuffer.toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    } catch (error) {
        const errorMessage : Error = error as Error;
        console.error(`generateToken url: ${BASE_SPOTIFY_URL}/api/token message: ${errorMessage.message}`);
        throw new Error('Trouble getting Access Token');
    }
    
}

/**
 * Get current playlist author is listening to (from env)
 * 
 * @param access_token string
 */
export const getCurrentPlaylist = async ( access_token: string ) : Promise<unknown> => {
    
    try {
        const response = await axios.get(`${BASE_SPOTIFY_API_URL}playlists/${CURRENT_PLAYLIST}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    } catch(error) {
        const errorMessage : Error = error as Error;
        console.error(`getCurrentPlaylist url: ${BASE_SPOTIFY_API_URL}playlists/${CURRENT_PLAYLIST} message: ${errorMessage.message}`);
        throw new Error('Trouble loading playlist');
    }
}

