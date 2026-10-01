"use client" 

import React from "react";
import Toolbar from "./Toolbar";
import Title from "../components/Title";
import '../styles/header.css'


const DefaultLayout: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {

    return (
        <>
            <div className={`${className} page-header max-w-full bg-dawn h-14 sticky z-[99] px-16 max-md:px-4 shadow-md top-0`}>
                <div className="mx-auto w-full max-w-[70rem] h-full flex justify-between items-center gap-4 flex-row">
                    <Title/>
                    <Toolbar />
                </div>
            </div>
            <div className="main-content h-full overflow-auto px-16 py-8 max-md:p-4">
                <div className="mx-auto w-full max-w-[70rem]">
                    <Title/>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
