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
        const headers = new Headers();
        headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        headers.set('Pragma', 'no-cache');
        headers.set('Expires', '0');
        return NextResponse.json( playlistData,{ headers });
    } catch (error) {
        const errorMessage : Error = error as Error;
        console.log(errorMessage.message);
        return NextResponse.json({}, {status: 400, statusText: errorMessage.message as string});
    }
    
    
}