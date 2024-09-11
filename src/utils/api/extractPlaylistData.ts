export interface Track {
    name: string;
    album: string;
    artists: string[];
    url: string;
}
export interface PlaylistToDisplay {
    tracks: Track[];
    url?: string;
}

export default function extractPlaylistData(response : any) : PlaylistToDisplay {
    if(!response.data) {
        throw new Error('No data provided in playlist response')
    }
    
    return {tracks: mapTracks(response.data.tracks.items), url: response.data.external_urls.spotify};

}

function mapTracks(data : any[]) : Track[] {

    const convertTrack: (track: any) 
        => Track = (track) => {return {
            name: track.track.name, 
            album: track.track.album.name, 
            artists: createArtistNameArray(track.track.artists), 
            url: track.track.external_urls.spotify
        }
    };

    return data.map(convertTrack);
}

function createArtistNameArray(artistsData: any[]) : string[] {
    const artists : string[] = [];

    for(let i : number = 0; i < artistsData.length; i++) {
        artists.push(artistsData[i].name);
    }
    return artists;
}