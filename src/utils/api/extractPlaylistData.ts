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

export interface PlaylistReponse {
    tracks: {items: []};
    external_urls: {spotify: string};
}

export interface ResponseTrack {
    track: {
        name: string;
        album: {
            name: string;
        };
        artists: ResponseArtist[];
        external_urls: {spotify: string};
    }
}

export interface ResponseArtist {
    name: string;
} 

export default function extractPlaylistData(response : unknown) : PlaylistToDisplay {
    if(!response) {
        throw new Error('No data provided in playlist response')
    }
    const respData : PlaylistReponse = response as PlaylistReponse;
    
    return {tracks: mapTracks(respData.tracks.items), url: respData.external_urls.spotify};

}

function mapTracks(data : ResponseTrack[]) : Track[] {

    const convertTrack: (track: ResponseTrack) 
        => Track = (track) => {return {
            name: track.track.name, 
            album: track.track.album.name, 
            artists: createArtistNameArray(track.track.artists), 
            url: track.track.external_urls.spotify
        }
    };

    return data.map(convertTrack);
}

function createArtistNameArray(artistsData: ResponseArtist[]) : string[] {
    const artists : string[] = [];

    for(let i : number = 0; i < artistsData.length; i++) {
        artists.push(artistsData[i].name);
    }
    return artists;
}