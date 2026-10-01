"use client"

import {  usePathname } from 'next/navigation';
import { DefaultPage, PAGE_LIST, PAGE_TO_PATH_MAP, PATH_TO_PAGE_MAP, validPages } from '../constants/PageConstants'
import { useCallback } from 'react';
import React from 'react';
import Link from 'next/link';



interface NavLinkProperties {
    section: DefaultPage;
    isActive: boolean;
}

const NavLink : React.FC<NavLinkProperties> = ({section, isActive}) => {
    return <Link className={`nav-btn text-offwhite text-sm font-medium leading-normal cursor-pointer tracking-[0.08em] uppercase bg-transparent px-3 py-1.5 rounded-md hover:bg-white/10 hover:text-white ${isActive ? 'active' : ''}` } href={`${PAGE_TO_PATH_MAP[section]}`} >{section}</Link>;
}

const Toolbar : React.FC = () => {
    const pathName = usePathname();

    const getActiveSection = useCallback(() => {
        return PATH_TO_PAGE_MAP[pathName] ?? PAGE_LIST.HOME_PAGE;
    },[pathName]);

    const activeSection = getActiveSection();

    const navLinks : React.ReactElement[] = validPages.map((page) : React.ReactElement => {
        return <NavLink key={page} section={page} isActive={page == activeSection} />
    });
       
    return ( 
        <div className="toolbar flex items-center justify-end gap-2">
          {navLinks}
        </div>
    );
}

export default Toolbar;