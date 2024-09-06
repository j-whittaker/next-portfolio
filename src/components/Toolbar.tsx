"use client"

import { useRouter, usePathname } from 'next/navigation';
import { DefaultPage, PAGE_LIST, PAGE_TO_PATH_MAP, PATH_TO_PAGE_MAP, validPages } from '../constants/PageConstants'
import { useCallback } from 'react';
import React from 'react';



interface NavLinkProperties {
    section: DefaultPage;
    setActiveSection: Function;
    isActive: boolean;
}

const NavLink : React.FC<NavLinkProperties> = ({section, setActiveSection, isActive}) => {
    return <button className={`nav-btn text-offwhite font-medium tracking-[0] uppercase bg-transparent bg-no-repeat px-2 py-1 rounded-[unset] hover:border-2 hover:border-solid hover:border-offwhite ${isActive ? 'active' : ''}` } onClick={() => {setActiveSection(section)}} name={section}>{section}</button>;
}

const Toolbar : React.FC = () => {
    const router = useRouter();

    const getActiveSection = useCallback(() => {
        return PATH_TO_PAGE_MAP[usePathname()] ?? PAGE_LIST.HOME_PAGE;
    },[router]);

    const setActiveSection = useCallback((page : DefaultPage) => {
        router.push(PAGE_TO_PATH_MAP[page]);
    },[router])

    const activeSection = getActiveSection();

    const navLinks : React.ReactElement[] = validPages.map((page) : React.ReactElement => {
        return <NavLink key={page} section={page} isActive={page == activeSection} setActiveSection={setActiveSection} />
    });
       
    return ( 
        <div className="toolbar flex justify-between basis-2/5 gap-0.5">
          {navLinks}
        </div>
    );
}

export default Toolbar;