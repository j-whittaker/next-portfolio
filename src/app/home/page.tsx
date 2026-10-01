"use client" 

import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ContactWidget from "../../components/ContactWidget";
import Image from "next/image";
import { PAGE_LIST } from "../../constants/PageConstants";
import '../../styles/pages/home.css';

const HomePage = () => {

  return (
          <DefaultLayout className="home">
            <h2>{PAGE_LIST.HOME_PAGE}</h2>
            <div className="content-wrapper two-col max-sm:!flex-col-reverse">
              <div className="lg-col">
                <span className="inline-block mb-8">I am eager to apply my problem-solving skills to develop and maintain high-quality software that surpasses expectations. 
                  With full-stack experience and a passion for creating solutions to real-world problems, I am dedicated to delivering impactful results. 
                  In my free time, I enjoy exploring new music.
                </span>
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