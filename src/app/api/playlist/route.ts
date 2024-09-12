import { NextResponse } from 'next/server';
import { generateToken, getCurrentPlaylist } from '@/lib/api/spotify';
import extractToken, { AccessTokenReponse } from '@/utils/api/extractToken';
import extractPlaylistData from '@/utils/api/extractPlaylistData';

export async function POST() {

    try {
        const tokenReponse : AccessTokenReponse = await generateToken();
        const accessToken : string = extractToken(tokenReponse);
        const playlistReponse = await getCurrentPlaylist(accessToken);
        const playlistData = extractPlaylistData(playlistReponse);
        return NextResponse.json( playlistData );
    } catch (error) {
        const errorMessage : Error = error as Error;
        console.error(errorMessage.message);
        return NextResponse.json({}, {status: 400, statusText: errorMessage.message as string});
    }
    
}