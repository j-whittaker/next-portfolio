"use client"

import { useCallback, useRef } from 'react';
import Image from 'next/image';
import ArrowIcon from '../../public/assets/arrow.svg';
import useProperty from '../hooks/useProperty';
import '../styles/components/collapsibleSection.css'
import React from 'react';

function Arrow({collapsed}: {collapsed: boolean}) {
    return <Image alt="collapse and expand arrow" className={`collapse-section-toggle ${collapsed ? 'collapsed' : ''}`} src={ArrowIcon}/>;
}

const CollapsibleSection : React.FC<{title: string, content: React.ReactElement, additionalClasses: string, defaultCollapse?: boolean}> = ({title, content, additionalClasses='', defaultCollapse = true}) => {
    const [collapsed, setCollapsed] = useProperty(defaultCollapse);
    setCollapsed(defaultCollapse);
    const parentWrapperClass = 'collapse-section-container'; 
    const wrapperRef = useRef(null); 

    const toggleCollpase = useCallback(() => {        
        setCollapsed(!collapsed);
        if(wrapperRef.current) {
            const wrapperElem = wrapperRef.current as HTMLDivElement;
            wrapperElem.classList.toggle('collapsed');
        }
    }, []);

    return <div ref={wrapperRef} className={`mb-4 ${parentWrapperClass} ${additionalClasses} ${collapsed ? 'collapsed' : ''}`}>
                {/* Icon by icon king1 on freeicons.io https://freeicons.io/undefined/arrow-arrow%20down-down-drop-stroke%20arrow-icon-706 */}
                <span onClick={toggleCollpase} className="title-container flex justify-between items-center"><h3 className="title flex items-center justify-between">{title}</h3><Arrow collapsed={collapsed}/></span>
                <div className="collapse-content-wrapper">{content}</div>
        </div>
        
    ;
}

export default CollapsibleSection;