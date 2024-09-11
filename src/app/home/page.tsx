import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ContactWidget from "../../components/ContactWidget";
import Image from "next/image";
import { PAGE_LIST } from "../../constants/PageConstants";
import '../../styles/pages/home.css';
import SpotifyContainer from "@/components/spotify/SpotifyContainer";
import { PlaylistToDisplay } from "@/utils/api/extractPlaylistData"
import axios from 'axios';

const baseUrl : string = process.env.baseUrl ?? 'http://localhost:3000';

const playlistUrl = `${baseUrl}/api/playlist`;

const HomePage = async () => {

  const response = await axios.get(playlistUrl);

  if(!response.data) {
    return;
  }

  let playlistData: PlaylistToDisplay = response.data as PlaylistToDisplay;

  return (
          <DefaultLayout className="home">
            <h2>{PAGE_LIST.HOME_PAGE}</h2>
            <div className="content-wrapper two-col max-sm:!flex-col-reverse">
              <div className="lg-col">
                <span className="inline-block mb-8">I'm looking to apply my problem solving skills to build and maintain excellent software that exceeds expectations. 
                  I have full stack experience and a passion for building solutions that addresses real world problems. In my free time I enjoy exploring new music.
                  Below you can find what I am currently listening to.
                </span>
                <SpotifyContainer tracklist={playlistData.tracks}/>
                <ContactWidget />
              </div>
              <div className="image-wrapper text-center sm-col">
                <Image src="/ProfilePicture.png" width="500" height="500" className="w-full" alt="Profile Picture"/>
              </div>
            </div>
          </DefaultLayout>
  );

}

export default HomePage;