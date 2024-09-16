"use client"

import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import '../../styles/pages/experience.css';
import CollapsibleSection from "../../components/CollapsibleSection";
import mediaQuery from "@/utils/tools/mediaQuery";


const RoleSection : React.FC = () => {
    const [expandFirst, setExpandFirst] = useState(false);

    useEffect(() => {
        mediaQuery('(max-width: 767px)', setExpandFirst);
    }, [])

    const experience : React.ReactElement[] = [];

    const kadroContent : React.ReactElement = 
        (
            <>
                <ul className="work-xp">
                    <li key="1">Integrated with a major Web-To-Print software library to provide customers the ability to order custom printed paper products.</li>
                    <li key="2">Improved user experience and SEO for our clients website, and improved page speed insights by 25 points, by utilizing lazy-load/async techniques and reducing Cumulative Layout Shift </li>
                    <li key="3">Integrated an E-Commerce backend with review analytics to allow for custom rendering of the review-to-product relationship</li>
                    <li key="4">Documented frequently used code and performance enhancing changes for other developers to swiftly implement</li>
                    <li key="5">Customized a backend order import integration to be compatible with JDE</li>
                    <li key="6">Provided critical bug fixes and implementation requests to a Magento site, leading to a tripling of holiday revenue</li>
                    <li key="7">Mentored and provided training in backend and frontend development for co-ops and new hires</li>
                    <li key="8">Developed in AlpineJS and TailwindCSS to build a responsive and performant frontend experience</li>
                    <li key="9">Utilized JavaScript, HTML and LESS to implement frontend functionality that enhanced customer interaction with client websites </li>
                    <li key="10">Balanced priorities between developing functionality for new projects and providing support for existing customers </li>
                    <li key="11">Built Docker environments for other developers to use for local development, reducing environment related blockers</li>
                    <li key="12">Deployed Project applications to Production and Staging environments via Magento Cloud on AWS</li>
                </ul>
            </>
        );
    experience.push(<CollapsibleSection key="kadro" additionalClasses="exp-page" title="Senior Software Engineer at Kadro Solutions Inc." content={kadroContent} defaultCollapse={!expandFirst}/>);
    
    const bcbsncContent : React.ReactElement = 
        (
            <>
                <ul className="work-xp">
                    <li>Worked with the API Connect tool </li>
                    <li>Worked with Postman, and SOAP UI to Test REST/SOAP Services </li>
                    <li>Managed, Tested, and Documented Company-wide Services </li>
                    <li>Prepared and Presented demo of software tool to a team of 20 People </li>
                </ul>
            </>
        );
    experience.push(<CollapsibleSection key="bcbsnc" additionalClasses="exp-page" title="IT Service Delivery Intern at Blue Cross and Blue Shield of NC" content={bcbsncContent} />);
    
    const simpleAuctionSiteContent : React.ReactElement = 
        (
            <>
                <ul className="work-xp">
                    <li>Solved software bugs using logic and software testing </li>
                    <li>Coded fullstack enhancements and modifications for online software in C# </li>
                    <li>Database management and manipulation through MySQL server </li>
                </ul>
            </>
        );

    experience.push(<CollapsibleSection key="simpleaucsite" additionalClasses="exp-page" title="Programming Intern at Simple Auction Site" content={simpleAuctionSiteContent} />);
    
    return <div className="exp-section"><h2>Experience</h2><div className="experience-wrapper">{experience}</div></div>;
}

const TechnologiesSection : React.FC = () => {
    const areas : React.ReactElement[] = [];

    const backendContent : React.ReactElement = (
        <>
            <ul className='work-xp'>
                <li>PHP</li>
                <li>MySQL</li>
                <li>C#</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </>
    );

    areas.push(<CollapsibleSection key="backend" additionalClasses="exp-page" title="Backend" content={backendContent}/>);

    const frontendContent : React.ReactElement = (
        <>
            <ul className='work-xp'>
                <li>JavaScript</li>
                <li>ReactJS + Vite</li>
                <li>TailwindCSS</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>AlpineJS</li>
                <li>KnockoutJS</li>
                <li>LESS</li>
                <li>HTML</li>
            </ul>
        </>
    );

    areas.push(<CollapsibleSection key="frontend" additionalClasses="exp-page" title="Frontend" content={frontendContent}/>);

    const envContent : React.ReactElement = (
        <>
            <ul className='work-exp'>
                <li>Linux</li>
                <li>Adobe Cloud</li>
                <li>Docker</li>
                <li>WSL</li>
            </ul>
        </>
    );

    areas.push(<CollapsibleSection key="environments" additionalClasses="exp-page" title="Environments" content={envContent}/>);

    return <div className="exp-section"><h2>Technologies</h2><div className="experience-wrapper">{areas}</div></div>;
}

const ExperiencePage : React.FC = () => {

  return (
          <DefaultLayout className="experience">
            <RoleSection />
            <TechnologiesSection />
          </DefaultLayout>
  );

}

export default ExperiencePage;