import { NextResponse } from 'next/server';
import { generateToken, getCurrentPlaylist } from '@/lib/api/spotify';
import extractToken from '@/utils/api/extractToken';
import extractPlaylistData from '@/utils/api/extractPlaylistData';

export async function GET() {

    try {
        const tokenReponse : Promise<any> = await generateToken();
        const accessToken : string = extractToken(tokenReponse);
        const playlistReponse = await getCurrentPlaylist(accessToken);
        const playlistData = extractPlaylistData(playlistReponse);
        return NextResponse.json( playlistData );
    } catch (error) {
        const errorMessage : Error = error as Error;
        console.log(errorMessage.message);
        return NextResponse.json({}, {status: 400, statusText: errorMessage.message as string});
    }
    
    
}