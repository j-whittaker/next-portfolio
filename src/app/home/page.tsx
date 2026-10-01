"use client" 

import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ContactWidget from "../../components/ContactWidget";
import Image from "next/image";
import { PAGE_LIST } from "../../constants/PageConstants";
import '../../styles/pages/home.css';
import dynamic from "next/dynamic";

const TestimonialSlider: React.ComponentType<object>  = dynamic(() => import('../../components/TestimonialSlider'), {});

const HomePage = () => {

  return (
          <DefaultLayout className="home">
            <h2>{PAGE_LIST.HOME_PAGE}</h2>
            <div className="content-wrapper two-col gap-12 max-sm:gap-6 max-sm:!flex-col-reverse">
              <div className="lg-col">
                <span className="inline-block mb-8">I am a full-stack software engineer who enjoys turning messy real-world problems into reliable software.
                  Most recently at ServiceTrade, I built TypeScript data pipelines on AWS that keep a field-service platform in sync with accounting systems like Sage Intacct and QuickBooks.
                  Before that, at Kadro Solutions, I built and tuned e-commerce sites, from Magento backends to fast, responsive frontends.
                  Outside of work, you&apos;ll find me climbing, hiking or exploring new music.
                </span>
                <ContactWidget />
              </div>
              <div className="image-wrapper text-center sm-col">
                <Image src="/ProfilePicture.jpg" width="500" height="500" className="w-full aspect-square object-cover rounded-full shadow-lg" alt="Profile Picture"/>
              </div>
            </div>
            <div className="home-section">
              <h2>Testimonials</h2>
              <div className="content-wrapper">
                <TestimonialSlider />
              </div>
            </div>
          </DefaultLayout>
  );

}

export default HomePage;