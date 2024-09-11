"use client"

import { Track as TrackInterface } from "@/utils/api/extractPlaylistData"
import Track from "./Track";
import { BASE_SPOTIFY_URL } from "@/lib/api/spotify";
import spotifyLogo from '../../../public/assets/spotify_logo.svg';
import Image from 'next/image';
import openUrlNewWindow from "@/utils/tools/openUrlNewWindow";


export const SpotifyLogo = () => {
    return (<><span className="w-[12.5%] !mx-0 !basis-1/4 cursor-pointer" onClick={()=> openUrlNewWindow(BASE_SPOTIFY_URL ?? '')}><Image src={spotifyLogo} alt="spotify"/></span></>);
} 

const SpotifyContainer : React.FC<{tracklist: TrackInterface[] | undefined}> =  ({tracklist = []}) =>  {

    const trackList = [<Track name={"Name"} album={"Album"} url={""} artists={["Artist"]} key={"header"} disableHover={true} additionalClasses="!bg-primary rounded"/>].concat(tracklist.map(
        (track) => <Track name={track.name} album={track.album} url={track.url} artists={track.artists} key={track.name + track.album}/>
    ));

    return (
        <>
        <div className="flex justify-between items-center !m-0 w-11/12">
            <span className="text-primary font-[700]">Currently Playing...</span>
            <SpotifyLogo/>
        </div>
        <div className={`${tracklist.length == 0 ? 'min-h-[150px]' : ''} flex max-w-full w-11/12 flex-col !mx-0 !mt-4 !mb-8 !pb-1 rounded-md border bg-medgrey border-secondary`}>{trackList}</div>
        </>
    );
}

export default SpotifyContainer;