"use client" 

import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Title from "../components/Title";
import '../styles/header.css'


const DefaultLayout: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {

    return (
        <>
            <div className={`${className} page-header max-w-full flex justify-between gap-4 flex-row bg-dawn h-12 sticky z-[99] -mt-0.5 p-2 border-y-secondary border-b border-solid border-t top-0`}>
                <Title/> 
                <Toolbar />
            </div>
            <div className="main-content h-full overflow-auto px-16 py-8 max-md:p-4">
                <Title/> 
                {children}
            </div>    
        </>
    );
};

export default DefaultLayout;
